import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getUser = (userId) => API.get(`/user/get/${userId}`);
export const updateUser = (id, formData) => API.put(`/user/update/${id}`, formData);
export const getAllUsers = () => API.get("/user");
export const followUser = (id, data) => API.put(`/user/follow/${id}`, data);
export const unfollowUser = (id, data) => API.put(`/user/unfollow/${id}`, data);
