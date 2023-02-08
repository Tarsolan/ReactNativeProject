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
import userApi from "../api/users";
import authApi from "../api/auth";
import auth from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import usersApi from "../api/users";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);

  const [error, setError] = useState();
  const authContext = useAuth();

  const handleSubmit = async (newUser) => {
    const response = await registerApi.request(newUser);

    if (!response.ok) {
      if (response.data) return setError(response.data.error);
      else {
        console.log(response);
        return setError("An expected error occured.");
      }
    }
    setError(null);

    const token = await loginApi.request(newUser.email, newUser.password);
    authContext.login(token.data);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <FormField
            icon="account"
            placeholder="Name"
            autoCapitalize="words"
            autoCorrect={false}
            name="name"
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
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({ container: { padding: 10 } });
