import axios from "axios";

export const instance = axios.create({
  baseURL: "https://strapi-production-67d1.up.railway.app/api/",
  timeout: 15000,
});
