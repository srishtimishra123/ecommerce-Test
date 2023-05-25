import React from "react";
import { useNavigate } from 'react-router-dom';
import EditProfile from "./EditProfile";
import Profile from "./Profile";

const Dashboard = ()=>{
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear()
        // window.location.reload()
        navigate('/')

    }   
    return(
        <>
        <h2>Dashboard</h2>

        <p onClick={logout} className="text-white">Logout</p>
        <div className="row m-2" style={{border:'1px solid #80808029',borderRadius:'5px',overflowX:'hidden'}}>
            <div className="col-lg-6 col-sm-12"  >  <Profile/></div>
            <div className="col-lg-6 col-sm-12"> <EditProfile/></div>
        </div>
      
       
        </>
    )
}

export default Dashboard;