import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Header from "./Header";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export default function Main() {
  const [todos, setTodos] = useState([]);

  /*
  Some sample data
  { text: "buy coffee", key: "1" },
  { text: "create an app", key: "2" },
  { text: "play on the switch", key: "3" },
  */
  const renderItem = ({ item }) => {
    return <TodoItem item={item} pressHandler={pressHandler} />;
  };

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text != null && text !== "") {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      console.log("empty string");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList data={todos} renderItem={renderItem} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
