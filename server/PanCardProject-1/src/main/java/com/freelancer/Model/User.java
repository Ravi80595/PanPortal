package com.freelancer.Model;

import org.springframework.validation.annotation.Validated;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Validated
public class User {

	@Id
	@Email(message = "please provide the correct email")
	@NotNull(message = "please provide the email...!")

	@NotBlank
	@NotEmpty
	private String email;

	@NotNull
	@NotBlank
	@NotEmpty
	@Size(min = 6, max = 15, message = "the password length is not apropriate")
	private String password;

	private String userName;

	@NotNull(message = "please provide the mobile number")
	@Size(min = 10, max = 10, message = "your mobile number length not appropreate")
	@Column(unique = true)
	@NotBlank
	@NotEmpty
	private String mobileNumber;
	@NotNull
	@Size(min = 4, max = 8, message = "please privide role (admin or user)")
	private String userRole;

//	@JsonIgnore
//	@OneToOne
//	@Cascade(CascadeType.ALL)
//	private Profile profile;

}
