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

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
};

export default Index;
