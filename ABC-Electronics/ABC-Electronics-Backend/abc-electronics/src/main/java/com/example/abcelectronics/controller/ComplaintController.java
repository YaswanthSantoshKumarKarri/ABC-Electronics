package com.example.abcelectronics.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.abcelectronics.entities.Complaint;
import com.example.abcelectronics.service.ComplaintService;

@RestController
@RequestMapping("/API/Complaints")
@CrossOrigin("http://localhost:3000")
public class ComplaintController {

	@Autowired
	private ComplaintService complaintService;
	
	@PostMapping("/create")
	public String createComplaint(@RequestBody Complaint complaintData) {
		if(complaintService.createComplaint(complaintData)!=null) {
			return "success";
		}return "failure";
	}
	
	@GetMapping("/getAll")
	public List<Complaint> getAllComplaint() {
		return complaintService.getAllComplaint();
	}
	@PutMapping("/updateComplaint/{complaintId}/{status}/{engineerId}")
	public String updateComplaint(@PathVariable int complaintId,@PathVariable String status,@PathVariable int engineerId) {
		if(complaintService.updateComplaint(complaintId,status,engineerId)!=null) {
			return "successfully updated the complaint.";
		}
		return "failed to update the complaint.";
		
	}	
}
