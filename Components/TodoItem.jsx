import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <React.Fragment>
      <View style={styles.item}>
        <Text>{item.text}</Text>

        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <Image
            id="img"
            style={styles.image}
            source={require("../assets/delete.png")}
          />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default TodoItem;
