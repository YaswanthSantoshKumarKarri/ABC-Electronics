import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import "./ReportForm.css"
import ClientServices from '../../Services/ClientServices';
import {useNavigate } from 'react-router-dom';

const ReportForm = () => {
  const Stringy = localStorage.getItem('userData');
  const userData1 = JSON.parse(Stringy);
  const navigate = useNavigate();
  const [complaintData,setComplaintData]=useState(
    {
      productModelNumber:"",
      complaintName:"",
      status:"",
      clientId:userData1.Id
    }
  );
  const handleChange=(e)=>{
    setComplaintData({...complaintData, [e.target.name] : e.target.value});
    console.log(complaintData)
  }
  const [pushResult,setPushResult]=useState();
  const handleComplaintSumission=(e)=>{
    e.preventDefault();
    ClientServices.saveComplaint(complaintData).then(Response=>{
      setPushResult(Response.data);
  })
  }
  useEffect(() => {
    if(pushResult!==undefined){
      alert(pushResult);
      navigate('/ReportsList');
    }
  },[pushResult]);
  return (
    <div>
      <NavBar/>
      <div className="ReportFormMainOuterSection">
        <div className="ReportFormMainInnerSection">
          <h1 className='h1ReportFormMainInnerSection'>Complaint Form</h1><br/>
          <h4>Please Enter Your Issue In the Form Below</h4>
          <form action="" className='reportForm'>
            <div className="FormRow">
              <input type="text" onChange={handleChange} name="productModelNumber" placeholder='Product Model Number'/><pre>    </pre>
              <input type="text" onChange={handleChange} name="complaintName" placeholder="Complaint Name"/>
            </div>
            <div className="FormRow">
              <select name='status' onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="Opened">Opened</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select><pre>    </pre>
              <input type="text" name="clientId" value={userData1.Id} disabled/>
            </div>
            <button className='btnreportForm' onClick={handleComplaintSumission}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReportForm
