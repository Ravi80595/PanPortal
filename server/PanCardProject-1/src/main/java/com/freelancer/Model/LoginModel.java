package com.freelancer.Model;

import org.springframework.validation.annotation.Validated;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Validated
public class LoginModel {
	@Email
	@NotNull
	private String email;

	@NotNull
	@NotEmpty
	@NotBlank
	@Size(min = 6, max = 15, message = "please provide the currect password")
	private String password;
}
