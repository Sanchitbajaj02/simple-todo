import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "./Header";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
// import Sandbox from "./Sandbox";

export default function Main() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

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
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      console.log("empty string");
      Alert.alert("Oops!", "Todo must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("Dismiss Keyboard");
      }}
    >
      <View style={styles.container}>
        {/* Header */}
        <Header />
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 30,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
