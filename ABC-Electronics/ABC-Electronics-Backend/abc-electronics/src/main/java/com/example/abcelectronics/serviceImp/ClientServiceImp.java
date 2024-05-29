package com.example.abcelectronics.serviceImp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.abcelectronics.entities.Client;
import com.example.abcelectronics.entities.Engineer;
import com.example.abcelectronics.repos.ClientRepo;
import com.example.abcelectronics.repos.AdminRepos;
import com.example.abcelectronics.service.ClientService;

@Service
public class ClientServiceImp implements ClientService {

	@Autowired
	private ClientRepo clientRepo;
	
	@Autowired
	private AdminRepos engineerRepos;
	
	@Override
	public Client saveClient(Client clientData) {
		return clientRepo.save(clientData);
	}

	@Override
	public Optional<Client> getClientById(String clientId) {		
		return clientRepo.findById(clientId);
	}

//	@Override
//	public Optional<Engineer> getEngineerById(int engineerId) {
//		return engineerRepos.findById(engineerId);
//	}

//	@Override
//	public Optional<Engineer> getEngineerByDomain(String domain) {
//		// TODO Auto-generated method stub
//		return engineerRepos.findByDomain(domain);
//	}

	@Override
	public Optional<Client> getClientByIdAndPassword(String clientId, String password) {
		// TODO Auto-generated method stub
		return clientRepo.findByClientIdAndPassword(clientId,password);
	}

	@Override
	public List<Client> getAllClient() {
		// TODO Auto-generated method stub
		return clientRepo.findAll();
	}

	@Override
	public Optional<Client> deleteClientById(String clientId) {
		clientRepo.deleteById(clientId);
		return clientRepo.findById(clientId);
	}

}
