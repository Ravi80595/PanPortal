package com.freelancer.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.freelancer.Model.Admin;
import com.freelancer.Model.LoginModel;
import com.freelancer.Model.User;
import com.freelancer.Service.AdminServiceImpl;
import com.freelancer.Service.UserServiceImpl;
@CrossOrigin("*")
@RestController
public class AuthController {
	@Autowired
	private AdminServiceImpl adminServiceImpl;
	@Autowired
	private UserServiceImpl userServiceImpl;

	@PostMapping("/user/login")
	public ResponseEntity<?> isUserPresent(@RequestBody LoginModel data) {

		return new ResponseEntity<>(userServiceImpl.isUserPresent(data), HttpStatus.OK);
	}

	@PostMapping("/admin/login")
	public ResponseEntity<?> isAdminPresent(@RequestBody LoginModel data) {

		return new ResponseEntity<>(adminServiceImpl.isAdminPresent(data), HttpStatus.OK);
	}

	@PostMapping("/admin/signup")
	public ResponseEntity<?> saveAdmin(@RequestBody Admin data) {

		return new ResponseEntity<>(adminServiceImpl.saveAdmin(data), HttpStatus.ACCEPTED);
	}

	@PostMapping("/user/signup")
	public ResponseEntity<?> saveUser(@RequestBody User data) {

		return new ResponseEntity<>(userServiceImpl.saveUser(data), HttpStatus.ACCEPTED);
	}
}
