import React from 'react';
import { StyleSheet, View, TextInput , Text} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import colors from "../utils/Colors";

const Form = ({setTipoCafe, setTipoPago, setTamanCafe, setCantidad, setNombre}) => {
    return ( 
        <>
      <View style={styles.viewForm}>
        <View style={styles.viewInputs}>
          <TextInput
            placeholder="Nombre cafe: "
            keyboardType="default"
            style={styles.input}
            onChange={(e) => setNombre(e.nativeEvent.text)}
          />
          <TextInput
            placeholder="Cantidad Cafe: 8"
            keyboardType="numeric"
            style={[styles.input, styles.inputPercentage]}
            onChange={(e) => setCantidad(e.nativeEvent.text)}
          />
        </View>
        <RNPickerSelect
          style={picketSelectStyles}
          onValueChange={(value) => setTipoPago(value)}
          placeholder={{ label: "Selecciona tu tipo de pago: ", value: 0 }}
          items={[
            { label: "Pago en Efectivo", value: 0.15 },
            { label: "Tarjeta de Credito/Debito", value: 0.05 },
          ]}
        />
        <Text>{""}</Text>
        <RNPickerSelect
          style={picketSelectStyles}
          onValueChange={(value) => setTamanCafe(value)}
          placeholder={{ label: "Selecciona el tamaño de tu café: ", value: 0 }}
          items={[
            { label: "Short 8 onz: $1.00", value: 1.0 },
            { label: "Tall 12 onz: $1.50", value: 1.50 },
            { label: "Grande 16 onz: $2.00", value: 2.0 },
          ]}
        />
        <Text>{""}</Text>
        <RNPickerSelect
          style={picketSelectStyles}
          onValueChange={(value) => setTipoCafe(value)}
          placeholder={{ label: "Selecciona el tipo de tu café: ", value: 0 }}
          items={[
            { label: "Mocha: $2.00", value: 2.0 },
            { label: "Te chai: $2.50", value: 2.50 },
            { label: "Americano: $1.50", value: 1.50 },
            { label: "Frapper: $3.00", value: 3.0 },
          ]}
        />
      </View>
        </>
     );
}

const styles = StyleSheet.create({
    viewForm: {
      bottom: 0,
      width: "100%",
      paddingHorizontal: 25,
      backgroundColor: colors.PRIMARY_COLOR_DARK,
      borderRadius: 30,
      height: 180,
      justifyContent: "center",
    },
    viewInputs: { flexDirection: "row" },
    input: {
      height: 35,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: colors.PRIMARY_COLOR,
      borderRadius: 5,
      width: "50%",
      marginBottom: 10,
      color: "#000",
      paddingHorizontal: 20,
    },
    inputPercentage: { width: "50%", marginLeft: 5 },
  });
  
  const picketSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "grey",
      borderRadius: 4,
      color: "black",
      paddingRight: 30,
      backgroundColor: "#fff",
      marginLeft: -5,
      marginRight: -5,
    },
    inputAndroid: {
      fontSize: 16,
      height:30,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: "grey",
      borderRadius: 8,
      color: "black",
      paddingRight: 30,
      backgroundColor: "#fff",
    },
  });
 
export default Form;