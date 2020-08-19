import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'code', key: '1' },
    { text: 'code some more', key: '2' },
    { text: 'code even more', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key);
    })
  };

  const addKey = () => {
    return (todos.length + 1).toString();
  };

  const addtodo = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: addKey()},
        ...prevTodos
      ];
    });
  };

  const sendAlert = () => {
    Alert.alert('error', 'no blank todos', [
      { text: "OK", onPress: () => console.log('alert closed') }
    ]);
  };

  const submitHandler = (text) => {
    if(text.length > 0) {
      addtodo(text);
      return;
    }
    sendAlert();
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo
          submitHandler={submitHandler}
        />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem
                item={item}
                pressHandler={pressHandler}
              />
            )}
          />
        </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
