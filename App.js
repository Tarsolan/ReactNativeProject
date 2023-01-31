// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Alert } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "./app/config/colors";
import ButtonComponent from "./app/components/Button";
import Card from "./app/components/Card";
import ListItem from "./app/components/lists/ListItem";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Constants from "expo-constants";
import Screen from "./app/components/Screen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { useEffect, useState } from "react";
import AppTextInput from "./app/components/TextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AppFormPicker from "./app/components/forms/AppFormPicker";
import { AppForm } from "./app/components/forms";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0]);

  const { landscape } = useDeviceOrientation();

  const handlePress = () => {
    Alert.alert("My title", "My Message", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => console.log("No") },
    ]);
  };

  return (
    <View style={styles.container}>
      <Screen>
        {/* <ImageInputList
          imageUris={imageUris}
          onAddImage={handleAddImage}
          onRemoveImage={handleDelete}
        /> */}
        {/* <ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUris([...imageUris, uri])} /> */}
        {/* <ButtonComponent title="Select Image" onPress={selectImage} />
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}
        {/* <WelcomeScreen /> */}
        {/* <ViewImageScreen /> */}

        {/* <Card
        image={require("./app/assets/jacket.jpg")}
        title={"Red Jacket for sale!"}
        subTitle={"$100"}
      /> */}

        {/* <ListingDetailsScreen /> */}
        {/* <MessagesScreen /> */}
        {/* <MyAccountScreen /> */}
        {/* <ListingsScreen /> */}
        {/* <AppTextInput placeholder="Username" icon="email" /> */}

        {/* <AppPicker
          placeholder="Category"
          icon="apps"
          items={categories}
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
        />
        <AppTextInput placeholder="Email" icon="email" /> */}
        {/* <LoginScreen /> */}
        {/* <RegisterScreen /> */}
        <ListingEditScreen />
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: { borderBottomColor: "#ccc", borderBottomWidth: 1 },
  container: {
    flex: 1,
    //backgroundColor: "#f8f4f4",
    backgroundColor: colors.white,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
