import { ImageBackground, View, StyleSheet, Image, Text } from "react-native";
import AppText from "../components/AppText";
import ButtonComponent from "../components/Button";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={styles.image}
      blurRadius={19}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
          resizeMode="center"
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.button}>
        <ButtonComponent
          title="Login"
          onPress={() => console.log("login")}
          color="primary"
        />
        <ButtonComponent
          title="Register"
          onPress={() => console.log("register")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  button: { marginHorizontal: 12, marginVertical: 10 },
  image: {
    flex: 1,
  },
  logoContainer: { alignItems: "center", marginTop: "15%", flex: 1 },
  logo: { height: 100, width: 100 },
  tagline: { fontSize: 25, fontWeight: "600", paddingVertical: 20 },
});

export default WelcomeScreen;
