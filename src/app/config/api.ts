import axios from "axios";

export const api = axios.create({
  // baseURL: process.env.BACKEND_URL,
  baseURL:"http://localhost:8000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
