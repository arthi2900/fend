import React, { useEffect,useState } from 'react'
import './Spage.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
import { useContext } from 'react';
import { Context } from '../../context/Context';
export default function Spage() {
  const PF="http://localhost:5000/images/";
  const location=useLocation()
  const path=location.pathname.split("/")[2];
  const [post, setPost]=useState({})
  const {user}=useContext(Context);
  const [title,setTitle]=useState(" ");
  const [desc,setDesc]=useState(" "); 
  const[updateMode,setUpdateMode]=useState(false);
  //console.log(path);
  useEffect(()=>{
const getPost=async()=>{
  const res=await axios.get("/posts/"+path);
  //console.log(res)
  setPost(res.data);
setTitle(res.data.title);
setDesc(res.data.desc);


};
getPost()
  },[path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

const updatebutton=async ()=>{
  try {
    await axios.put(`/posts/${post._id}`, {
      username: user.username ,title,desc
    });
   // window.location.replace();
   setUpdateMode(false)
  } catch (err) {}
};
 
  

  return (
    <div>
         <Card sx={{maxWidth:770, margin:'1%'}}>
      <CardHeader
                 avatar={<Avatar sx={{ bgcolor: red[500] }} alt={post.username} 
                 src={post.profilePic}/>}
                   title={ <Link to={`/posts/?user=${post.username}`}>{post.username}</Link>}
      />
      {
post.image &&(
  <CardMedia
  component="img"
  height="394"
  image={PF + post.image}
  alt="Paella dish"
/>
)
      }
          <CardContent>
      {
      post.username=== user.username && (
        <>
       
        <IconButton aria-label="add to favorites" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
                <IconButton aria-label="add to favorites" onClick={()=>setUpdateMode(true)}>
          <EditIcon />
        </IconButton>
        </>
              )
    }
      
      <CardActions disableSpacing>
                       </CardActions>
                       {
    updateMode ? <input type="text" value={title} className=" " onChange={(e)=>setTitle(e.target.value)}/>
                         :
                         (
      <Typography variant="body1" color="text.secondary">
             {title}
             </Typography>
                       )}

             {updateMode ?  <textarea type="text" value={desc} className=" " onChange={(e)=>setDesc(e.target.value)}/> :
             (<Typography variant="body2" color="text.secondary" >
             {desc}
             </Typography>)}
            <br/>
            {
              updateMode && (<button onClick={updatebutton}>update</button>)
            }
             
                     
                        
          
      </CardContent>
   
    
    </Card>
    </div>
  )
}
