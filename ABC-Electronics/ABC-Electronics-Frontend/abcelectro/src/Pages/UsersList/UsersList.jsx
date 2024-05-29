import React, { useState, useEffect } from 'react';

import "./UsersList.css";
import NavBar from '../../Components/NavBar/NavBar'
import AdminServices from '../../Services/AdminServices';

const UsersList = () => {
    const [userList, setUserList] = useState([]);
    const [roleSelected,setRolerole]=useState();
      const handleChange=(event)=>{

        if(event.target.value==="Client"){
          AdminServices.getAllClients().then(Response=>{
            setUserList(Response.data);
            setRolerole("Client");
          })
        }else if(event.target.value==="Engineer"){
          AdminServices.getAllEngineers().then(Response=>{
            setUserList(Response.data);
            setRolerole("Engineer");
          })
        }        
      }
      const [deleteResult,setDeleteResult]=useState();
      const handleDeleteOpr = (index)=>{
        if(roleSelected==="Client"){
          const id=userList[index].clientId;
          AdminServices.deleteClientById(id).then(Response =>{
            setDeleteResult(Response.data);
          })
        }else{
          const id=userList[index].employeeId;
          AdminServices.deleteEngineerById(id).then(Response =>{
            setDeleteResult(Response.data);
          })
        }
      }
      useEffect(() => {
        if(deleteResult!==undefined){
          alert(deleteResult);
        }
      },[deleteResult]);
  return (
    <div>
      <NavBar/>
      <>
      <div className="table-container">
      <h1>Users Table</h1>
      <div className="selectpos">
      <select style={{color:"black",width:"80px"}} name='filterUser' onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="Client">Client</option>
        <option value="Engineer">Engineer</option>
      </select>
      </div>
      
      <div className="tablePos">
      <table className="employee-table">
        <thead>
          <tr>
            {(roleSelected==="Client") && (
              <>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Numbers</th>
                <th>Delete</th>
                <th>Edit</th>
              </>
            )}
            {(roleSelected==="Engineer") && (
              <>
                <th>ID</th>
                <th>Name</th>
                <th>Domain</th>
                <th>Delete</th>
                <th>Edit</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              {(roleSelected==="Client") && (
                <>
                  <td>{user.clientId}</td>
                  <td>{user.clientName}</td>
                  <td>{user.address}</td>
                  <td>{user.phoneNumber}</td>
                </>
              )}
              {(roleSelected==="Engineer") && (
                <>
                  <td>{user.employeeId}</td>
                  <td>{user.engineerName}</td>
                  <td>{user.domain}</td>
                </>
              )}
              <td >
                    <svg onClick={(e)=>{handleDeleteOpr(index)}} width="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </td>
              <td>
                <svg width="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
      </>
    </div>
  )
}

export default UsersList
