import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import ToDoList from "../components/todolist";
import ToDoForm from "../components/todoform";
import { useState } from "react";

const Index = () => {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
};

export default Index;
