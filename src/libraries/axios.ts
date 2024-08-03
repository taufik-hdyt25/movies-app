import axios from "axios";

export const API = axios.create({
  baseURL: process.env.BASE_URL,
});

API.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.ACCESS_TOKEN_AUTH}`;
