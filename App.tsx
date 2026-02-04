import { StyleSheet, Text, View, FlatList, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import TaskItem from './components/TaskItem';

const STORAGE_KEY = 'TASK_ITEMS';

export default function App() {
  type Task = {
    text: string;
    done: boolean;
  };
  const [items, setItems] = useState<Task[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json) {
          const parsed = JSON.parse(json);
          if (Array.isArray(parsed)) {
            setItems(parsed);
          }
        }
      } catch (e) {
      }
    })();
  }, []);
useEffect(() => {
AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}, [items]);

function toggleTask(index: number) {  //katsotaan mikä tehtävä indexin peruusteella
  const updated = [...items];
  updated[index].done = !updated[index].done; //vaihdetaan tehtävä done tai !done
  setItems(updated);  //päivittetään
}
function addTask(text: string) {
  setItems([...items, { text, done: false }]);
}

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Todo List</Text>

      <AddTask onAdd={addTask} />  { /*adddtask kutsuu onadd kun painetaan save*/}
      <FlatList 
          data={items}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => 
            (
              <TaskItem task={item} onToggle={() => toggleTask(index)} />
            )
          }
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


