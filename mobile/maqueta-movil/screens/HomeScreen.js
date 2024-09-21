import * as React from "react";
import { View, Image, StyleSheet, ScrollView, Pressable } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const handleCardPress = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <View style={styles.container}>
      {/* Imagen título en la parte superior derecha */}
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/label.png")} // Cambia este enlace por tu imagen
            style={styles.titleImage}
          />
          <Pressable onPress={() => navigation.navigate("SelectType")}>
            <Image source={require("../assets/add.png")} style={styles.icon} />
          </Pressable>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.cardContainer}>
        <Pressable
          style={styles.pressable}
          onPress={() => handleCardPress("EditAlarm")}
        >
          <Card style={styles.card}>
            <Card.Content>
              <Title>Alarma 1</Title>
              <Paragraph>Alarma tradicional</Paragraph>
              <Paragraph>Fecha: 23/01/24 ------- Hora: 7:00 AM</Paragraph>
              <Title></Title>
              <Paragraph>Girar para apagar</Paragraph>
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable
          style={styles.pressable}
          onPress={() => handleCardPress("EditAlarm")}
        >
          <Card style={styles.card}>
            <Card.Content>
              <Title>Alarma 2</Title>
              <Paragraph>Alarma tradicional</Paragraph>
              <Paragraph>Fecha: 25/08/24 ------- Hora: 7:00 AM</Paragraph>
              <Title></Title>
              <Paragraph>Apagar con botón</Paragraph>
            </Card.Content>
          </Card>
        </Pressable>

        <Pressable
          style={styles.pressable}
          onPress={() => handleCardPress("EditAlarm")}
        >
          <Card style={styles.card}>
            <Card.Content>
              <Title>Alarma 3</Title>
              <Paragraph>Alarma tradicional</Paragraph>
              <Paragraph>Fecha: 25/08/25 ------- Hora: 7:00 AM</Paragraph>
              <Title></Title>
              <Paragraph>Girar para apagar</Paragraph>
            </Card.Content>
          </Card>
        </Pressable>
      </ScrollView>
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
    marginBottom: 16,
    paddingTop: 20,
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
    marginRight: 130,
    marginLeft: 10,
  },
  cardContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    height: 190,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },
  pressable: {
    width: "100%",
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginTop: 12,
  },
});
