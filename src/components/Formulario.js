import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Animated, Alert } from 'react-native'
import { Picker } from '@react-native-community/picker'

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {

  const { pais, ciudad } = busqueda;

  const [animacionBoton] = useState(new Animated.Value(1));

  const consultarClima = () => {
    if (pais.trim() === '' || ciudad.trim() === '') {
      mostrarAlerta();
      return;
    }
    guardarConsultar(true)
  }

  const mostrarAlerta = () => {
    Alert.alert('Error', 'Agregar una ciudad y país para la busqueda', [{ text: 'Entiendo' }])
  }

  const animacionEntrada = () => {
    Animated.spring(animacionBoton, {
      toValue: .8,
      useNativeDriver: true
    }).start();
  }
  const animacionSalida = () => {
    Animated.spring(animacionBoton, {
      toValue: 1,
      friction: 4,
      tension: 30,
      useNativeDriver: true
    }).start();
  }

  const estiloAnimacion = {
    transform: [{ scale: animacionBoton }]
  }

  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput
            value={ciudad}
            onChangeText={ciudad => guardarBusqueda({ ...busqueda, ciudad })}
            style={styles.input} placeholder='ciudad' placeholderTextColor="#666" />
        </View>

        <View>
          <Picker
            selectedValue={pais}
            style={styles.paises}
            onValueChange={pais => guardarBusqueda({ ...busqueda, pais })}
          >
            <Picker.Item label="-Seleccione un Pais" value="" />
            <Picker.Item label="Estados Unidos" value="US" />
            <Picker.Item label="Perú" value="PE" />
            <Picker.Item label="Argentina" value="AR" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="España" value="ES" />
          </Picker>
        </View>

        <TouchableWithoutFeedback
          delayPressIn
          onPressIn={() => animacionEntrada()}
          onPressOut={() => animacionSalida()}
          onPress={() => consultarClima()}
        >
          <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
            <Text style={styles.textoBuscar}>Buscar Clima</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </>
  )
}

export default Formulario

const styles = StyleSheet.create({
  formulario: {
    marginTop: 30
  },

  input: {
    padding: 10,
    height: 45,
    backgroundColor: "#fff",
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },

  paises: {
    height: 45,
    backgroundColor: "#fff",
    textAlign: 'center',
  },

  btnBuscar: {
    height: 45,
    marginTop: 50,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: 90,
    borderRadius: 15
  },

  textoBuscar: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18
  }
})