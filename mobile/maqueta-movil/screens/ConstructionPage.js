import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UnderConstructionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página en construcción</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Color de fondo (opcional)
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Color del texto
  },
});

export default UnderConstructionScreen;
