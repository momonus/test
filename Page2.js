import React from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'
import database from './Database'

class Page2 extends React.Component {

  state = {
    firstName: 'Name : ',
    lastName: 'LastName : ',
    email: 'Email : ',
    id:''
  };

  onPressOK = () => {
      database.readOnce(this.state.id,this.read_Account_success,this.read_Account_fail)
  };

  read_Account_success=async(account)=>{

      this.steState({irstName:account.firstName});
      this.steState({lastName:account.lastName});
  }

  read_Account_fail=async()=>{


  }

  onChangeTextID = id => this.setState({id});

  render() {
    return (

      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>
      <HeaderNavigationBar {...this.props} />
      <View style={{flex:1,justifyContent: 'center'}}>

        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.textInput}
            placeholder="ID"
            onChangeText={this.onChangeTextID}/>

            <TouchableOpacity
              style={styles.touchableUser}
              onPress={this.onPressOK}>
                <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Find</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.text}>{this.state.firstName}</Text>
          <Text style={styles.text}>{this.state.lastName}</Text>
          <Text style={styles.text}>{this.state.email}</Text>

      </View>
      </LinearGradient>
    );
  }
}

const offset = 16;
const styles = StyleSheet.create({
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
  },
  text: {
      alignItems: 'center',
      height:50,
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
  },
  textInput: {
      alignItems: 'center',
      height:50,
      width:310,
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
  },


});

export default Page2;
