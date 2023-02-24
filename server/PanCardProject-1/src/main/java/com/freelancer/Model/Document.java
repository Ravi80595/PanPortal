package com.freelancer.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Document {
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
