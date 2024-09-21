import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOutsidePress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
        <TextInput
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttons}
            labelStyle={{ color: "#E2E2E2" }}
            title="Iniciar sesión"
            onPress={() => {
              navigation.replace("HomeTabs");
            }}
          >
            Iniciar sesión
          </Button>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/icon-gmail.png")}
              style={styles.icon}
            />

            <Image
              source={require("../assets/icon-icloud.png")}
              style={styles.icon}
            />
          </View>
          <Button
            style={styles.buttons}
            labelStyle={{ color: "#E2E2E2" }}
            title="Crear cuenta"
            onPress={() => alert("Ruta de navegación en contrucción")}
          >
            Crear cuenta
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 60,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  input: {
    width: "90%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    width: "40%",
    justifyContent: "space-between",
  },
  space: {
    marginVertical: 50,
  },
  buttons: {
    backgroundColor: "#005D52",
    borderRadius: 20,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    marginBottom: 20,
    marginTop: 50,
  },
  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    resizeMode: "contain",
  },
});
