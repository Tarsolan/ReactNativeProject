import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onAddImage, onRemoveImage }) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => {
            return (
              <View key={uri} style={styles.image}>
                <ImageInput
                  imageUri={uri}
                  onChangeImage={() => onRemoveImage(uri)}
                />
              </View>
            );
          })}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  image: { marginRight: 10 },
});
