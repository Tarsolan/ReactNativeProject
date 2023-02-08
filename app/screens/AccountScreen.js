import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/lists/ListItem";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";

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
    destination: routes.MESSAGES,
  },
];

const AccountScreen = ({ navigation }) => {
  const { user, logout } = useAuth();
  const [accountOptions, setAccountOptions] = useState(menuItems);

  return (
    <Screen style={styles.background}>
      <View style={styles.infoContainer}>
        <ListItem
          image={require("../assets/alex.jpg")}
          title={user.name}
          subTitle={user.email}
        />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={accountOptions}
          ItemSeparatorComponent={<ListItemSeperator />}
          keyExtractor={(accountOption) => accountOption.title}
          renderItem={({ item }) => (
            <ListItem
              IconComponent={
                <Icon
                  backgroundColor={item.color}
                  name={item.iconName}
                  size={item.size}
                />
              }
              title={item.title}
              onPress={() => navigation.navigate(item.destination)}
            />
          )}
        />
      </View>

      <View style={styles.logout}>
        <ListItem
          IconComponent={
            <Icon name="logout" backgroundColor="#ffe66d" size={50} />
          }
          onPress={() => logout()}
          title="Log Out"
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  background: { backgroundColor: colors.light },
  infoContainer: { backgroundColor: colors.white, marginVertical: 20 },
  listContainer: { backgroundColor: colors.white },
  logout: { backgroundColor: colors.white, marginTop: 20 },
});
