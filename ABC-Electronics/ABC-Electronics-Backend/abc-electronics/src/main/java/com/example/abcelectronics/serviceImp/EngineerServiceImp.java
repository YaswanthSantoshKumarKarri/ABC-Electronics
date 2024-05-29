package com.example.abcelectronics.serviceImp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.abcelectronics.entities.Client;
import com.example.abcelectronics.entities.Engineer;
import com.example.abcelectronics.repos.EngineerRepos;
import com.example.abcelectronics.service.EngineerService;

@Service
public class EngineerServiceImp implements EngineerService {

	@Autowired
	private EngineerRepos engineerRepos;
	
	@Override
	public Engineer saveEngineer(Engineer engineerData) {
		return engineerRepos.save(engineerData);
	}

	@Override
	public List<Engineer> getAllEngineers() {
		return engineerRepos.findAll();
	}

	@Override
	public Optional<Engineer> deleteEngineerById(int engineerId) {
		engineerRepos.deleteById(engineerId);
		return engineerRepos.findById(engineerId);
	}
	
	//	@Override
//	public Optional<Engineer> changeDomain(Engineer engineerData) {
//		
//		if(adminRepos.findById(1) != null) {
//			return Optional.empty();
//		}
//		return null;
//	}

}
