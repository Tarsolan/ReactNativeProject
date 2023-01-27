import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

const Card = ({ title, subTitle, image }) => {
  const filePath = "../assets/" + image;

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="contain" />
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
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 24,
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
