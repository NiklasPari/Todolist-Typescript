import { Pressable, Text, StyleSheet, View,TextInput} from 'react-native';
import { useState } from 'react';

interface Props {
  onAdd: (text: string) => void;
}
export default function AddTask({ onAdd }: Props) {
  const [text, setText] = useState('');

     function handleAdd() {
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  }
  return (
   <View style={styles.row}>
        <TextInput //TASKIN SYÖTTÖ
         style={styles.input}
         placeholder="Add a new task" 
         value={text} 
         onChangeText={setText} />
   
         <Pressable style={styles.button} onPress={handleAdd}>
         <Text style={styles.buttonText}>Add</Text>
       </Pressable>
   </View>
  );
}

const styles = StyleSheet.create({
   row: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 15,
  },
  
  input: {
  width: '80%',
  },
    button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
  fontSize: 20,
  },
});
