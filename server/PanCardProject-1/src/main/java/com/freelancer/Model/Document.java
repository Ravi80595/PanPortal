package com.freelancer.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

@Entity

public class Document {
	public Document() {

	}

	public Integer getDocumentId() {
		return documentId;
	}

	public void setDocumentId(Integer documentId) {
		this.documentId = documentId;
	}

	public String getDocumentType() {
		return documentType;
	}

	public void setDocumentType(String documentType) {
		this.documentType = documentType;
	}

	public byte[] getDocumentUpload() {
		return documentUpload;
	}

	public void setDocumentUpload(byte[] documentUpload) {
		this.documentUpload = documentUpload;
	}

	public Boolean getApproveStatus() {
		return approveStatus;
	}

	public void setApproveStatus(Boolean approveStatus) {
		this.approveStatus = approveStatus;
	}

	public Profile getProfileObject() {
		return profileObject;
	}

	public void setProfileObject(Profile profileObject) {
		this.profileObject = profileObject;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer documentId;
	private String documentType;

	@Lob
	@Column(name = "collectedDocument", columnDefinition = "MEDIUMBLOB")

	private byte[] documentUpload;
	private Boolean approveStatus;
	@JsonIgnore
	@ManyToOne

	private Profile profileObject;

}
