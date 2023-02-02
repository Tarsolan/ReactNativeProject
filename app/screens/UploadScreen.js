import { Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";

import * as Progress from "react-native-progress";
import AppText from "../components/AppText";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

const UploadScreen = ({ progress = 0, visible = false, onDone }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            width={200}
            color={colors.primary}
          />
        ) : (
          <LottieView
            source={require("../assets/animations/done.json")}
            onAnimationFinish={onDone}
            autoPlay
            loop={false}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: { alignItems: "center", justifyContent: "center", flex: 1 },
});
