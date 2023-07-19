import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 5000,
});
// export const api = axios.create({
//   baseURL: "https://insta-recipes-back-production.up.railway.app/",
//   timeout: 5000,
// });
