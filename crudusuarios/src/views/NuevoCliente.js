import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { TextInput, Headline, Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper'
import globalstyles from '../theme/Global'
import axios from 'axios'

export default function NuevoCliente({ navigation, route }) {
  const { setConsultarApi } = route.params;

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [alerta, setAlerta] = useState(false);

  useEffect(() => {
    //console.log(route.params.cliente);
    if (route.params.cliente) {
      const { nombre, telefono, correo, empresa } = route.params.cliente;
      setNombre(nombre)
      setTelefono(telefono)
      setCorreo(correo)
      setEmpresa(empresa)
    }
  }, [])


  const guardarCliente = async () => {
    if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
      setAlerta(true);
      return;

    }
    const cliente = { nombre, telefono, correo, empresa };

    if (route.params.cliente) {

      const { id } = route.params.cliente;
      cliente.id = id;
      const url = `http://192.168.100.4:3000/clientes/${id}`;

      try {
        await axios.put(url, cliente)
      } catch (error) {
        console.log(error);
      }

    } else {

      try {
        const datos = await axios.post('http://192.168.100.4:3000/clientes', cliente)
      } catch (error) {
        console.log(error);
      }

    }

    navigation.navigate("Inicio");
    setNombre('');
    setTelefono('');
    setCorreo('');
    setEmpresa('');
    setConsultarApi(true);
  }

  return (
    <View style={globalstyles.contenedor} >
      <Headline style={globalstyles.titulo}>Nuevo Cliente</Headline>

      <TextInput
        mode="outlined"
        label="Nombre y apellido"
        placeholder="Escribe tu nombre"
        onChangeText={(texto) => setNombre(texto)}
        value={nombre}
      />

      <TextInput
        style={globalstyles.input}
        mode="outlined"
        label="Telefono"
        keyboardType='numeric'
        placeholder="Escribe tu telefono"
        onChangeText={(texto) => setTelefono(texto)}
        value={telefono}
      />

      <TextInput
        style={globalstyles.input}
        mode="outlined"
        label="Correo"
        placeholder="Escribe tu email"
        onChangeText={(texto) => setCorreo(texto)}
        value={correo}
      />

      <TextInput
        style={globalstyles.input}
        mode="outlined"
        label="Empresa"
        placeholder="Empresa donde trabajas"
        onChangeText={(texto) => setEmpresa(texto)}
        value={empresa}
      />

      <Button
        style={globalstyles.buttonForm}
        icon="camera" mode="contained" onPress={() => guardarCliente()}>
        Guardar
      </Button>

      <Provider>
        <Portal>
          <Dialog visible={alerta} onDismiss={() => setAlerta(false)}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setAlerta(false)}>Ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>
    </View>
  )
}