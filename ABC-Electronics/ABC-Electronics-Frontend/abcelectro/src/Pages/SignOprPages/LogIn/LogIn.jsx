import React, { useState } from 'react'

import "./LogIn.css";
import { NavLink, useNavigate } from 'react-router-dom';
import ClientServices from '../../../Services/ClientServices';
import AdminServices from "../../../Services/AdminServices";

const LogIn = () => {

    const [ClientData,setClientData]=useState({
        clientId : "",
        password : "",
    })
    const navigate = useNavigate();

    const handleInputChange=(event)=>{
        const name=event.target.name;
        const val=event.target.value;
        setClientData({ ...ClientData, [name]: val  });
    }
    const [admin,setAdmin]=useState(false);
    const handleAdminEntry = ()=>{
        setAdmin(true);
    }
    const [userData,setUserData]=useState({
        Id : "",
        name : "",
        address:"",
        emailId:"",
        phoneNumber:"",
        role:"client"
    }); 
    const handleSubmitBtn=(event)=>{
        event.preventDefault();
            if(admin===false) {
                ClientServices.getClientByIdAndPassword(ClientData).then(Response=>{
                    setUserData(userData.Id=Response.data.clientId);
                    setUserData(userData.name=Response.data.clientName);
                    setUserData(userData.address=Response.data.address);
                    setUserData(userData.emailId=Response.data.emailId);
                    setUserData(userData.phoneNumber=Response.data.phoneNumber);
                    localStorage.setItem('userData', JSON.stringify(userData));
                    navigate('/Home');
                })
            }else{
                (AdminServices).getAdminByIdAndPassword(ClientData).then(Response=>{
                    setUserData(userData.Id=Response.data.adminId);
                    setUserData(userData.name=Response.data.adminName);
                    setUserData(userData.address=Response.data.address);
                    setUserData(userData.emailId=Response.data.emailId);
                    setUserData(userData.phoneNumber=Response.data.contactNumber);
                    setUserData(userData.role="admin");
                    localStorage.setItem('userData', JSON.stringify(userData));
                    navigate('/Home');
                })
            }
    }

  return (
    <div className='LogInMainOuterSection'>
        <div className="LogInMainInnerSection">
            <div className="leftOuterLogInMainInnerSection">
                <div className="leftInnerLogInMainInnerSection">
                    <h1 className='h1TagleftInnerLogInMainInnerSection'>LogIn Here</h1>
                    <form className='formOfLoginPage' action="">
                        {(admin===true) ? (
                        <>
                            <input type="number" name='clientId' onChange={handleInputChange} style={{width:"250px"}} placeholder='ClientId' required/><br/>
                        </>) : 
                         (<>
                            <input type="text" name='clientId' onChange={handleInputChange} placeholder='ClientId' required/><br/>
                         </>) 
                        }
                        <input type="password" name='password' onChange={handleInputChange} placeholder='password' required/><br/>
                        <button className='btnLogInPage' onClick={handleSubmitBtn}>Submit</button>
                    </form>
                    <p>Don't have an Account <NavLink className="navBar" style={{color:"#580097"}} to="/signUp">click Here</NavLink></p>
                    <p style={{display:"flex",justifyContent:"center"}}>SignIn as<pre> </pre> <div onClick={handleAdminEntry} style={{cursor:"pointer", color:"#580097"}}> Admin</div></p>
                </div>
            </div>
            <div className="rightOuterLogInMainInnerSection">
                <div className="rightInnerLogInMainInnerSection">
                    <h1 className='h1TagleftInnerLogInMainInnerSection'>Welcome to <br/><span>ABC-Electronics</span></h1>
                    <p> Bridging complaints to solutions in the realm of electronics.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn
