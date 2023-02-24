package com.freelancer.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freelancer.Model.Admin;

public interface AdminRepo extends JpaRepository<Admin,String> {
          
	public Admin findByMobileNumber(String num) ;
}
