import { Alert, Keyboard, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppForm from "./forms/AppForm";

import * as Yup from "yup";
import * as Notifications from "expo-notifications";
import AppFormField from "./forms/FormField";
import { ErrorMessage, FormField, SubmitButton } from "./forms";
import messages from "../api/messages";

const ContactSellerForm = ({ listingId }) => {
  const initialValues = () => ({
    listingId: listingId,
    message: "",
  });

  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();
    console.log(listingId, message);
    const result = await messages.send(listingId, message);
    if (!result.ok)
      return Alert.alert("Error", "There was an error posting the message.");

    resetForm({ values: initialValues() });
  };

  const validationSchema = Yup.object().shape({
    listingId: Yup.number().required().label("Listing ID"),
    message: Yup.string().required().min(4).label("Message"),
  });

  return (
    <AppForm
      initialValues={initialValues()}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormField
        placeholder="Message..."
        autoCapitalize="none"
        name="message"
      />
      <SubmitButton title="Contact Seller" />
    </AppForm>
  );
};

export default ContactSellerForm;

const styles = StyleSheet.create({});
