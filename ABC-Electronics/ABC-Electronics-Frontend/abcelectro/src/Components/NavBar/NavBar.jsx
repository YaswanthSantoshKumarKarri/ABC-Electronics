import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import ClientServices from '../../Services/ClientServices'
import "./NavBar.css";
import SignOut from '../../Pages/SignOprPages/SignOut/SignOut';
import AdminServices from '../../Services/AdminServices';

const NavBar = () => {
    const stringy=localStorage.getItem('userData');
    var jsonData=JSON.parse(stringy);
    const [viewProfile,setViewProfile]=useState(false);
    const [fetchedClientDataById,setFetchedClientDataById]=useState({
        Id:"",
        name:"",
        emailID:"",
        address:"",
        phoneNumber:""
    });
    const handleGetClientData=()=>{
        setViewProfile(true);
        setFetchedClientDataById({
            Id:"",
            name:"",
            emailID:"",
            address:"",
            phoneNumber:""
        });
        if(jsonData.role!=="admin"){
            ClientServices.getClientById(jsonData.Id).then(Response=>{
                setFetchedClientDataById({
                    Id:Response.data.Id,
                    name:Response.data.name,
                    emailID:Response.data.emailId,
                    address:Response.data.address,
                    phoneNumber:Response.data.phoneNumber
                });
            })
        }else{
            AdminServices.getAdminById(jsonData.Id).then(Response=>{
                setFetchedClientDataById({
                    Id:Response.data.Id,
                    name:Response.data.name,
                    emailID:Response.data.emailId,
                    address:Response.data.address,
                    phoneNumber:Response.data.phoneNumber
                });
            })
        }
        
    }
    if(jsonData.role!=="admin"){
        var navLinks = [
            { to: "/Home", label: "HOME" },
            { to: "/ReportsList", label: "Reports List" },
            { to: "/reportForm", label: "REPORT AN ISSUE" },
            { to: "/AboutUs", label: "ABOUT US" }
        ];
    }else{
        var navLinks = [
            { to: "/Home", label: "HOME" },
            { to: "/ReportsList", label: "Reports List" },
            { to: "/reportForm", label: "REPORT AN ISSUE" },
            { to: "/UsersList", label: "USERS lIST" },
            { to: "/AddEngineer", label: "ADD ENGINEER" },
            { to: "/AboutUs", label: "ABOUT US" }

        ];
    }
    

    const handleSignOut=()=>{
        SignOut.signOut();
        setViewProfile(false);
    }

  return (
    <div className='NavMainOuterSection'>
        <div className="NavMainInnerSection">
            <div className="LeftNavSection">ABC</div>
            <div className="MiddleNavSection">
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink className="navBar" to={link.to}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
            </div>
            <div className="rightNavSection">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35px" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                </svg><pre>  </pre> <p onClick={handleGetClientData}>{jsonData.name}</p>
            </div>
        </div>
        {viewProfile && (
            <div className="NavSideSection">
            <div className="NavSideInnerSection">
                <svg onClick={(e)=>{setViewProfile(false)}} xmlns="http://www.w3.org/2000/svg" width="35px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <h2>Your Profile</h2><br/>
                <div className="lineOne">
                    User Name:<pre>  </pre> <h1>{jsonData.name}</h1>
                    User ID:<pre>  </pre> <h1>{jsonData.Id}</h1>
                </div>
                <div className="lineOne">
                    User Email: <pre>  </pre><h5>{jsonData.emailId}</h5>
                    User Phone Number: <pre>  </pre><h5>{jsonData.phoneNumber}</h5>
                </div>
                <div className="lineOne">
                    User Address: <pre>  </pre><h5>{jsonData.address}</h5>
                </div>
                <button onClick={handleSignOut}>SignOut</button>
            </div>
        </div>
        )}
        
    </div>
  )
}

export default NavBar
