import React, { useContext, useEffect, useState } from 'react'
import Header from "../../components/Header/Header";
import Posts1 from '../../components/Posts1/Posts1';
import axios from "axios";
import { Context } from '../../context/Context';
import { useLocation } from 'react-router-dom';
export default function UserHome() {
  const [posts,setPosts]=useState([]);
  const {search}=useLocation();
  const {user}=useContext(Context);
  console.log(location);
  //console.log(user);
   const name=user.username;
  console.log(name);
  useEffect(()=>{
    const fetchPosts=async()=>{
    const res=await axios.get("/posts")
    //console.log(res)
    setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
    <div>
        <Header/>
        <div>

<Posts1 posts={posts}/>
        </div>
    </div>
  )
}