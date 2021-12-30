import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  RefreshControl,
} from "react-native";

import Header from "./Header";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

import { showAllTasks, createTask } from "../Utils/api";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Main() {
  const [todos, setTodos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const dataLoader = () => {
    showAllTasks()
      .then((resp) => {
        console.log(resp.result);
        setTodos(resp.result);
      })
      .catch((err) => console.log(err));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dataLoader();

    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    dataLoader();
  }, []);
  /*
  Some sample data
  { text: "buy coffee", key: "1" },
  { text: "create an app", key: "2" },
  { text: "play on the switch", key: "3" },
  */

  const renderItem = ({ item }) => {
    return (
      <TodoItem
        key={item._id}
        item={item}
        pressHandler={pressHandler}
        dataLoader={dataLoader}
      />
    );
  };

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      createTask({ name: text })
        .then((resp) => {
          console.log(resp);
          setTodos(...todos, [resp.result]);
          dataLoader();
        })
        .catch((err) => console.log(err));
    } else {
      console.log("empty string");
      Alert.alert("Oops!", "Todo must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("Dismiss Keyboard");
      }}>
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
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
    padding: 20,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    paddingHorizontal: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
