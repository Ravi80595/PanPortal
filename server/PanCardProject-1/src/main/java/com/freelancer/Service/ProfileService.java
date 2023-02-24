package com.freelancer.Service;

import com.freelancer.Model.Profile;

public interface ProfileService {

	public Profile addProfile(Profile profile);

	public Profile getProfile(String userEmail);

	public Profile editProfile(Integer userEmail , Profile profile);

	public Profile deleteProfile(String userEmail);
}
