import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

class Campos extends Component{
  constructor(props){
    super(props);
    this.state = {rua:''};
    
    let {logradouro} = consultaCep('18022252');    
    
  }
  render(){
    return(      
      <View style={styles.container}>
        <TextInput keyboardType='numeric' placeholder='Digite um Cep' />
        <Text>CEP:</Text>
        <Text>Rua:{this.state.rua}</Text>
        <Text>UF:</Text>
        <Text>Cidade:</Text>
        <Button title="Consulta Cep" onPress={()=>this.setState({rua:logradouro})}/>
        
      </View>
    );
  }
    
}

export default class App extends React.Component {
  render() {
    return (
      <Campos/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

async function consultaCep(pCep){
  /* viacep.com.br/ws/01001000/json/  */
  const url = `https://viacep.com.br/ws/${pCep}/json/`;
  const resposta = await fetch(url);
  const json = await resposta.json();
  console.log(json);
  return json;
}
