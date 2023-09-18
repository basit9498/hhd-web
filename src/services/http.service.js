import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:5051/api/v1";

const http = axios.create({ baseURL: `${baseURL}` });

function getAuthHeader() {
  const token = Cookies.get("token");
  let authHeader = { "Content-Type": "application/json" };
  if (token) {
    authHeader = { Authorization: `Bearer ${token}` };
  }
  return authHeader;
}

function get(url, headers = {}, params = {}) {
  return http.get(url, {
    params,
    headers: { ...getAuthHeader(), ...headers },
  });
}

function post(url, data, headers = {}, params = {}) {
  return http.post(url, data, {
    ...params,
    headers: { ...getAuthHeader(), ...headers },
  });
}

export default { get, post };
