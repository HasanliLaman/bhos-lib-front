import axios from "axios";

const config = {
  baseURL: "http://localhost:5000",
};

export const api = axios.create(config);

export const login = (body) => api.post("/users/login", body);
