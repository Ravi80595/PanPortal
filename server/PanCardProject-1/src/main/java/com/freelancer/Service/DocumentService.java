package com.freelancer.Service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.freelancer.Model.Document;

public interface DocumentService {

	public Document addDocuments(MultipartFile file, String userEmail);

	public Document getDocument(Integer documentId);

	public List<Document> getDocumentByEmail(String userEmail);

	public Document editDocument(Integer documentId, MultipartFile file);

	public Document approveDocument(Integer documentId);

	public Document deleteDocument(Integer documentId);
}
