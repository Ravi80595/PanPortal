package com.freelancer.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.freelancer.Model.Document;
import com.freelancer.Model.Profile;
import com.freelancer.Service.DocumentServiceImpl;
import com.freelancer.Service.ProfileServiceImpl;
@CrossOrigin("*")
@RestController
public class UserController {

	@Autowired
	private ProfileServiceImpl profileImpl;
	@Autowired
	private DocumentServiceImpl docuImpl;

	/*
	 * Document CRUD Operation
	 * 
	 */

	@PostMapping("/user/addDocument")
	public ResponseEntity<?> addDocument(@RequestParam("files") MultipartFile files,
			@RequestParam("userEmail") String userEmail) {
//for(MultipartFile file : files) {
//	docuImpl.addDocuments(file);
//}
		Document doc = docuImpl.addDocuments(files, userEmail);
		if (doc != null)
			return ResponseEntity.ok().contentType(MediaType.parseMediaType(doc.getDocumentType()))
					.header(HttpHeaders.CONTENT_DISPOSITION, "Document")
					.body(new ByteArrayResource(doc.getDocumentUpload()));
		else
			return new ResponseEntity<>("file Not added", HttpStatus.BAD_REQUEST);
	}

	@GetMapping("/user/getDocument")
	public ResponseEntity<?> getDocument(@RequestParam("fileId") Integer fileId) {

		Document doc = docuImpl.getDocument(fileId);

		return ResponseEntity.ok().contentType(MediaType.parseMediaType(doc.getDocumentType()))
				.header(HttpHeaders.CONTENT_DISPOSITION, "Document")
				.body(new ByteArrayResource(doc.getDocumentUpload()));
	}

	@PutMapping("/user/editDocument/{fileId}")
	public ResponseEntity<?> editDocument(@PathVariable Integer fileId, @RequestParam("files") MultipartFile files) {
		Document doc = docuImpl.editDocument(fileId, files);
		if (doc != null)
			return ResponseEntity.ok().contentType(MediaType.parseMediaType(doc.getDocumentType()))
					.header(HttpHeaders.CONTENT_DISPOSITION, "Document")
					.body(new ByteArrayResource(doc.getDocumentUpload()));
		else
			return new ResponseEntity<>("file Not updated", HttpStatus.BAD_REQUEST);
	}

	@DeleteMapping("/user/deleteDocument/{fileId}")
	public ResponseEntity<?> deleteDocument(@PathVariable Integer fileId) {
		Document doc = docuImpl.deleteDocument(fileId);
		if (doc != null)
			return ResponseEntity.ok().contentType(MediaType.parseMediaType(doc.getDocumentType()))
					.header(HttpHeaders.CONTENT_DISPOSITION, "Document")
					.body(new ByteArrayResource(doc.getDocumentUpload()));
		else
			return new ResponseEntity<>("file Not deleted", HttpStatus.BAD_REQUEST);
	}

	/*
	 * Profile CRUD Operation
	 */

	@PostMapping("/user/addProfile")
	public ResponseEntity<?> addProfile(@RequestBody Profile profile) {

		return new ResponseEntity<>(profileImpl.addProfile(profile), HttpStatus.OK);
	}

	@GetMapping("/user/getProfile")
	public ResponseEntity<?> viewProfile(@RequestParam("email") String email) {

		return new ResponseEntity<>(profileImpl.getProfile(email), HttpStatus.OK);
	}

	@PutMapping("/user/editProfile/{profileId}")
	public ResponseEntity<?> editProfile(@PathVariable("profileId") Integer profileId, @RequestBody Profile profile) {

		return new ResponseEntity<>(profileImpl.editProfile(profileId, profile), HttpStatus.OK);
	}

	@DeleteMapping("/user/deleteProfile")
	public ResponseEntity<?> deleteProfile(@RequestParam("email") String email) {

		return new ResponseEntity<>(profileImpl.deleteProfile(email), HttpStatus.OK);
	}
}
