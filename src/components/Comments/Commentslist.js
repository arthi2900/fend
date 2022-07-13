import { Card } from '@mui/material'
import React from 'react'
import Comments from './Comments'

export default function Commentslist({comments}) {
  return (
    <div>
          {comments.map((c1)=>(
  <Comments comment={c1} />
     ))

     }
           </div>
  )
}
