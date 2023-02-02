import { create } from "apisauce";
import endpoint from "./endpoint";

const apiClient = create({ baseURL: endpoint });

export default apiClient;
