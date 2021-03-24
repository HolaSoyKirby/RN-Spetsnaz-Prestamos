import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextAreaView,
  StatusBar,
  LogBox,
  SafeAreaView,
  ScrollView
} from "react-native";
import colors from "./utils/colors";
import Form from "./components/Form";
import Footer from "./components/Footer";
import ResultCalculator from "./components/ResultCalculator";

// LogBox.ignoreAllLogs();

export default function App() {
  const [cantidad, setCantidad] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    calculate();
  }, [cantidad, interes, meses]);

  const calculate = () => {
    if (!cantidad) {
      setErrorMessage("No has ingresado ninguna cantidad de dinero");
    } else if (!interes) {
      setErrorMessage("añade los intereses");
    } else if (!meses) {
      setErrorMessage("añade los meses");
    } else {
      const i = interes / 100;

      const algo = (cantidad * i) / (1 - Math.pow(1 + i, -meses));

      setTotal(algo);
      setErrorMessage("");
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.tittleApp}>Prestamo</Text>
        <Form
          setCantidad={setCantidad}
          setInteres={setInteres}
          setMeses={setMeses}
        />
      </SafeAreaView>

      {/* RESULT COMPONENT*/}
      <ScrollView>
      <ResultCalculator
        cantidad={cantidad}
        interes={interes}
        meses={meses}
        total={total}
        errorMessage={errorMessage}
      />
      </ScrollView>
      <Footer calculate={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  safeArea: {
    height: 230,
    alignItems: "center",
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  },
  tittleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
});
