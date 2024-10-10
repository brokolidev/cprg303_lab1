import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import ToDoList from "../components/todolist";
import ToDoForm from "../components/todoform";

const Index = () => {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
};

export default Index;
