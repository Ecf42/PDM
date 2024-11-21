import { useState } from 'react' // hook
import { StatusBar } from 'expo-status-bar';
import { 
  Alert, 
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

interface Lembrete {
  id?: string;
  texto: string;
}

export default function App() {
  //guardar o que o usuário digita numa variável de estado, usando o hook useState, chame essa variável de lembrete e a função associada de setLembrete
  //exibir lembrete logo abaixo fo Text Input usando um text
  //resultado esperado: a cada letra digitada, a aplicação exibe o novo texto logo abaixo do campo em que o usuárioo digita 
  const [lembrete, setLembrete] = useState <Lembrete>({texto: ''})
  const [lembretes, setLembretes] = useState<Lembrete[]> ([])
  const [emModoDeEdicao, setEmModoDeEdicao] = useState(false)

  const adicionar = () => {
    if(lembrete.texto.length > 1){

      // construir um lembrete com id igual à data atual do sistema e texto igual ao valor existente na variável de estado
      const novoLembrete: Lembrete = {
        id: Date.now().toString(),
        texto: lembrete.texto
      }
      // utilizar o hook associado à lista de lembretes para adicionar o novo lemmbrete ao final da lista
      setLembretes(lembretesAtual => [novoLembrete, ...lembretesAtual])
      // limpar o campo em que o usuário digita o lembrete atualizando a variável de estado correspondente
      setLembrete({texto: ''}) 
    }
    else {
      Alert.alert('É preciso digitar um lembrete')
    }
  }

  const remover = (lembrete: Lembrete) => {
    //remove sem alert
    setLembretes(lembretesAtual => lembretesAtual.filter(item =>
    item.id !== lembrete.id));
  }

  const atualizar = () => {
    const lembretesAtualizados = lembretes.map(item => {
      if(item.id ===  lembrete.id)
        return lembrete
      return item
    })

    setLembretes(lembretesAtualizados)
    setEmModoDeEdicao(false)
    setLembrete({texto: ''})
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
      placeholder='Digite um lembrete...'
      onChangeText={(novoTexto) => setLembrete({id: lembrete.id, texto: novoTexto})}
      value={lembrete.texto}/>
      <Pressable
      style={styles.button}
      >
        <Text
        style={styles.buttonText}
        onPress={emModoDeEdicao ? atualizar : adicionar}>
          {
            emModoDeEdicao ? 'Atualizar lembrete' : 'Salvar Lembrete'
          }
        </Text>
      </Pressable>
      <FlatList
        keyExtractor={item => (item.id)!}
        style={styles.list}
        data={lembretes}
        renderItem={l => (
          <View
            style={styles.listItem}>
            <Text
              style={styles.listItemText}>
              {l.item.texto}
            </Text>
            <View
            style={styles.listItemButtons}>
            <Pressable
              onPress={() => remover(l.item)}>
              <AntDesign
              name='delete'
              size={24}/>
            </Pressable>
            <Pressable
            onPress={() => {
              setLembrete({id: l.item.id, texto: l.item.texto})
              setEmModoDeEdicao(true)}}>
            <AntDesign
              name='edit'
              size={24}/>
            </Pressable>
            </View>
          </View>
        )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  input:  {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
    textAlign: 'center',
    borderRadius: 4
  },
  button:   {
    width: '80%',
    backgroundColor: '#0096F3',
    padding: 12,
    borderRadius: 4
  },
  buttonText:   {
    color: 'white',
    textAlign: 'center'
  },
  list:   {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 12,
    borderRadius: 4,
    padding: 4
  },
  listItem:   {
    borderWidth: 1,
    borderColor: 'gray', 
    padding: 12,
    backgroundColor: '#f0f0f0',
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemText:  {
    textAlign: 'center',
    width: '70%'
  },
  listItemButtons:  {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-evenly'
  }
});
