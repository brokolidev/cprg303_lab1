import { SafeAreaView, Button } from 'react-native';
import React from "react";
import ToDoList from "../components/todolist";
import ToDoForm from "../components/todoform";
import { useState } from 'react';
import MainLayout from '../layouts/mainlayout';

const HomeScreen = ({ navigation }) => {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <Button
              title="Go to About"
              onPress={() => navigation.navigate('About')}
          />
      </SafeAreaView>
    </MainLayout>
  );
}

export default HomeScreen;