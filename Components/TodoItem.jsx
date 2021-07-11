import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <React.Fragment>
      <Text style={styles.item}>
        {item.text}
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <Image
            id="img"
            style={styles.image}
            source={require("../assets/delete.png")}
          />
        </TouchableOpacity>
      </Text>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    // marginVertical: 12,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default TodoItem;
