import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import Colors from "./src/utils/Colors";
import Form from "./src/components/Form";
import Footer from "./src/components/Footer";
import Result from "./src/components/Results";
import Pagar from './src/components/Pagar';

export default function App() {

  //creando los state para la app
  const [tipocafe, setTipoCafe]=useState(0);
  const [tamancafe, setTamanCafe] = useState(0);
  const [tipopago, setTipoPago]=useState(0);
  const [cantidad, setCantidad]=useState(0);
  const [total, setTotal]=useState(0); 
  const [nombre, setNombre]=useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [descuento, setDescuento]=useState(0);


   const calculate = () => {
    reset();
    if (nombre=="") {
      setErrorMessage("Ingrese su nombre") 
      return;
    }if(cantidad<=0 || cantidad=="")
    {
      setErrorMessage("Ingrese una cantidad correcta")
      return;
    } 
    if(tipocafe==0 || tamancafe==0) 
    {setErrorMessage("Seleccione un tipo de cafe y tamaño") 
    return;}
    if(tipopago==0) 
    {setErrorMessage("Seleccione un tipo de pago") 
    return;
  }
    else {
      let total1=parseFloat((tipocafe+tamancafe)*cantidad);
      let descuento2=parseFloat(total1*tipopago);
      let totalPagar=parseFloat(total1-descuento2);
      setTotal(totalPagar.toFixed(2))
      setDescuento(descuento2.toFixed(2))  
    }
    
  };

  useEffect(() => {
    if (nombre && cantidad && tipopago && tamancafe && tipocafe) calculate();
    else reset();
  }, []);

  const reset = () => {
    setErrorMessage("");
    setTotal(0);
  };


  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Coffee Don Bosco</Text>
        <Form 
        setTipoCafe={setTipoCafe}
        setTipoPago={setTipoPago}
        setTamanCafe={setTamanCafe}
        setCantidad={setCantidad}
        setNombre={setNombre}
        setDescuento={setDescuento}
        />
      </SafeAreaView>
      <Result 
      tipocafe={tipocafe}
      tamancafe={tamancafe}
      tipopago={tipopago}
      cantidad={cantidad}
      total={total}
      nombre={nombre}
      errorMessage={errorMessage}
      descuento={descuento}
      />

      <Pagar
      calculate={calculate}/>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: { height: 200, alignItems: "center" },
  background: {
    backgroundColor: Colors.PRIMARY_COLOR,
    height: 250,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  },
  titleApp: { fontSize: 25, fontWeight: "bold", color: "#fff", marginTop: 15 },
});
