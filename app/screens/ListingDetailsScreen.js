import { StyleSheet, View, Image } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <View>
      <Image source={listing.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title={"Mosh Hamedani"}
          subTitle={"5 Listings"}
        />
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "500",
  },
  userContainer: { marginVertical: 40 },
});
