package com.freelancer.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelancer.Model.LoginModel;
import com.freelancer.Model.User;
import com.freelancer.Repo.UserRepo;

import lombok.Data;

@Service
@Data
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;

	@Override
	public Boolean isUserPresent(LoginModel loginModel) {
		// TODO Auto-generated method stub
		Optional<User> authObject = userRepo.findById(loginModel.getEmail());
		if (authObject.isPresent() && authObject.get().getPassword().equals(loginModel.getPassword())) {
			return true;
		}
		return false;
	}

	@Override
	public User saveUser(User user) {
		// TODO Auto-generated method stub
		Optional<User> authObject = userRepo.findById(user.getEmail());
		if (authObject.isEmpty()) {
			return userRepo.save(user);
		}
		return null;
	}

}
