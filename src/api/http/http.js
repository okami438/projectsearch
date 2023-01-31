import axios from "axios";

const httpRequest = axios.create({
  baseURL: process.env.VUE_APP_GITHUB_API,
  timeout: 60 * 1000,
  headers: {
    Accept: "application/vnd.github+json",
  },
  transformRequest: [
    (data) => {
      return JSON.stringify(data);
    },
  ],
});

export default {
  httpRequest,
};
