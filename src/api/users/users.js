import http from "@/api/http/http";

const getUsers = (params) =>
  http.httpRequest.get("search/repositories", { params });

export default {
  getUsers,
};
