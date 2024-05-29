package com.example.abcelectronics.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.abcelectronics.entities.Client;
import com.example.abcelectronics.entities.Engineer;

@Service
public interface ClientService {

	Client saveClient(Client clientData);

	Optional<Client> getClientById(String clientId);

//	Optional<Engineer> getEngineerById(int engineerId);
//
//	Optional<Engineer> getEngineerByDomain(String domain);

	Optional<Client> getClientByIdAndPassword(String clientId, String password);

	List<Client> getAllClient();

	Optional<Client> deleteClientById(String clientId);


}
