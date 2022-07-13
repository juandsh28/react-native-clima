import React from 'react'
import { View, Alert } from 'react-native'
import { Headline, Text, Subheading, Button, FAB } from 'react-native-paper'
import globalstyles from '../theme/Global'
import axios from 'axios'

export const DetallesCliente = ({ navigation, route }) => {

  const { nombre, telefono, correo, empresa, id } = route.params.item;
  const { setConsultarApi } = route.params;

  const mostrarConfirmacion = () => {
    Alert.alert(
      "¿Deseas eliminar este cliente?",
      "¿Estas seguro?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => eliminarContacto() }
      ]
    );
  };

  const eliminarContacto = async () => {
    const url = `http://192.168.100.4:3000/clientes/${id}`;
    try {
      await axios.delete(url)
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("Inicio");
    setConsultarApi(true);
  }

  return (
    <View style={globalstyles.contenedor}>
      <Headline style={globalstyles.titulo}>CLIENTES</Headline>
      <Text style={globalstyles.texto}>NOMBRE: <Subheading>{nombre}</Subheading></Text>
      <Text style={globalstyles.texto}>TELEFONO: <Subheading>{telefono}</Subheading></Text>
      <Text style={globalstyles.texto}>CORREO: <Subheading>{correo}</Subheading></Text>
      <Text style={globalstyles.texto}>EMPRESA: <Subheading>{empresa}</Subheading></Text>

      <Button style={globalstyles.buttonForm}
        icon="delete"
        mode="contained"
        onPress={() => mostrarConfirmacion()}>
        Eliminar
      </Button>

      <FAB
        style={globalstyles.fab}
        small
        icon="pencil"
        onPress={() => navigation.navigate("NuevoCliente", { cliente: route.params.item, setConsultarApi })}
      />

    </View>
  )
}