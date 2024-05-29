package com.example.abcelectronics.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.abcelectronics.entities.Admin;
import com.example.abcelectronics.entities.Engineer;

@Service
public interface AdminService {



	Optional<Admin> getAdminByIdAndPassword(int adminId, String password);

	Optional<Admin> getAdminById(int adminId);

}
