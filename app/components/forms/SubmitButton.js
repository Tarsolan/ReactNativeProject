import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonComponent from "../Button";
import { useFormikContext } from "formik";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <ButtonComponent title={title} onPress={handleSubmit} />;
};

export default SubmitButton;

const styles = StyleSheet.create({});
