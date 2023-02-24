package com.freelancer.Service;

import com.freelancer.Model.Admin;
import com.freelancer.Model.LoginModel;

public interface AdminService {

	public Boolean isAdminPresent(LoginModel loginModel);

	public Admin saveAdmin(Admin admin);
}
