import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/AppHeader';
import ScanScreen from './screens/ScanScreen';


export default class App extends React.Component {
  render(){
    return (
        <View>
          <Header/>
          <ScanScreen/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
