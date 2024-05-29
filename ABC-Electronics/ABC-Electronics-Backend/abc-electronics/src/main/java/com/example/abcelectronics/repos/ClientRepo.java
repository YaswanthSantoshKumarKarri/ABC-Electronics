package com.example.abcelectronics.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.abcelectronics.entities.Client;

@Repository
public interface ClientRepo extends JpaRepository<Client, String> {

	Optional<Client> findByClientId(String clientId);

	Optional<Client> findByClientIdAndPassword(String clientId, String password);

}
