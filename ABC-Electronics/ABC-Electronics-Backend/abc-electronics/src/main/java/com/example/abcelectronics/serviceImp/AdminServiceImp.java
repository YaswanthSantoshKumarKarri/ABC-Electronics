package com.example.abcelectronics.serviceImp;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.abcelectronics.entities.Admin;
import com.example.abcelectronics.entities.Engineer;
import com.example.abcelectronics.repos.AdminRepos;
import com.example.abcelectronics.service.AdminService;

@Service
public class AdminServiceImp implements AdminService {

	@Autowired
	private AdminRepos adminRepos;

	@Override
	public Optional<Admin> getAdminByIdAndPassword(int adminId, String password) {
		return adminRepos.findByAdminIdAndPassword(adminId,password);
	}

	@Override
	public Optional<Admin> getAdminById(int adminId) {
		// TODO Auto-generated method stub
		return adminRepos.findById(adminId);
	}

}
