import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { deleteTask } from "../Utils/api";

const TodoItem = ({ item, pressHandler, dataLoader }) => {
  const deleteHandler = (ID) => {
    deleteTask(ID)
      .then(() => {
        // pressHandler();
        dataLoader();
        console.log("Item deleted");
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <View style={styles.item}>
        <Text>{item.name}</Text>

        <TouchableOpacity onPress={() => deleteHandler(item._id)}>
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
    alignItems: "center",
  },
});

export default TodoItem;
