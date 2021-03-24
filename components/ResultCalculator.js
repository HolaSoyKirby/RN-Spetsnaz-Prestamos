import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ResultCalculator(props) {
  const { cantidad, interes, meses, total, errorMessage } = props;

  return (
    <View style={styles.content}>
      <View style={styles.BoxResult}>
        <Text style={styles.tittle}></Text>
        <DataResult
          title="Cantidad Solicitada $"
          value={`${cantidad}`}
        ></DataResult>
        <Text style={styles.tittle}></Text>
        <DataResult title="% Interes" value={`${interes}`}></DataResult>
        <Text style={styles.tittle}></Text>
        <DataResult title="Plazos:" value={`${meses}`}></DataResult>
        <Text style={styles.tittle}></Text>
        <DataResult title="Pago Mensual:" value={`${total}`}></DataResult>
      </View>
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

function DataResult(props) {
  const { title, value } = props;

  return (
    <View>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 40,
  },
  BoxResult: {
    padding: 30,
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
  tittle: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
});
