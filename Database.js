import * as firebase from 'firebase';
import '@firebase/firestore';

const config = {
  apiKey: "AIzaSyBXVTz6ZTPmnlSYDtlDUjYfQDKgKPLZuf0",
  authDomain: "my-project-5b1b9.firebaseapp.com",
  databaseURL: "https://my-project-5b1b9.firebaseio.com",
  projectId: "my-project-5b1b9",
  storageBucket: "my-project-5b1b9.appspot.com",
  messagingSenderId: "814772986724",
  appId: "1:814772986724:web:0230bca690d8c57b885071",
  measurementId: "G-C9T3FQSGT3"
};

class Database{

  constructor() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
          console.log("firebase apps initializeApp");
    } else {
        console.log("firebase apps already running...");
    }
  }

  getAccount=async()=>{

  }


  async readOnce(id,read_Account_success,read_Account_fail)
  {
    let getDoc = firebase.firestore().collection('Account').doc(id).get()
    .then(doc=>{
      if(doc.exists)
      {
        read_Account_success(doc.data());
      }
      else
      {
          read_Account_fail();
      }
    }).catch(
      read_Account_fail()
    );
  }

  async readAll(read_Account_success,read_Account_fail)
  {
    let getDoc = firebase.firestore().collection('Account').get()
    .then(snapshot=>{
      if(snapshot.emtry){
        read_Account_success();
        return;
      }
    snapshot.forEach(doc=>{
      read_Account_success(doc.data());
    })
  })
  .catch(read_Account_fail())
  }

  async readListening(read_Account_success,read_Account_fail)
  {
    let getDoc = firebase.firestore().collection('Account').onSnapshot
    (snapshot=>{
      if(snapshot.emtry){
        read_Account_fail();
        return;
      }
      snapshot.forEach(doc=>{
      read_Account_success(doc.data());
    })
  })
  .catch(read_Account_fail());
  }

  async deleteAccount(id,delete_Account_success,delete_Account_fail)
  {
    firebase.firestore().collection("Account").doc(id).delete().then(ref=>{add_Account_success(ref.id)}).catch(ref=>{add_Account_fail}).catch()
  }

  async updateAccount(account,update_Account_success,update_Account_fail)
  {
    var update00 = firebase.firestore().collection("Account").doc(account.id);
    return update00.update({
      firstName:account.firstName,
      lastName:account.lastName,
      email:account.email,
    })
    .then().catch();
  }



  async createAccount(Account,add_Account_success,add_Account_fail)
  {
      firebase.firestore().collection("Account").add(Account).then(ref=>{add_Account_success(ref.id)}).catch(ref=>{add_Account_fail})
  }

  async createAccount2(Account,add_Account_success,add_Account_fail)
  {
    try {
      firebase.firestore().collection("Account").doc(Account.firstName).set(Account);
      add_Account_success("ok")
    } catch (e) {
      add_Account_success("fail")
    } finally {

    }
  }



}

const database = new Database();
export default database;
