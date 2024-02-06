import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getPostsTimeline = (id) => API.get(`/post/timeline/${id}`);
export const likePost = (id, userId) => API.put(`/post/like/${id}`, { userId });
