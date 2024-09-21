import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { Button } from "react-native-paper";

export default function SelectAlarm({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Image source={require("../assets/back.png")} style={styles.icon} />
          </Pressable>
          <Image
            source={require("../assets/label.png")}
            style={styles.titleImage}
          />
        </View>
      </View>

      <Text style={styles.selectText}> Seleccione el tipo de alarma </Text>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.largeButton}
          labelStyle={{ fontSize: 18 }}
          onPress={() => navigation.navigate("TraditionalAlarm")} // Acción del botón
        >
          Alarma Tradicional
        </Button>

        <Button
          mode="contained"
          style={styles.largeButton}
          labelStyle={{ fontSize: 18 }}
          onPress={() => navigation.navigate("PayAlarm")} // Acción del botón
        >
          Alarma de Pagos
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    marginBottom: 16,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addButton: {
    marginRight: 8,
  },
  titleImage: {
    width: 180,
    height: 100,
    resizeMode: "contain",
    marginLeft: 130,
  },
  selectText: {
    textAlign: "center", // Centrar el texto
    fontSize: 18, // Tamaño de la fuente
    marginBottom: 20, // Espacio debajo del texto
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -230,
  },
  largeButton: {
    width: "90%",
    height: 170,
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#005D52",
    fontSize: 100,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginTop: 13,
    marginRight: 15,
  },
});
