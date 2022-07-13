import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { red } from '@mui/material/colors';
import './Post.css';
import { Link } from 'react-router-dom';
import { useContext,useState,useEffect} from 'react';
import {axios} from "axios";
import { Context } from '../../context/Context';
export default function Post({post}) {
  const{user}=useContext(Context);
const [like, setLike] = useState(post.likes.length);
const [isLiked, setIsLiked] = useState(false);
const[comments,setComments]=useState([]);

   const PF="http://localhost:5000/images/";
   useEffect(() => {
    setIsLiked(post.likes.includes( user.username));
  }, [ user.username, post.likes]);

   const likeHandler = async() => {
    try {
 await axios.put(`/posts/${post._id}/like`,
             {username: user.username});
             setLike(isLiked ? like - 1 : like + 1);
             setIsLiked(!isLiked);
             console.log(username);
          } catch (err) {
    }
    
  };
     return (
    <div className='Post'>
{
      <Card sx={{maxWidth: 500}}>
      <CardHeader
       avatar={<Avatar sx={{ bgcolor: red[500] }} alt={post.username} 
       src={PF+post.profilePic}/>}
       title={ <Link to={`/posts/?user=${post.username}`}>{post.username}</Link>}
      />
           <CardMedia
        component="img"
        height="200"
        image= {PF+post.image}
        alt="Paella dish"
      />
           <CardContent>
      <Link to ={`/post/${post._id}`}><Typography variant="body2" color="text.secondary">
    {post.title}
        </Typography> </Link>
     
        <Typography variant="body2" color="text.secondary">
        {post.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <div className='commentstyle'>
               <div >
 <button onClick={likeHandler}>like</button>
      <span>  {like} people like it</span>
        </div>
            <br/>
            <div>
                      
                        </div>
            </div>
      </CardActions>
    
    </Card>
}

 
  
    </div>
  )
}

//<Posts/>
//<Spage/>
//<Addpost/>