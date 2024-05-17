import axios from "axios";

const authheaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};
const posturl = "http://localhost:3000/posts";

const API = axios.create({
  baseURL: posturl,
  responseType: "json",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  withCredentials: true,
});