import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/lists/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    iconName: "format-list-bulleted",
    color: colors.primary,
    size: 50,
  },
  {
    title: "My Messages",
    iconName: "email",
    color: colors.secondary,
    size: 50,
  },
];

const MyAccountScreen = () => {
  const [accountOptions, setAccountOptions] = useState(menuItems);
  return (
    <Screen style={styles.background}>
      <View style={styles.infoContainer}>
        <ListItem
          title="Alex Ridgeley"
          subTitle="aridgeley@msn.com"
          image={require("../assets/alex.jpg")}
        />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={accountOptions}
          keyExtractor={(accountOption) => accountOption.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.iconName}
                  color={item.color}
                  size={item.size}
                />
              }
            />
          )}
          ItemSeparatorComponent={<ListItemSeperator />}
        />
      </View>

      <View style={styles.logout}>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" color="#ffe66d" size={50} />}
        />
      </View>
    </Screen>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  background: { backgroundColor: colors.light },
  infoContainer: { backgroundColor: colors.white, marginVertical: 20 },
  listContainer: { backgroundColor: colors.white },
  logout: { backgroundColor: colors.white, marginTop: 20 },
});
