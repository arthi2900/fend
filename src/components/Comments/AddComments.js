import React, {useState}from 'react'
import {  IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
export default function AddComments() {
  const [comments,setComments]=useState("");
  return (
    <div>
     <form>
      <input type="text" placeholder="comments"/>
      <IconButton type="submit" onClick={()=>{
        const newcomments = {
          comment: comment
        };
        setComments([...comments, newcomments]);
            }}>
        <SendIcon/>
      </IconButton>
          </form> 
    </div>
  )
}
