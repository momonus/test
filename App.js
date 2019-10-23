import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigation from './Component/DrawerNavigation'
export default class App extends React.Component{
  render(){
    return (
      <View style={{flex:1}}>
        <DrawerNavigation/>
      </View>
    );
  }
}
