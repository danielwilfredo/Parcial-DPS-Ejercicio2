import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Results = ({tipocafe,tamancafe,tipopago,cantidad,total, nombre, errorMessage, descuento}) => {


    //obteniendo los tipos de pago, cafe, tamaño, etc
    let tipoCoffe="";
    let tipoPago="";
    let tamanoCafe="";

    switch (tipocafe) {
      case 2:
        tipoCoffe="Mocha: ";
        break;
      case 2.5:
        tipoCoffe="Te Chai: ";
        break;
      case 1.5:
        tipoCoffe="Americano: ";
        break;
      case 3:
        tipoCoffe="Frapper: ";
        break;
      default:
        tipoCoffe="Selecciona tu cafe ";
    }

    //para tamaño cafe
    switch (tamancafe) {
      case 1:
        tamanoCafe="Short 8 onz: ";
        break;
      case 1.5:
        tamanoCafe="Tall 12 onz: ";
        break;
      case 2:
        tamanoCafe="Grande 16 onz: ";
        break;
      default:
        tamanoCafe="Selecciona tamaño ";
    }

    //para tamaño pago
    switch (tipopago) {
      case 0.05:
        tipoPago="Pago con Tarjeta";
        break;
      case 0.15:
        tipoPago="Pago en Efectivo";
        break;
      default:
        tipoPago="Seleccione tipo de pago ";
    }
    
    return ( 
        <>
    <View style={styles.content}>
           <View style={styles.boxResult}>
          <Text style={styles.title}>Resumen de tu compra: {nombre}</Text>
          <DataResult title="Cantidad de Café:" value={`${cantidad}`} />
          <DataResult title="Tamaño :" value={`${tamanoCafe} ${tamancafe}`} />
          <DataResult title="Tipo de Cafe:" value={`${tipoCoffe} ${tipocafe} `} />
          <DataResult title="Tipo de Pago:" value={`${tipoPago}`} />
          <DataResult title="Descuento:" value={`- ${descuento}`} />
          <DataResult title="Total a pagar: " value={`${total} $`}
          />
        </View>
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
        </>

     );
}
function DataResult(props) {
    const { title, value } = props;
    return (
      <View style={styles.value}>
          <Text>{title}</Text>
           <Text>{value}</Text>
      </View>
    );
  }


const styles = StyleSheet.create({
    content: { marginHorizontal: 40, marginTop:45 },
    boxResult: { padding:5 },
    title: {
      fontSize: 24,
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: 20,
    },
    value: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    error: {
      textAlign: "center",
      color: "#f00",
      fontWeight: "bold",
      fontSize: 20,
    },
  });
export default Results;