import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {texto:''};
    
    this.mudarTexto = this.mudarTexto.bind(this);


  }
  mudarTexto(texto){
    let s = this.state;
    s.texto = texto;
    this.setState(s);
    
  }

  render() {
    return (
      <View style={{paddingTop:40}}>      
        <TextInput style={styles.input} onChangeText={this.mudarTexto}/>
        <Text style={{textAlign:'center'}}>{this.state.texto}</Text>
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

