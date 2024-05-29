package com.example.abcelectronics.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.abcelectronics.entities.Client;
import com.example.abcelectronics.entities.Complaint;
import com.example.abcelectronics.entities.Engineer;
import com.example.abcelectronics.service.ClientService;
import com.example.abcelectronics.service.ComplaintService;

@RestController
@RequestMapping("/API/Client")
@CrossOrigin("http://localhost:3000")
public class ClientController {

	@Autowired
	private ClientService clientService;
	
	@Autowired
	private ComplaintService complaintService;
	
	@PostMapping("/create")
	public Client saveClient(@RequestBody Client clientData) {
		return clientService.saveClient(clientData);
	}
	
	@GetMapping("/{clientId}")
	public Optional<Client> getClientById(@PathVariable String clientId) {
		return clientService.getClientById(clientId);
	}
	@GetMapping("/getAll")
	public List<Client>  getAllClient() {
		return clientService.getAllClient();
	}
	
	@GetMapping("/signIn/{clientId}/{password}")
	public Optional<Client> getClientByIdAndPassword(@PathVariable String clientId, @PathVariable String password) {
		return clientService.getClientByIdAndPassword(clientId,password);
	}
//	@GetMapping("/engineer/{engineerId}")
//	public Optional<Engineer> getEngineerById(@PathVariable int engineerId) {
//		return clientService.getEngineerById(engineerId);
//	}
//	@GetMapping("/engineer/domain/{domain}")
//	public Optional<Engineer> getEngineerByDomain(@PathVariable String domain) {
//		return clientService.getEngineerByDomain(domain);
//	}
	
	@PostMapping("/Complaint")
	public String createComplaint(@RequestBody Complaint complaintData) {
		if(complaintService.createComplaint(complaintData)!=null) {
			return "success";
		}return "failure";
	}
	@GetMapping("/Complaint/{clientId}")
	public List<Complaint> getComplaintByClientId(@PathVariable String clientId) {
		return complaintService.getComplaintByClientId(clientId);
	}
	@DeleteMapping("/deleteClient/{clientId}")
	public String deleteClientById(@PathVariable String clientId) {
		if(clientService.deleteClientById(clientId)!=null) {
			return "successfully deleted Data";
		}
		return "Failed to delete Data";
	}
	
}
