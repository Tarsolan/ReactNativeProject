import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import React from "react";
import AppText from "../AppText";
import colors from "../../config/colors";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
  showChevron = false,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && (
              <Image source={image} resizeMode="contain" style={styles.image} />
            )}
            <View style={styles.detailContainer}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </AppText>
              )}
            </View>
            {showChevron && (
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={30}
                  color={colors.medium}
                />
              </View>
            )}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 15 },
  detailContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  icon: {
    alignSelf: "center",
    // justifyContent: "center",
  },
  image: { height: 70, width: 70, borderRadius: 35 },
  subTitle: { color: colors.medium },
  title: { fontWeight: "500" },
});
