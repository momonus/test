import React from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'
import AccountListview from './AccountListview'
import database from './Database'

class Page3 extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        item:[]
      };
  }

  onPressOK = () => {
    database.readAll(this.read_Account_success,this.read_Account_fail);

  };

  read_Account_success=async(account)=>{
    this.setState(
      {item:this.state.item.concat([{
        name:account.firebase+''+account.lastname,
        email:account.email,
        image_url:'https://pbs.twimg.com/media/D95fvlXVUAAqcgm.jpg'
        //image_url:'https://u01.appmifile.com/images/2018/10/14/82d6aebc-aa4e-4b50-bfd7-b8fb8b813457.jpg'
      }])}
    )
  }

  read_Account_fail=async()=>{

  }


  render() {
    return (

      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>
      <HeaderNavigationBar {...this.props} />
      <View style={{flex:1,justifyContent: 'center'}}>

        <TouchableOpacity
          style={styles.touchableUser}
          onPress={this.onPressOK}>
            <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>All</Text>
        </TouchableOpacity>

        <View style ={styles.list}>
          <AccountListview itemList={this.state.item}/>
        </View>

      </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
  },
  list:{
    width:'98%',
    height:'90%',
    borderWidth : 1,
    borderColor:'white',
    borderRadius: 10,
    padding:10,
    margin:5,
  }
});

export default Page3;
