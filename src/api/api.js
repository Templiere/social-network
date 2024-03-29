import axios from "axios";


const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "e3568708-fed6-4a3e-9dd1-b2be67422925"
	}
});


export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);

	},
	follow(userId) {
		return instance.post(`follow/${userId}`);
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`);
	},
	getUserData() {
		return instance.get(`auth/me`).then(response => response.data);
	},
	getUserProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => response.data);
	}
};
