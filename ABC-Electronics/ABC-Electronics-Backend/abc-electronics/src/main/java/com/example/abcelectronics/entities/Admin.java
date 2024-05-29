package com.example.abcelectronics.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="admin")
public class Admin {
	
	@Id
	private int adminId;
	private String adminName;
	private String password;
	private Long contactNumber;
	private String Address;
	private String emailId;
	
}
