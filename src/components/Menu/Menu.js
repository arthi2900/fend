import React, { useContext } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from "react-router-dom";
import './Menu.css';
import { Context } from '../../context/Context';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
export function Menu() {
   const {user,dispatch}=useContext(Context);
  const handlelogout=()=>{
    dispatch({type:"LOGOUT"});
           };
           const PF = "http://localhost:5000/images/"
   return (
            <div className='topmenu'>
  < BottomNavigation >
  <Link to="/">
<BottomNavigationAction label="Home" icon={<HomeIcon />} /></Link>
  {
   user && 
   <>
<></>
<Link to="/user/uprofile"> 
<BottomNavigationAction label="Personedit" icon={<ManageAccountsIcon  />} /></Link>
<Link to="/user "> 
<BottomNavigationAction label="Person" icon={<PersonIcon />} /></Link>
<Link to="/post/addpost"><BottomNavigationAction label="AddAPhoto" icon={<AddAPhotoIcon />} /></Link>
 <BottomNavigationAction label="Logout" icon={<LogoutIcon />} onClick={handlelogout} />
 </>
  }<div>
    
    
   {user ?( <Link to="/user/uprofile">  <img className='topimg' src={PF+user.profilePic}/>
   </Link>
 ): (
   <div>

   <Link to="/register"><BottomNavigationAction label="HowToRegIcon" icon={<HowToRegIcon/>} /></Link>
   <Link to="/login"><BottomNavigationAction label="LoginIcon" icon={<LoginIcon/>} /></Link></div>
 )}
</div>

</ BottomNavigation >
 
       </div>
     
   
  )
}