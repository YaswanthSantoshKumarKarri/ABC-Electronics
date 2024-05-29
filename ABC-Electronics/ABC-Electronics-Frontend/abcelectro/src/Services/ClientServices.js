import axios from 'axios';

const CLIENT_API_BASE_URL="http://localhost:8080/API/Client";

class ClientServices{
    saveClient(clientData){
        return axios.post(CLIENT_API_BASE_URL + "/create", clientData);
    }
    getAllClients(){
        return axios.get(CLIENT_API_BASE_URL);
    }
    getClientByIdAndPassword(ClientData){
        return axios.get(CLIENT_API_BASE_URL+"/signIn/"+ClientData.clientId+"/"+ClientData.password);
    }
    getClientById(id){
        return axios.get(CLIENT_API_BASE_URL+"/"+id);
    }
    deleteClientById(id){
        return axios.delete(CLIENT_API_BASE_URL+"/"+id);
    }
    saveComplaint(complaintData){
        console.log(complaintData);
        return axios.post(CLIENT_API_BASE_URL + "/Complaint",complaintData);
    }
    getAllComplaintsByClientId(clientId){
        return axios.get(CLIENT_API_BASE_URL+"/Complaint/"+clientId);
    }
}
export default new ClientServices();