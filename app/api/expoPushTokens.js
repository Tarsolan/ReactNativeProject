import client from "./client";

const register = (pushToken) => {
  console.log("register attempt: ");
  console.log(pushToken);
  client.post("/expoPushTokens", { token: pushToken });
};

export default { register };
