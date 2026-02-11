import { Pressable, Text, StyleSheet , View} from 'react-native';

interface Props {
  text: string;
  done: boolean;
  onToggle: () => void;
  onRemove: () => void;
}

export default function TaskItem({
  text,
  done,
  onToggle,
  onRemove,
}: Props) {
  return (
    <View style={styles.row}>
    <Pressable style={styles.taskItem} onPress={onToggle}>
          <Text
        style={{
          textDecorationLine: done ? 'line-through' : 'none',
         textAlign: 'left',
        }}
      >
        {text}
      </Text>
 </Pressable>
        <Pressable
        style={styles.remove}
        onPress={onRemove}
      >
        <Text style={styles.removeText}>X</Text>
      </Pressable>
   
   </View>
  );
}

const styles = StyleSheet.create({
   row: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  taskItem: {
    backgroundColor: "white",
    padding: 10,
    width: "90%",
  },
    text: {
    fontSize: 16,
  },
  done: {
    color: "gray"
   } ,
   remove: {
     paddingHorizontal: 10,
    paddingVertical: 5,
  },
   removeText: {
   color: "#ff0000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
