import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({ name, PickerItemComponent, ...otherProps }) => {
  const { setFieldValue, errors, values, touched } = useFormikContext();

  return (
    <>
      <AppPicker
        onSelectItem={(item) => {
          setFieldValue(name, item);
        }}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
