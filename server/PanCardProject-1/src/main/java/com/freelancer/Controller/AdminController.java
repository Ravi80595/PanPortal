package com.freelancer.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.freelancer.Model.Document;
import com.freelancer.Service.DocumentServiceImpl;

@RestController
public class AdminController {

	@Autowired
	private DocumentServiceImpl docImpl;

	@PutMapping("/admin/ApproveDocuments")
	public ResponseEntity<?> approveDocument(@RequestParam("docId") Integer docInt) {
		Document doc = docImpl.approveDocument(docInt);
		if (doc != null)
			return ResponseEntity.ok().contentType(MediaType.parseMediaType(doc.getDocumentType()))
					.header(HttpHeaders.CONTENT_DISPOSITION, "Document")
					.body(new ByteArrayResource(doc.getDocumentUpload()));
		else
			return new ResponseEntity<>("file Not updated", HttpStatus.BAD_REQUEST);
	}

	@GetMapping("/admin/getDocuments")
	public ResponseEntity<?> getDocument(@RequestParam("docId") Integer docInt) {
		Document doc = docImpl.getDocument(docInt);
		if (doc != null)

			return ResponseEntity.ok().contentType(MediaType.parseMediaType(doc.getDocumentType()))
					.header(HttpHeaders.CONTENT_DISPOSITION, "Document")
					.body(new ByteArrayResource(doc.getDocumentUpload()));
		else
			return new ResponseEntity<>("file Not found", HttpStatus.BAD_REQUEST);
	}

	@GetMapping("/admin/getview")
	public ResponseEntity<?> getViewDocument(@RequestParam("email") String email) {
		java.util.List<Document> doc = docImpl.getDocumentByEmail(email);
		if (doc != null) {
			System.out.println(doc.size());
			for(Document d : doc) {
				System.out.println(d);
			}
			return new ResponseEntity<>(doc, HttpStatus.OK);
		}

		return new ResponseEntity<>("file Not updated", HttpStatus.BAD_REQUEST);
	}
}
