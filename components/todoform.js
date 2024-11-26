import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from 'react';

const ToDoForm = ({ addTask }) => {

  const [taskText, setTaskText] = useState('');

  return (
    <View style={styles.form}>
      <TextInput 
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
        style={styles.input} 
        placeholder="Add a new task..." />
      <Button 
        onPress={() => {
          addTask(taskText);
          setTaskText('');
        }}
        title="Add Task" />
    </View>
  );
};

export default ToDoForm;

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
