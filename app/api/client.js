import { create } from "apisauce";
import endpoint from "./endpoint";
import cache from "../utility/cache";

const apiClient = create({ baseURL: endpoint });

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    console.log("data loaded without cache");
    return response;
  }

  const data = await cache.get(url);
  console.log("cachce loaded");
  return data ? { ok: true, data } : response;
};

export default apiClient;
