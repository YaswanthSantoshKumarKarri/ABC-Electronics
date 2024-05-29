package com.example.abcelectronics.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.abcelectronics.entities.Client;
import com.example.abcelectronics.entities.Engineer;

@Service
public interface EngineerService {

	Engineer saveEngineer(Engineer engineerData);
//
//	Optional<Engineer> changeDomain(Engineer engineerData);

	List<Engineer> getAllEngineers();

	Optional<Engineer> deleteEngineerById(int engineerId);
}
