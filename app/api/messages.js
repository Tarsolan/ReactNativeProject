import apiClient from "./client";

const send = async (listingId, message) => {
  return await apiClient.post("/messages", { listingId, message });
};

export default { send };
