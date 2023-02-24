package com.freelancer.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.freelancer.Model.Document;
import com.freelancer.Model.Profile;
import com.freelancer.Repo.DocumentRepo;
import com.freelancer.Repo.ProfileRepo;

@Service

public class DocumentServiceImpl implements DocumentService {

	@Autowired
	private DocumentRepo docRepo;
	@Autowired
	private ProfileRepo profileRepo;

	@Override
	public Document addDocuments(MultipartFile file, String userEmail) {
		// TODO Auto-generated method stub

		try {
			Optional<Profile> profile = profileRepo.findByEmail(userEmail);
			Document document = new Document();
			document.setDocumentType(file.getContentType());

			document.setDocumentUpload(file.getBytes());
			document.setApproveStatus(false);
			document.setProfileObject(profile.get());
			Document uploadedDoc = docRepo.save(document);

			return uploadedDoc;
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}

	}

	@Override
	public Document editDocument(Integer documentId, MultipartFile file) {
		// TODO Auto-generated method stub
		Optional<Document> document = docRepo.findById(documentId);
		if (document.isPresent()) {

			try {

				document.get().setDocumentType(file.getContentType());
				document.get().setApproveStatus(false);
				document.get().setDocumentUpload(file.getBytes());
				return docRepo.save(document.get());
			} catch (Exception e) {
				// TODO: handle exception
				return null;
			}
		}
		return null;
	}

	@Override
	public Document deleteDocument(Integer documentId) {
		Optional<Document> document = docRepo.findById(documentId);
		if (document.isPresent()) {
			docRepo.delete(document.get());
			return document.get();

		}

		return null;
	}

	@Override
	public Document getDocument(Integer documentId) {
		Optional<Document> document = docRepo.findById(documentId);
		if (document.isPresent()) {
			return document.get();
		}
		return null;
	}

	@Override
	public List<Document> getDocumentByEmail(String userEmail) {
		Optional<Profile> profile = profileRepo.findByEmail(userEmail);
		Optional<List<Document>> doc = docRepo.findByProfileObject(profile.get());
		if (doc.isPresent()) {
			return doc.get();
		}
		/*
		 * if (document.isPresent()) { return document.get(); }
		 */
		return null;
	}

	@Override
	public Document approveDocument(Integer documentId) {
		Optional<Document> document = docRepo.findById(documentId);
		if (document.isPresent()) {
			document.get().setApproveStatus(true);
			docRepo.save(document.get());
			return docRepo.save(document.get());
		}
		return null;
	}
}
