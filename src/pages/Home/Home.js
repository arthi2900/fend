import React, { useContext, useEffect, useState } from 'react'
import Header from "../../components/Header/Header";
import Posts from '../../components/Posts/Posts';
import Addpost from '../Addpost/Addpost';
import Spage from '../Spage/Spage';
import Updateprofile from '../Updateprofile/Updateprofile';
import "./Home.css";
import axios from "axios";
import { Context } from '../../context/Context';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [posts,setPosts]=useState([]);
  const {search}=useLocation();
  const {user}=useContext(Context);
  console.log(location);
  //console.log(user);
   //const name=user.username;
  //console.log(name);
  useEffect(()=>{
    const fetchPosts=async()=>{
    const res=await axios.get("/posts"+search)
    //console.log(res)
    setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
    <div>
        <Header/>
        <h1> welcome for my app</h1>
        <div>
           <Posts posts={posts}/>
          

        </div>
    </div>
  )
}
//<Posts/>
//<Spage/>
//<Addpost/>
