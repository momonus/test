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

class Page5 extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    id:''
  };

  onPressUpdateAccount = () => {
    database.updateAccount(this.state,this.update_Account_success,this.update_Account_fail);
  }

  onPressDeleteAccount = () => {
    database.deleteAccount(stat,this.delete_Account_success,this.delete_Account_success);
  }

  update_Account_success=async()=>{
      console.log('Update Success');
  }

  update_Account_fail=async()=>{
      console.log('Update Fail');
  }

  delete_Account_success=async()=>{
      console.log('Delete Success');
  }

  delete_Account_fail=async()=>{
      console.log('Delete Fail');
  }

  onChangeTextFirstName = firstName => this.setState({ firstName });
  onChangeTextLastName = lastName => this.setState({ lastName });
  onChangeTextEmail = email => this.setState({ email });
  onChangeTextID = id => this.setState({ id });


  render() {
    return (

      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>
      <HeaderNavigationBar {...this.props} />
      <View style={{flex:1,justifyContent: 'center'}}>

        <View >
          <TextInput
            style={styles.textInput}
            placeholder="ID"
            onChangeText={this.onChangeTextID}/>

            <TouchableOpacity
              style={styles.touchableUser}
              onPress={this.onPressUpdateAccount}>
                <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Update</Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.touchableUser}
              onPress={this.onPressDeleteAccount}>
                <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Delete</Text>
            </TouchableOpacity>

            <TextInput
              style={styles.textInput}
              placeholder="FirstName"
              onChangeText={this.onChangeTextFirstName}/>

            <TextInput
              style={styles.textInput}
              placeholder="LastName"
              onChangeText={this.onChangeTextLastName}/>

            <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={this.onChangeTextEmail}/>


          </View>



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
      width:"50%",
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
  },


});

export default Page5;
