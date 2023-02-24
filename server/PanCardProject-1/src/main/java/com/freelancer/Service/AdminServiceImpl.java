package com.freelancer.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelancer.Model.Admin;
import com.freelancer.Model.LoginModel;
import com.freelancer.Repo.AdminRepo;

import lombok.Data;

@Service
@Data

public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepo adminRepo;

	@Override
	public Boolean isAdminPresent(LoginModel loginModel) {
		// TODO Auto-generated method stub
		Optional<Admin> authObject = adminRepo.findById(loginModel.getEmail());
		if (authObject.isPresent() && authObject.get().getPassword().equals(loginModel.getPassword())) {
			return true;
		}
		return false;
	}

	@Override
	public Admin saveAdmin(Admin admin) {
		// TODO Auto-generated method stub
		Optional<Admin> authObject = adminRepo.findById(admin.getEmail());
		if (authObject.isEmpty()) {
			return adminRepo.save(admin);
		}
		return null;
	}

}
