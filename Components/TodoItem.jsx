import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <React.Fragment>
      <View style={styles.item}>
        <Text>{item.text}</Text>

        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <MaterialIcons name="delete" size={30} color="#4a7dff" />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#ccd8ff",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TodoItem;
