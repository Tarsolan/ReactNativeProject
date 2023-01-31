import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Icon from "./Icon";

const CategoryPickerItem = ({ item, onPress }) => {
  const { label, icon } = item;

  return (
    <View style={styles.container}>
      {icon && (
        <TouchableOpacity onPress={onPress}>
          <Icon
            name={icon.name}
            backgroundColor={icon.color}
            iconColor={colors.white}
            size={80}
          />
        </TouchableOpacity>
      )}
      <AppText style={styles.text}>{label}</AppText>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    width: "33%",
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    marginTop: 5,
    textAlign: "center",
  },
});
