import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import './Post1.css';
import { Link } from 'react-router-dom';
import { useContext,useState } from 'react';
import { Context } from '../../context/Context';
export default function Post1({post}) {
  const{user}=useContext(Context);
   const PF="http://localhost:5000/images/";
   return (
    <div className='Post'>
      
      { post.username=== user.username &&
(
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
  <CardActions disableSpacing>
  <div className='commentstyle'>
        <div >
        <button >like</button>
      <span>  people like it</span>
        </div>
            <br/>
            <div>
            <Card>
      <AddComments/>
           <Commentslist />
            </Card>
             
                        </div>
            </div>
            
  </CardActions>

</Card>
)


      }

    

 
  
    </div>
  )
}
