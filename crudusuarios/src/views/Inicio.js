import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { Card, FAB, List } from 'react-native-paper'
import globalstyles from '../theme/Global'
import axios from 'axios'


export default function Inicio({ navigation }) {
  //const { navigation } = props;
  const [clientes, setCliente] = useState([]);
  const [consultarApi, setConsultarApi] = useState(true);

  useEffect(() => {

    const datosClientesApi = async () => {
      try {
        const resultado = await axios.get('http://192.168.100.4:3000/clientes')
        setCliente(resultado.data)
        setConsultarApi(false);
      } catch (error) {
        console.log(error);
      }
    }
    if (consultarApi) {
      datosClientesApi();
    }
  }, [consultarApi])

  return (
    <>
      <Card style={globalstyles.contenedor}>
        <Card.Title title="Alumnos Sise" />
        <Card.Content>

          <FlatList
            data={clientes}
            renderItem={({ item }) => (
              <List.Item
                title={item.nombre}
                description={item.empresa}
                onPress={() => navigation.navigate("DetallesCliente", { item, setConsultarApi })}
              />
            )}
            keyExtractor={cliente => (cliente.id)}
          />

        </Card.Content>
      </Card>

      <FAB
        style={globalstyles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate("NuevoCliente", {setConsultarApi})}
      />
    </>
  )
}