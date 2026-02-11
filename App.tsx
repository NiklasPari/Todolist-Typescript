import { StyleSheet, Text, View, FlatList, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import TaskItem from './components/TaskItem';

import { useTodos } from "./hooks/useTodos";


export default function App() {
  const {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  } = useTodos();
  
  return (
 <View style={styles.container}>
      <Text style={styles.headline}>Todo List</Text>

      <AddTask onAdd={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <TaskItem
            text={item.text}
            done={item.done}
            onToggle={() =>
              toggleTodo(item.id)
            }
            onRemove={() =>
              removeTodo(item.id)
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginTop: 60,
    justifyContent: 'flex-start', 
  },
  headline:   {
    fontSize: 24,
     marginBottom: 20, 
     alignSelf: 'center',
  },
});


