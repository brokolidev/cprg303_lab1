import { View, Text, Button } from 'react-native';
import React from "react";
import MainLayout from '../layouts/mainlayout';

const AboutScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <View>
        <Text>Name of the App: To Do List</Text>
        <Text>Name: Hyunseung Choi</Text>
        <Text>Date: {new Date().toDateString()}</Text>
        <Button
              title="Go to Home"
              onPress={() => navigation.navigate('Home')}
          />
      </View>
    </MainLayout>
  );
}


export default AboutScreen;