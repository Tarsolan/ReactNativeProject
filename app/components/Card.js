import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import React from "react";
import colors from "../config/colors";

const Card = ({ title, subTitle, imageUrl, onPress, thumbnailUrl }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          uri={imageUrl}
          style={styles.image}
          resizeMode="contain"
          preview={{ uri: thumbnailUrl }}
          tint="light"
        />
        <View style={styles.detailContainer}>
          <Text style={[styles.text, { marginBottom: 10 }]} numberOfLines={3}>
            {title}
          </Text>
          <Text
            style={[styles.text, { color: colors.secondary }]}
            numberOfLines={10}
          >
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 200,
    width: "100%",
  },
  detailContainer: { padding: 20 },
  text: { fontSize: 18 },
});
