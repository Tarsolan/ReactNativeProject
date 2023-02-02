import { StyleSheet } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";

import * as Yup from "yup";

import {
  AppForm,
  FormField,
  FormImagePicker,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import useLocation from "../hooks/useLocation";
import listingApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10_000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().optional().label("Description"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: { name: "floor-lamp", color: "#fc5c65" },
  },
  { label: "Cars", value: 2, icon: { name: "car", color: "#fd9644" } },
  { label: "Cameras", value: 3, icon: { name: "camera", color: "#fed330" } },
  { label: "Games", value: 4, icon: { name: "cards", color: "#26de81" } },
  {
    label: "Clothing",
    value: 5,
    icon: { name: "shoe-heel", color: "#2bcbba" },
  },
  { label: "Sports", value: 6, icon: { name: "basketball", color: "#45aaf2" } },
  {
    label: "Movies & Music",
    value: 7,
    icon: { name: "headphones", color: "#4b7bec" },
  },
  { label: "Books", value: 8, icon: { name: "book", color: "#fd9644" } },
  { label: "Other", value: 9, icon: { name: "car", color: "#fd9644" } },
];

const ListingEditScreen = () => {
  const initialValues = () => ({
    title: "",
    price: "",
    category: null,
    description: "",
    images: [],
  });
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingApi.postListing(
      {
        ...listing,
        location: location,
      },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      alert("Could not save the listing!");
    }

    resetForm({ values: initialValues() });
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        initialValues={initialValues()}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField
          autoCapitalize="words"
          autoCorrect={true}
          maxLength={255}
          name="title"
          placeholder="Title"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          style={{ width: "30%" }}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          style={{ width: "50%" }}
        />
        <FormField
          autoCapitalize="sentence"
          autoCorrect={true}
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: { padding: 10 },
});
