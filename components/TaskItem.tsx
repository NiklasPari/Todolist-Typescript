import { Pressable, Text, StyleSheet } from 'react-native';

interface Props {
  task: { text: string; done: boolean };
  onToggle: () => void;
}

export default function TaskItem({ task, onToggle }: Props) {
  return (
    <Pressable style={styles.taskItem} onPress={onToggle}>
         <Text
        style={{
          textDecorationLine: task.done ? 'line-through' : 'none',
         textAlign: 'left',
        }}
      >
        {task.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    padding: 10,
  },
});
