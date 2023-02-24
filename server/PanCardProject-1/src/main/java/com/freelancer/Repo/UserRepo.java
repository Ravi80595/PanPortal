package com.freelancer.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freelancer.Model.User;

public interface UserRepo extends JpaRepository<User,String> {
    
public User findByMobileNumber(String num) ;
public User findByUserName(String userName) ;
}