import httpService from "./http.service";

export const userMe = () =>
  httpService
    .get("/user/me")
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));
