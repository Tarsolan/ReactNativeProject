import { StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";

import * as Yup from "yup";

import {
  AppForm,
  ErrorMessage,
  FormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = ({}) => {
  const [loginFailed, setLoginFailed] = useState(false);
  const authContext = useAuth();

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    authContext.login(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />
        <FormField
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="email"
          textContentType="emailAddress"
        />
        <FormField
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="login" />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { padding: 10 },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
