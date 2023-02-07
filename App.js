// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  Alert,
  Button,
  SafeAreaView,
} from "react-native";
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
import MyAccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { useEffect, useState, useCallback } from "react";
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
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import jwtDecode from "jwt-decode";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await restoreUser();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  const { landscape } = useDeviceOrientation();

  const handlePress = () => {
    Alert.alert("My title", "My Message", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => console.log("No") },
    ]);
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <OfflineNotice />

        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>

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
        {/* <ListingEditScreen /> */}
      </SafeAreaView>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  textInput: { borderBottomColor: "#ccc", borderBottomWidth: 1 },
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    //backgroundColor: "#f8f4f4",
    backgroundColor: colors.white,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
