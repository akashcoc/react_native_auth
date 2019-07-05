import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Image,
  console,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';


import {Actions} from 'react-native-router-flux';



export default class Signup extends Component {

    goBack() {
		Actions.pop()
    }

    constructor() {
      super();

      this.state = {
        firstname: "",
        secondname: "",
        mobile: "",
        email: "",
        password: "",
        errors:[],
      }
    }


    async onRegisterPressed() {
      try {
        let response = await fetch('http://192.168.1.34:8000/User/', {
                                method: 'POST',
                                headers: {
                                  'Accept': 'application/json',
                                  'Content-Type': 'application/json',
                  
                                },
                                body: JSON.stringify({
                                  firstname: this.state.firstname,
                                  secondname: this.state.secondname,
                                  mobile: this.state.mobile,
                                  email: this.state.email,
                                  password: this.state.password,
                                })
                              });
                              let res = await response.text();
                              console.log("res is:" + res);

                            } catch(errors){

                            }
                          }        

    
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://img.icons8.com/material/24/000000/name.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="firstname"
              onChangeText={(val) => this.setState({ firstname:val })}
              />
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://img.icons8.com/material-outlined/24/000000/name.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="secondname"
              onChangeText={(val) => this.setState({ secondname:val })}
              />
        </View>

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://img.icons8.com/android/24/000000/google-mobile.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="mobile"
              onChangeText={(val) => this.setState({ mobile :val })}
              />
        </View>

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://img.icons8.com/material/24/000000/send-mass-email.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="email"
              onChangeText={(val) => this.setState({ email:val })}
              />
        </View>

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://img.icons8.com/ios/50/000000/forgot-password-filled.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(val) => this.setState({ password:val })}
              />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signinButton]}
         onPress={this.onRegisterPressed.bind(this)}>
          <Text style={styles.signinText}>Submit</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.buttonContainer}>
            <Text>Already  have an account ?</Text>
            <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Log in</Text></TouchableOpacity>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signinButton: {
    backgroundColor: '#00B9F1',
  },
  signinText: {
    color: 'white',
  },
  socialButtonContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  socialIcon:{
    color: "#FFFFFF",
    marginRight:5
  }
});