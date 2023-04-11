import axios from "axios";

const config = {
  baseURL: "http://localhost:5000",
};

export const api = axios.create(config);

export const login = (body) => api.post("/users/login", body);

export const getCategories = () => api.get("/categories");

export const getBooks = () => api.get("/books");

export const getBookInfo = (id) => api.get(`/books/${id}`);
