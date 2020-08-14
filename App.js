import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'bob', id: '1' },
    { name: 'jim', id: '2' },
    { name: 'bobjim', id: '3' },
    { name: 'jimbob', id: '4' },
    { name: 'bob', id: '5' },
    { name: 'jim', id: '6' },
    { name: 'bobjim', id: '7' },
    { name: 'jimbob', id: '8' },
    { name: 'bob', id: '9' },
    { name: 'jim', id: '10' },
    { name: 'bobjim', id: '11' },
    { name: 'jimbob', id: '12' },
    { name: 'bob', id: '13' },
    { name: 'jim', id: '14' },
    { name: 'bobjim', id: '15' },
    { name: 'jimbob', id: '16' },
  ]);

  const pressHandler = (id) => {
    setPeople((previousPeople) => {
      return previousPeople.filter(person => person.id !== id);
    });
  }

  return <View style={styles.container}>
    <FlatList
      numColumns={2}
      data={people}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.person}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  </View>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  person: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  }
});
