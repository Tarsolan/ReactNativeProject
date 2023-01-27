import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Icon from "./Icon";

const CategoryPickerItem = ({ item, onPress }) => {
  const { label, icon } = item;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {icon && (
          <View style={styles.icon}>
            <Icon
              name={icon.name}
              backgroundColor={icon.color}
              iconColor={colors.white}
              size={100}
            />
          </View>
        )}
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 20,
  },
});
