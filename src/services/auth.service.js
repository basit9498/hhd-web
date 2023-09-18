import httpService from "./http.service";

export const login = (body) =>
  httpService
    .post("/auth/login", body)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const fbExchangeToken = () =>
  httpService
    .get("/auth/fb-exchange-token")
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));
