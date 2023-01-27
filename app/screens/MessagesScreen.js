import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const MessagesScreen = ({ data }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "T1",
      descripton: "D1",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "T2",
      descripton: "D2",
      image: require("../assets/alex.jpg"),
    },
    {
      id: 3,
      title: "T3",
      descripton: "D3",
      image: require("../assets/alex.jpg"),
    },
    {
      id: 4,
      title: "T4",
      descripton: "D4",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 5,
      title: "T5",
      descripton: "D5",
      image: require("../assets/alex.jpg"),
    },
    {
      id: 6,
      title: "T6",
      descripton: "D6",
      image: require("../assets/mosh.jpg"),
    },
  ]);

  const handleDelete = (message) => {
    // This is where the "delete from db" code can go
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.descripton}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            showChevron
          />
        )}
        ItemSeparatorComponent={<ListItemSeperator />}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              descripton: "D2",
              image: require("../assets/alex.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
