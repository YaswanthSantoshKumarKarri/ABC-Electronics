package com.example.abcelectronics.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="complaint")
public class Complaint {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int complaintId;
	private String productModelNumber;
	private String complaintName;
	private String status;
	private String clientId;
	private int engineerId;
}
