import React, { useEffect, useState } from 'react'
import "./AddEngineer.css"
import NavBar from '../../Components/NavBar/NavBar'
import AdminServices from '../../Services/AdminServices';
const AddEngineer = () => {
    const Stringy = localStorage.getItem('userData');
  const userData1 = JSON.parse(Stringy);
  const [engineerData,setEngineerData]=useState(
    {
        employeeId:"",
        password:"",
        engineerName:"",
        domain:"",
    }
  );
  const handleChange=(e)=>{
    setEngineerData({...engineerData, [e.target.name] : e.target.value});
  }
  const [pushResult,setPushResult]=useState();
  const handleComplaintSumission=(e)=>{
    e.preventDefault();
    AdminServices.saveEngineer(engineerData).then(Response=>{
      setPushResult(Response.data);
  })
  }
  useEffect(() => {
    if(pushResult!==undefined){
      alert(pushResult);
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
              <input type="number" onChange={handleChange} name="employeeId" placeholder='employeeId'/><pre>    </pre>
              <input type="text" onChange={handleChange} name="password" placeholder="password"/>
            </div>
            <div className="FormRow">
              <select name='domain' onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="hardware">hardware</option>
                <option value="software">software</option>
                <option value="auto mobiles">auto mobiles</option>
              </select><pre>    </pre>
              <input type="text" onChange={handleChange} name="engineerName" placeholder='engineerName'/>
            </div>
            <button className='btnreportForm' onClick={handleComplaintSumission}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddEngineer
