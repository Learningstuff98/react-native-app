import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'bob', key: '1' },
    { name: 'jim', key: '2' },
    { name: 'bobjim', key: '3' },
    { name: 'jimbob', key: '4' },
    { name: 'bob', key: '5' },
    { name: 'jim', key: '6' },
    { name: 'bobjim', key: '7' },
    { name: 'jimbob', key: '8' },
    { name: 'bob', key: '9' },
    { name: 'jim', key: '10' },
    { name: 'bobjim', key: '11' },
    { name: 'jimbob', key: '12' },
    { name: 'bob', key: '13' },
    { name: 'jim', key: '14' },
    { name: 'bobjim', key: '15' },
    { name: 'jimbob', key: '16' },
  ]);

  return <ScrollView>
    <View style={styles.container}>
      {people.map(person => {
        return <View key={person.key}>
          <Text style={styles.person}>{person.name}</Text>
        </View>
      })}
    </View>
  </ScrollView>

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
    fontSize: 24
  }
});
