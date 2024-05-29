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
@Table(name="engineer")
public class Engineer {
	
	@Id
	private int employeeId;
	private String password;
	private String engineerName;
	private String domain;	
}