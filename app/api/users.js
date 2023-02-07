import apiClient from "./client";

const register = async (user) => {
  return await apiClient.post("/users", user);
};

export default { register };
