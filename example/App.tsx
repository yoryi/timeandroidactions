import axios from "axios";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Timeandroidactions from 'timeandroidactions';

export default function App() {
  const [background, setBackground] = useState(false);
  const _HandleUniTest = () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const resultado = Timeandroidactions.start(5000);
    if (resultado) {
      setBackground(!background);
      axios
        .get(url)
        .then((response) => {
          console.log("Respuesta:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const renderUI = () => {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.titleApp}>TIME ANDROID ACTIONS</Text>
        <Text style={styles.titleState}>STATE: {background ? "1" : "2"}</Text>
        <TouchableOpacity style={styles.button} onPress={_HandleUniTest}>
          <Text style={styles.textButton}>INICIAR</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return renderUI();
}

const styles = StyleSheet.create({
  titleApp: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 19,
    paddingBottom: 10,
  },
  titleState: {
    color: "white",
    fontSize: 12,
  },
  button: {
    width: 100,
    height: 100,
    marginTop: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D1FF00",
  },
  textButton: {
    color: "#120C29",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#252525",
  },
});