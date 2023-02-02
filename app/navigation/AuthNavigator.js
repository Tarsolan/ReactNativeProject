import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

// const Link = () => {
//   const navigation = useNavigation();

//   return (
//     <Button
//       title="Click"
//       onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
//     />
//   );
// };

// const Tweets = ({ navigation }) => (
//   <Screen>
//     <AppText>Tweets</AppText>
//     <Link />
//   </Screen>
// );

// const TweetDetails = ({ route }) => (
//   <Screen>
//     <AppText>Tweet Details {route.params.id}</AppText>
//   </Screen>
// );

// const Stack = createStackNavigator();
// const FeedNavigator = () => (
//   <Stack.Navigator initialRouteName="Tweets">
//     <Stack.Screen name="Tweets" component={Tweets} />
//     <Stack.Screen
//       name="TweetDetails"
//       component={TweetDetails}
//       options={({ route }) => ({ title: route.params.id })}
//     />
//   </Stack.Navigator>
// );

const AuthNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
