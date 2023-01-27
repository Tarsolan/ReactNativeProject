import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";

const initialListings = [
  {
    // Pretty good chance this will get replaced by some kind of state
    id: 1,
    title: "Red jacket for sale",
    subTitle: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    subTitle: 1000,
    image: require("../assets/couch.jpg"),
  },
];

const ListingsScreen = () => {
  const [listings, setListings] = useState(initialListings);
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.subTitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({});
