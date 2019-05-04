import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  Image
} from 'react-native';

import Color from 'color';

export default class SignInScreen extends Component {


  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    const userToken = await AsyncStorage.getItem('userToken');
    console.log("SignInScreen userToken ", userToken)
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>

        {/* <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]} onPress={this._signInAsync} >
          <View style={styles.socialButtonContent}>
            <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF' }} />
            <Text style={styles.loginText}>Sign in  with facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]} onPress={this._signInAsync}>
          <View style={styles.socialButtonContent}>
            <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/google/androidL/40/FFFFFF' }} />
            <Text style={styles.loginText}>Sign in with google</Text>
          </View>
        </TouchableOpacity> */}


        <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]} onPress={this._signInAsync}>
          <View style={{
            justifyContent: "center",
            alignItems: 'center',
            padding: 10,
            backgroundColor: Color("#DD4B39").lighten(0.3)
          }}>
            <Image style={{
              width: 30,
              height: 30,

            }} source={{ uri: 'https://png.icons8.com/google/androidL/40/FFFFFF' }} />
          </View>

          <View style={{

            padding: 30,
            width: '100%'
          }}>
            <Text style={{
              color: 'white',
              justifyContent: "center", alignItems: 'center', alignContent: 'center',
            }}>Sign in with google</Text>
          </View>
        </TouchableOpacity>



        <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]} onPress={this._signInAsync}>
          <View style={{
            justifyContent: "center",
            alignItems: 'center',
            padding: 10,
            backgroundColor: Color("#333").lighten(0.45)
          }}>
            <Image style={{
              width: 30,
              height: 30,
            }} source={{ uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF' }} />
          </View>

          <View style={{
            padding: 30,
            width: '100%',
            alignSelf: 'center',
          }}>
            <Text style={{
              color: 'white',
              justifyContent: "center", alignItems: 'center', alignContent: 'center',
            }}>Sign in with facebook</Text>
          </View>
        </TouchableOpacity>


      

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    width: 250,
    borderRadius: 5,
  },

  socialButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },

  loginText: {
    color: 'white',
  },

  fabookButton: {
    // backgroundColor: "#4863AE",
     backgroundColor: "#333",

  },
  googleButton: {
    backgroundColor: "#DD4B39",
    // backgroundColor: "#4863AE",
  },

});