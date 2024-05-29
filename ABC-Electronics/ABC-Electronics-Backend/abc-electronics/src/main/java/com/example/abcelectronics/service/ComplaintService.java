package com.example.abcelectronics.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.abcelectronics.entities.Complaint;

@Service
public interface ComplaintService {

	Complaint createComplaint(Complaint complaintData);

	List<Complaint> getComplaintByClientId(String clientId);

	List<Complaint> getAllComplaint();

	Complaint updateComplaint(int complaintId, String status, int engineerId);

}
