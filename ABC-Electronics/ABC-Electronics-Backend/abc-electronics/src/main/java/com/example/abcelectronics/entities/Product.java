package com.example.abcelectronics.entities;

import java.util.Date;

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
@Table(name="product")
public class Product {
	
	@Id
	private String modelNumber;
	private String productName;
	private String dateOfPurchase;
	private String procuctCategoryType;
	private Date warrentyDate;
	private int warrentyYear;

}
