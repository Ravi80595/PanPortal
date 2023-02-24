package com.freelancer.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freelancer.Model.Document;
import com.freelancer.Model.Profile;

public interface DocumentRepo extends JpaRepository<Document, Integer> {

	public Optional<java.util.List<Document>> findByProfileObject(Profile profile);
}
