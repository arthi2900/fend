import React, { useContext,useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './Comments.css';
import { Context } from '../../context/Context';

export default function Comments({comment}) {
  const {user}=useContext(Context);
   return (
    <div>
  <Card sx={{ maxwidth: '25%', maxheight: '65%', margin: '5%', }}>
              <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} alt="sdtg"
         src={user.profile}  />} title={user.username} />
      <CardActionArea>
        <h5>{comment}</h5>
              </CardActionArea></Card>
    </div>
  )
}



