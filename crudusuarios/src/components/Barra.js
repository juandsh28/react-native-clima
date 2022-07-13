import React from 'react'
import { StyleSheet, Button } from 'react-native'

export default function Barra(navigation, route) {
  const handlePress = () => navigation.navigate('NuevoCliente')
  return (
    <Button title='ver' onPress={() => handlePress()} />
  )
}

const styles = StyleSheet.create({})