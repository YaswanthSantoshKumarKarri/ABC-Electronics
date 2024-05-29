package com.example.abcelectronics.serviceImp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.abcelectronics.entities.Complaint;
import com.example.abcelectronics.repos.ComplaintRepos;
import com.example.abcelectronics.service.ComplaintService;

@Service
public class ComplaintServiceImp implements ComplaintService {

	@Autowired
	private ComplaintRepos complaintRepos;
	
	@Override
	public Complaint createComplaint(Complaint complaintData) {
		return complaintRepos.save(complaintData);
	}

	@Override
	public List<Complaint> getComplaintByClientId(String clientId) {
		return complaintRepos.findAllByClientId(clientId);
	}

	@Override
	public List<Complaint> getAllComplaint() {
		return complaintRepos.findAll();
	}

	@Override
	public Complaint updateComplaint(int complaintId, String status, int engineerId) {
		Optional<Complaint> optionalUser = complaintRepos.findById(complaintId);
        if (optionalUser.isPresent()) {
        	Complaint complaintData = optionalUser.get();
        	complaintData.setStatus(status);
        	complaintData.setEngineerId(engineerId);
            return complaintRepos.save(complaintData);
        } else {
            throw new RuntimeException("User not found with id: " + complaintId);
        }
	}

}
