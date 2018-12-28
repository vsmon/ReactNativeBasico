import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {texto:''};
    
    /* this.mudarTexto = this.mudarTexto.bind(this); */

  }
/*   mudarTexto(t){
    let s = this.state;
    s.texto = t;
    this.setState(s);
    
  } */

  render() {
    return (
      <View style={{paddingTop:40}}> 
        <TextInput style={styles.input} 
        onChangeText={(texto)=>this.setState({texto:texto})}        
        />
        <Button title='Botao' onPress={()=>{
          let teste = this.state.texto
          console.log(teste)}}/>
        <Text style={{textAlign:'center'}}>{teste}</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    input:{
      height:40,
      margin:20,
      borderColor:"#000000",
      borderWidth:1
    }
  }
)

