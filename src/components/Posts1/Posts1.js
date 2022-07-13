import React, { useContext } from 'react'
import { Context } from '../../context/Context';
import Post1 from '../Post1/Post1';
import './Posts1.css';
export default function Posts1({posts}) {
  const {user}=useContext(Context);
  return (
    <div className='Posts'>
          {posts.map((p)=>(
 <Post1 post= {p}/>
       ))}
       
         
    
       
       
        </div>
  )
}

