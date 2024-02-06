import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getUser = (userId) => API.get(`/user/get/${userId}`);
export const updateUser = (id,formData) => API.put(`/user/update/${id}`, formData);
