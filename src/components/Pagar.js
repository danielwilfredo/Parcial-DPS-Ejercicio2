import { RefreshControlBase } from "react-native";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../utils/Colors";

export default function Pagar(props) {
  const {calculate} = props;

    
  return (
   <>
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.text}>CALCULAR</Text>
      </TouchableOpacity>
  </>
  );
}
const styles = StyleSheet.create({
   button: {
    backgroundColor: colors.PRIMARY_COLOR,
    padding: 16,
    borderRadius: 50,
    width: "100%"
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});