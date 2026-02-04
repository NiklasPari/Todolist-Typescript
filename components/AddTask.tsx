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
         placeholder="Enter task" 
         value={text} 
         onChangeText={setText} />
   
         <Pressable onPress={handleAdd}>
         <Text style={styles.buttonText}>Save</Text>
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
  buttonText: {
  color: 'blue',
  fontSize: 20,
  },
});
