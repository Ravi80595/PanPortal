package com.freelancer.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freelancer.Model.Profile;

public interface ProfileRepo  extends JpaRepository<Profile, Integer>{

	Optional<Profile> findByEmail(String userEmail);
     

}
