import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2024 Hyunseung Choi</Text>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    alignItems: "center",
  },
  text: {
    color: "#333",
  },
});