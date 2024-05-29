package com.example.abcelectronics.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.abcelectronics.entities.Admin;
import com.example.abcelectronics.entities.Engineer;

@Repository
public interface AdminRepos extends JpaRepository<Admin, Integer> {

//	Optional<Engineer> findByDomain(String domain);

	Optional<Admin> findByAdminIdAndPassword(int adminId, String password);

}
