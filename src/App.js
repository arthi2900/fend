import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from '../../fend/src/pages/Login/Login';
import Register from '../../fend/src/pages/Register/Register';
import Home from '../../fend/src/pages/Home/Home';
import { Menu } from './components/Menu/Menu';
import Updateprofile from './pages/Updateprofile/Updateprofile';
import Addpost from './pages/Addpost/Addpost';
import Spage from './pages/Spage/Spage';
import { Context } from './context/Context';
import UserHome from '../../fend/src/pages/UserHome/UserHome';
import { useContext } from 'react';
function App() {
  const {user}=useContext(Context);
  return (
    <div className="App">
      <Router>
        <Menu/>
   <Switch>
   <Route exact path="/"><Home/></Route>
   <Route  path="/post/addpost">{user ?<Addpost/>:<Login/>} </Route>
   <Route  path="/post/:id"> {user ?<Spage/>:<Login/>}</Route>
      <Route  path="/user/uprofile"> {user ?<Updateprofile/>:<Login/>}</Route>
      <Route  path="/user"> {user ?<UserHome/>:<Login/>}</Route>
   <Route path="/user/logout"></Route>
   <Route path="/login">{user ?<Home/>:<Login/>}</Route>
<Route path="/register">{user ?<Home/>:<Register/>}</Route>

   </Switch>
         </Router>
    </div>
  );
}

export default App;
