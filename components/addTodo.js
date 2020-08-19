import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  // const changeHandler = (val) => {
  //   setText(val);
  // };

  // const buildTextInput = () => {
  //   return <TextInput
  //     style={styles.input}
  //     placeholder='new todo...'
  //     onChangeText={changeHandler} // this way also works
  //   />
  // };

  const buildTextInput = () => {
    return <TextInput
      style={styles.input}
      placeholder='new todo...'
      onChangeText={val => setText(val)}
    />
  };

  const buildButton = () => {
    return <Button
      onPress={() => submitHandler(text)}
      title='add todo'
      color='coral'
    />
  };

  return <View>
    {buildTextInput()}
    {buildButton()}
  </View>
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});
