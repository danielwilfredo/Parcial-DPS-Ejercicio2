import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import Colors from "../utils/Colors";

const Footer = () => {
    return ( 
        <>
        <View style={styles.viewFooter}>
            <View style={{
                marginTop:25,
                marginBottom:25
            }}>
            <Text style={styles.text}>Universidad Don Bosco</Text>
            <Text style={styles.text}>Diseño y Programación de Software Multiplataforma</Text>
            <Text style={styles.text}>Parcial Practico #1</Text>
            <Text style={styles.text}>Daniel Wilfredo Granados Hernández - GH161659</Text>
            <Text style={styles.text}>José Antonio Morales Lira - ML161665</Text>
            </View>
        </View>
        
        </>

     );
}

const styles = StyleSheet.create({
    viewFooter: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      backgroundColor: Colors.PRIMARY_COLOR,
      height: 120,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      alignItems: "center",
      justifyContent: "center",
      opacity:0.95
    },
    text: {
      fontWeight: "400",
      fontSize: 15,
      color: "#fff",
      textAlign: "center",
    },
  });
 
export default Footer;