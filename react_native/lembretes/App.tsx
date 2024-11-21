import { useState } from 'react' // hook
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  //guardar o que o usuário digita numa variável de estado, usando o hook useState, chame essa variável de lembrete e a função associada de setLembrete
  //exibir lembrete logo abaixo fo Text Input usando um text
  //resultado esperado: a cada letra digitada, a aplicação exibe o novo texto logo abaixo do campo em que o usuárioo digita 
  const [lembrete, setLembrete] = useState('')
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
      placeholder='Digite um lembrete...'
      onChangeText={(lembreteDigitado) => setLembrete(lembreteDigitado)}/>
      <text>{lembrete}</text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:  {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
    textAlign: 'center',
    borderRadius: 4
  }
});
