import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import Items2 from './Items2'
import Items3 from './Items3'
import Items4 from './Items4'
import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'
import database from './Database'



class Page4 extends React.Component {

  constructor(props){
    super(props)
    this.state = {

      };
  }

  componentDidMount() {
    this.update();
  }

  onChangeText = text => this.setState({ text });

  onPressAdd = () => {
    this.addText();
    this.setState({ text: null });
  };

  addText() {
    if (this.state.text === null || this.state.text === "") {
      return false;
    }
    database.putText(this.state.text,this.add_text_success,this.add_text_fail);

  };

  add_text_success=async()=>{
    this.update();
  }

  add_text_fail=async(error)=>{
      console.log(error);
  }

  change_Complete=(id)=>{
    database.updateText(id);
    this.update();
  }


  delete_Complete=(id)=>{
    database.updateText2(id);
    this.update();
  }

  delete_Complete2=(id)=>{
    database.deleteText(id);
    this.update();
  }

  update (){
    this.todo.update();
    this.todone.update();
    this.todone2.update();
  };




  render() {
    return (
      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>
      <HeaderNavigationBar {...this.props} />
      <View style={{flex:1,justifyContent: 'center'}}>
          <TextInput
              style={styles.nameInput}
              placeholder="What do you need to do ?"
              onChangeText={this.onChangeText}/>

          <TouchableOpacity
              style={styles.touchableUser}
              onPress={this.onPressAdd}>
              <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Create</Text>
          </TouchableOpacity>

          <ScrollView style={styles.listArea}>
              <Items2
                  ref={todo =>(this.todo = todo)}
                  onPressTodo={this.change_Complete}
                    />
              <Items3
                  ref={todone =>(this.todone = todone)}
                  onPressComplate={this.delete_Complete}
                    />
              <Items4
                    ref={todone2 =>(this.todone2 = todone2)}
                    onPressComplate={this.delete_Complete2}
                    />
        </ScrollView>
      </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  flexRow: {
    flexDirection: "row"
  },
  input: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8
  },
  listArea: {
    backgroundColor: "transparent",
    flex: 1,
    paddingTop: 16
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8
  },
  nameInput: {
        alignItems: 'center',
        height:50,
        backgroundColor: 'transparent',
        padding: 5,
        margin:5,
        borderRadius: 50,
        borderColor:'white',
        borderWidth : 1,
        fontSize:20,
    },
    buttonText: {
        alignItems: 'center',
        height:50,
        backgroundColor: '#86A8E7',
        padding: 10,
        margin:5,
        borderRadius: 50,
        borderColor:'white',
        borderWidth : 1,
        fontSize:30,
        color:'#ffffff'
    },
    touchableUser:{
      alignItems: 'center',
      padding:10,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      margin:5,
      marginTop:2,
    }
});

export default Page4;
