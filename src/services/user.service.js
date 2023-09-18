import httpService from "./http.service";

export const userMe = () =>
  httpService
    .get("/user/me")
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));

export const userAdAccountInsights = () =>
  httpService
    .get("/user/fb-insights")
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response.data));
