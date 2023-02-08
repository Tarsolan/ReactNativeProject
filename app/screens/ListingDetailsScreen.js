import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import React from "react";
import { Image } from "react-native-expo-image-cache";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import ContactSellerForm from "../components/ContactSellerForm";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        uri={listing.images[0].url}
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/alex.jpg")}
            title={"Alex Ridgeley"}
            subTitle={"5 Listings"}
            showChevron
          />
        </View>
      </View>

      <ContactSellerForm listingId={listing.id} />
    </KeyboardAvoidingView>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
    // flex: 1,
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
  // userContainer: { marginVertical: 40 },
});
