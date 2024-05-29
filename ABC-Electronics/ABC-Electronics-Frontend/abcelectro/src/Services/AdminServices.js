import axios from 'axios';

const ADMIN_API_BASE_URL="http://localhost:8080/API/Admin";

const CLIENT_API_BASE_URL="http://localhost:8080/API/Client";

const ENGINEER_API_BASE_URL="http://localhost:8080/API/Engineer";
const COMPLAINT_API_BASE_URL="http://localhost:8080/API/Complaints";

class AdminServices{
    getAdminByIdAndPassword(ClientData){
        return axios.get(ADMIN_API_BASE_URL+"/signIn/"+ClientData.clientId+"/"+ClientData.password);
    }
    //post engineer
    saveEngineer(engineerData){
        return axios.post(ADMIN_API_BASE_URL + "/create", engineerData);
    }

    //users list page
    getAllClients(){
        return axios.get(CLIENT_API_BASE_URL+"/getAll");
    }
    getAllEngineers(){
        return axios.get(ENGINEER_API_BASE_URL+"/getAll");
    }
    deleteClientById(id){
        return axios.delete(CLIENT_API_BASE_URL+"/deleteClient/"+id);
    }
    deleteEngineerById(id){
        return axios.delete(ENGINEER_API_BASE_URL+"/deleteEngineer/"+id);
    }

    //nav profile page
    getAdminById(adminId){
        return axios.get(ADMIN_API_BASE_URL+"/getAdminById/"+adminId);
    }
    getClientById(adminId){
        return axios.get(ADMIN_API_BASE_URL+"/"+adminId);
    }
    getEngineerById(id){
        return axios.get(ADMIN_API_BASE_URL+"/"+id);
    }


    // reports list page
    getAllComplaints(){
        return axios.get(COMPLAINT_API_BASE_URL + "/getAll");
    }
    editComplaint(editedComplaint){
        return axios.put(COMPLAINT_API_BASE_URL + "/updateComplaint/"+editedComplaint.complaintId+"/"+editedComplaint.status+"/"+editedComplaint.engineerId);
    }
    getAllComplaintsByStatus(Status){  
        return axios.get(ADMIN_API_BASE_URL+"/Complaint/"+Status);

    }
    deleteComplaintById(clientId){
        return axios.get(ADMIN_API_BASE_URL+"/Complaint/"+clientId);
    }

    //search page
    getAllComplaintsByClientId(clientId){
        return axios.get(ADMIN_API_BASE_URL+"/Complaint/"+clientId);
    }
    getAllComplaintsByEngineerId(clientId){
        return axios.get(ADMIN_API_BASE_URL+"/Complaint/"+clientId);
    }
}
export default new AdminServices();