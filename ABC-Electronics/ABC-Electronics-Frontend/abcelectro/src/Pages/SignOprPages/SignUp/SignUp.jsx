import React ,{useState}from 'react'
import { NavLink } from 'react-router-dom'
import "./SignUp.css"
import ClientServices from '../../../Services/ClientServices';
const SignUp = () => {
    const [ClientData,setClientData]=useState({
        clientId : "",
        clientName: "",
        password : "",
        address : "",
        phoneNumber : ""
    })
    const [confirmPass,setConfirmPass]=useState();
    const handleInputChange=(event)=>{
        const name=event.target.name;
        const val=event.target.value;
        setClientData({ ...ClientData, [name]: val  });
    }
    // const handleConfirmPassChange=(event)=>{
    //     setConfirmPass(event.target.value);
    // }
    const [fetchedClientData,setFetchedClientData]=useState();
    const handleSubmitBtn=()=>{
        // if(confirmPass===ClientData.password){
            ClientServices.saveClient(ClientData).then(Response=>{
                setFetchedClientData(Response.data)
                localStorage.setItem('clientData', JSON.stringify(fetchedClientData));
            })
        // }
    }

  return (
    <div className='LogInMainOuterSection'>
        <div className="LogInnerMainInnerSection">
            <div className="leftOuterLogInMainInnerSection">
                <div className="leftInnerLogInMainInnerSection">
                    <h1 className='h1TagleftInnerLogInMainInnerSection'>SignUp Here</h1>
                    <form className='formOfLoginPage' action="">
                        <input type="text" name='clientId' onChange={handleInputChange} placeholder='ClientId' required/><br/>
                        <input type="text" name='clientName' onChange={handleInputChange} placeholder='clientName' required/><br/>
                        <input type="password" name='password' onChange={handleInputChange} placeholder='Password' required/><br/>
                        <input type="password" name='confirmPassword' placeholder='Confirm Password' required/><br/>
                        <input type="text" name='address' onChange={handleInputChange} placeholder='Address' required/><br/>
                        <input type="number" name='phoneNumber' style={{width:"250px"}} onChange={handleInputChange} placeholder='Phone Number' required/><br/>

                        <button className='btnLogInPage' onClick={handleSubmitBtn}><NavLink to="/logIn">Submit</NavLink></button>
                    </form>
                    <p>Already have an Account <NavLink to="/logIn">click Here</NavLink></p>
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

export default SignUp
