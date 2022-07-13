import { StyleSheet } from 'react-native'

const globalstyles = StyleSheet.create({
  contenedor: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: '3%'
  },
  titulo: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    fontSize: 30
  },
  fab: {
    position: 'absolute',
    margin: 18,
    right: 0,
    bottom: 18
  },
  input: {
    marginVertical: 5
  },
  buttonForm: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    flexDirection: 'row',
    marginTop: 20,
    width: 200,
    backgroundColor: 'red'
  },

  fab: {
    position: 'absolute',
    margin: 20,
    right: 10,
    bottom: 5
  },

  texto: {
    marginBottom: 18,
    fontSize: 18
  }
})

export default globalstyles;