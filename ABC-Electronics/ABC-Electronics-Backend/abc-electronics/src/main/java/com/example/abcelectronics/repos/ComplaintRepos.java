package com.example.abcelectronics.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.abcelectronics.entities.Complaint;

public interface ComplaintRepos extends JpaRepository<Complaint, Integer> {

	List<Complaint> findAllByClientId(String clientId);

}
