package com.example.abcelectronics.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.abcelectronics.entities.Client;
import com.example.abcelectronics.entities.Engineer;
import com.example.abcelectronics.service.EngineerService;

@RestController
@RequestMapping("/API/Engineer")
@CrossOrigin("http://localhost:3000")
public class EngineerController {
	
	@Autowired
	private EngineerService engineerService;
	
	@PostMapping("/create")
	public String saveEngineer(@RequestBody Engineer engineerData) {
		 if(engineerService.saveEngineer(engineerData)!=null) {
			 return "successfully saved data";
		 }return "failed to save data";
	}
	
	@GetMapping("/getAll")
	public List<Engineer>  getAllEngineers() {
		return engineerService.getAllEngineers();
	}	
	@DeleteMapping("/deleteEngineer/{EngineerId}")
	public String deleteEngineerById(@PathVariable int EngineerId) {
		if(engineerService.deleteEngineerById(EngineerId)!=null) {
			return "successfully deleted Data";
		}
		return "Failed to delete Data";
	}
}
