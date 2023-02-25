package com.freelancer.Model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;



public class LoginModel {
	public LoginModel() {

	}
	@Email
	@NotNull
	private String email;

	@NotNull
	@NotEmpty
	@NotBlank
	@Size(min = 6, max = 15, message = "please provide the currect password")
	private String password;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
