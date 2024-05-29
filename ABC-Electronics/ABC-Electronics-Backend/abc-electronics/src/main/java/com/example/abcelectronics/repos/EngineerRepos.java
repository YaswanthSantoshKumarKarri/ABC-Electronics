package com.example.abcelectronics.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.abcelectronics.entities.Engineer;

@Repository
public interface EngineerRepos extends JpaRepository<Engineer, Integer> {

}
