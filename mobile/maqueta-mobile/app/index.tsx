import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Image } from "react-native";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);
    router.push("/home"); // Navegar a la pantalla de home
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")} // Asegúrate de que la ruta sea correcta
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Ingresar" onPress={handleLogin} color="#005D52" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Registrarse" color="#005D52" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginVertical: 8,
    borderRadius: 4,
    width: "90%",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "50%",
  },
  link: {
    color: "blue",
    textAlign: "center",
  },
});

export default LoginScreen;
