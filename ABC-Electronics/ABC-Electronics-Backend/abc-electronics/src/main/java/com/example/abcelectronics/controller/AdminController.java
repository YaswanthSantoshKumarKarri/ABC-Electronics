package com.example.abcelectronics.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.abcelectronics.entities.Admin;
import com.example.abcelectronics.entities.Engineer;
import com.example.abcelectronics.service.AdminService;
import com.example.abcelectronics.service.EngineerService;

@RestController
@RequestMapping("/API/Admin")
@CrossOrigin("http://localhost:3000")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private EngineerService engineerService;
	
	@GetMapping("/signIn/{adminId}/{password}")
	public Optional<Admin> getAdminByIdAndPassword(@PathVariable int adminId,@PathVariable String password){
		return adminService.getAdminByIdAndPassword(adminId,password);
	}
	@GetMapping("/getAdminById/{adminId}")
	public Optional<Admin> getAdminById(@PathVariable int adminId){
		return adminService.getAdminById(adminId);
	}
}
