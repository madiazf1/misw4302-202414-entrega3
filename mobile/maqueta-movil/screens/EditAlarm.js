import * as React from "react";
import { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

export default function EditAlarm({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleOutsidePress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Pressable onPress={() => navigation.navigate("Home")}>
              <Image
                source={require("../assets/back.png")}
                style={styles.icon}
              />
            </Pressable>
            <Image
              source={require("../assets/label.png")}
              style={styles.titleImage}
            />
          </View>
        </View>

        <Text style={styles.title}>Editar alarma</Text>

        <TextInput label="Nombre" mode="outlined" style={styles.input} />
        <TextInput label="Fecha" mode="outlined" style={styles.input} />
        <TextInput label="Hora" mode="outlined" style={styles.input} />

        <Picker
          selectedValue={selectedValue}
          style={styles.input}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Apagar" value="" />
          <Picker.Item label="Girar para apagar" value="opcion1" />
          <Picker.Item label="Apagar con botón" value="opcion2" />
          <Picker.Item label="Apagar desde pantalla" value="opcion2" />
        </Picker>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={styles.submitButton}
            onPress={() => navigation.replace("HomeTabs")}
          >
            Editar
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    marginBottom: 20,
    paddingTop: 20,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleImage: {
    width: 180,
    height: 100,
    resizeMode: "contain",
    marginLeft: 130,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  submitButton: {
    marginTop: 40,
    width: 150,
    backgroundColor: "#005D52",
    borderRadius: 20,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginTop: 13,
    marginRight: 15,
  },
});
