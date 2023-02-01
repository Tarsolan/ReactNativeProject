import { StyleSheet, Image } from "react-native";
import React from "react";
import Screen from "../components/Screen";

import * as Yup from "yup";

import { AppForm, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = ({}) => {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
