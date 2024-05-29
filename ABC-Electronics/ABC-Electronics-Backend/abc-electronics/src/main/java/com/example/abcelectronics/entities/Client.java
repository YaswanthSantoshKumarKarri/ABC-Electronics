package com.example.abcelectronics.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="client")
public class Client {

	
	@Id
	@Column(unique = true)
	private String clientId;
	private String clientName;
	private String password;
	private String address;
	@Column(unique = true)
	private Long phoneNumber;
	private String emailId;
	
}
