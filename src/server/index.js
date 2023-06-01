import axios from "axios";
import Cookie from "../utils/Cookie";

const tokenCookie = new Cookie("token");

const config = {
  baseURL: "https://bhos-lib.onrender.com/",
};

export const api = axios.create(config);

export const login = (body) => api.post("/users/login", body);

export const getCategories = () => api.get("/categories");

export const getBooks = () => api.get("/books");

export const getUploads = () =>
  api.get("/uploads", {
    headers: {
      Authorization: `Bearer ${tokenCookie.getCookie()}`,
    },
  });

export const getBookInfo = (id) => api.get(`/books/${id}`);

export const searchBook = (title) => api.get(`/books/search?title=${title}`);

export const getMe = () =>
  api.get(`/users/me`, {
    headers: {
      Authorization: `Bearer ${tokenCookie.getCookie()}`,
    },
  });

export const getMyCart = () =>
  api.get(`/carts/myCart`, {
    headers: {
      Authorization: `Bearer ${tokenCookie.getCookie()}`,
    },
  });
