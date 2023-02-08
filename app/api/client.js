import { create } from "apisauce";
import endpoint from "./endpoint";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

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

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

export default apiClient;
