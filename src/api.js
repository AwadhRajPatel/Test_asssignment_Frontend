import axios from "axios";

const API = axios.create({ baseURL: "https://test-asssignment-backend-hoi7.onrender.com/" });

// Attach token to requests if logged in
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const register = (data) => API.post("/users/register", data);
export const login = (data) => API.post("/users/login", data);
export const fetchPosts = () => API.get("/posts");
export const uploadPost = (data) => API.post("/posts", data);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const fetchUserPosts = () => API.get("/posts/my-posts");
export const updateUserPost = (id, postData) => API.put(`/posts/my-posts/${id}`, postData);
export const removeUserPost = (id) => API.delete(`/posts/my-posts/${id}`);
