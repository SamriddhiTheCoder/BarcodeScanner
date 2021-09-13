import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>BarCode Scanner</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#2196F3',
    marginBottom: 25,
  },
  text:{
    color: 'black',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default Header;