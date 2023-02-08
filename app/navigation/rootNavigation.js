import React from "react";

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  // .? - If null, nothing happens
  navigationRef.current?.navigate(name, params);
};

export default { navigate };
