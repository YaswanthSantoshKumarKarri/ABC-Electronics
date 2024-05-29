import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import "./ReportsList.css"
import ClientServices from '../../Services/ClientServices';
import AdminServices from '../../Services/AdminServices';

const ReportsList = () => {
    const Stringy = localStorage.getItem('userData');
    const clientData1 = JSON.parse(Stringy);
    const [complaints, setComplaints] = useState([]);
    useEffect(() => {
      if(clientData1.role!=="admin"){
        ClientServices.getAllComplaintsByClientId(clientData1.Id).then(Response=>{
          setComplaints(Response.data);
        })
      }else{
        AdminServices.getAllComplaints().then(Response=>{
          setComplaints(Response.data);
        })
      }
      }, [10000]);
    const [viewEditBoxes,setViewEditBoxes]=useState(false)
    const [updateResponse, setUpdateResponse]=useState();
    const HandleEditComplaintEvent=(complaintId)=>{
      setViewEditBoxes(complaintId);
      editedComplaint.complaintId=complaintId;
    }
    const [editedComplaint,setEditedComplaint]=useState({
      complaintId:viewEditBoxes,
      status:"",
      engineerId:""
    })
    const HandleEditComplaintValueEvent=(e)=>{
      const name=e.target.name;
      setEditedComplaint({...editedComplaint,[name]:e.target.value});
    }
    const handleEditSubmitEvent=()=>{
      AdminServices.editComplaint(editedComplaint).then(Response=>{
        setUpdateResponse(Response.data);
      })
    }
    useEffect(() => {
      if(updateResponse!==undefined){
        alert(updateResponse);
        setViewEditBoxes(false);
      }
    },[updateResponse]);
  return (
    <div>
      <NavBar/>
      <div className="ReportsListMainSection">
      <h1>Complaints</h1>
      <div className="tablePos">
      <table style={{width:"70vw"}}>
        <thead>
          <tr>
            <th>Complaint ID</th>
            <th>Product Model Number</th>
            <th>Complaint Name</th>
            <th>Status</th>
            <th>Client ID</th>
            <th>Engineer ID</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map(complaint => (
            <tr key={complaint.complaintId}>
              <td>{complaint.complaintId}</td>
              <td>{complaint.productModelNumber}</td>
              <td>{complaint.complaintName}</td>
              <td>{(viewEditBoxes!==complaint.complaintId) ? complaint.status : (<>
                <select style={{padding:"3px 0px",margin:"5px 0px",width:"70px",color:"black"}} name='status' onChange={HandleEditComplaintValueEvent}>
                  <option value="">Select an option</option>
                  <option value="Opened">Opened</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </>)}</td>
              <td>{complaint.clientId}</td>
              <td>{(viewEditBoxes!==complaint.complaintId) ? complaint.engineerId : (<><input style={{padding:"3px 0px",margin:"5px 0px",width:"70px",color:"black"}} type='number' name="engineerId" onChange={HandleEditComplaintValueEvent}/></>)}</td>
              <td>
                <svg onClick={(e)=>{HandleEditComplaintEvent(complaint.complaintId)}} width="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </td>
              {(viewEditBoxes!==complaint.complaintId) ? <></> : (
                <td>
                    <svg onClick={handleEditSubmitEvent} width="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      </div>
    </div>
  )
}

export default ReportsList
