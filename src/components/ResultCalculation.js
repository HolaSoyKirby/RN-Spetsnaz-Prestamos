import React from "react";
import { StyleSheet, Text, View, DataResult } from "react-native";

export default function ResultCalculation(props){
    const {cantidad, interes, meses, total, errorMessage } = props;

    return(
        <View style={styles.content}>
            <View style={styles.boxResult}>
                <Text style={styles.title}>Detalle Préstamo</Text>
                <DataResult
                title="Cantidad solicitada: $"
                value={`${cantidad}`}/>
                <DataResult
                title="Interés: "
                value={`${interes}`}/>
                <DataResult
                title="Plazos: "
                value={`${meses} meses`}/>
                <DataResult
                title="Pago Mensual: $"
                value={`${total}`}/>
            </View>
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

function DataResult(props){
    const {title, value} = props;

    return(
        <View>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40
    },
    boxResult: {
        padding: 30
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    error: {
        textAlign: 'center',
        color: '#FF0000',
        fontWeight: 'bold',
        fontSize: 20
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    }
})