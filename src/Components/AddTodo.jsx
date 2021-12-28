import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
    // console.log(val);
  };

  const submitAndClear = (text) => {
    submitHandler(text);
    changeHandler("");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add new todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        onPress={() => submitAndClear(text)}
        title="add todo"
        color="#668aff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default AddTodo;
