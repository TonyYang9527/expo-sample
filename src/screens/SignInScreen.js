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



        <TouchableOpacity style={{
          height: 45,
          width: 250,
          marginBottom: 8,
          borderRadius: 5,
          backgroundColor: "#CB3F20",
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }} onPress={this._signInAsync}>
          <View style={{
            justifyContent: "center",
            alignItems: 'center',
            padding: 5,
            borderRadius: 5,
            width: '20%',
            backgroundColor: Color("#CB3F20").lighten(0.3)
          }}>
            <Image style={{
              resizeMode: 'contain',
              width: "95%",
              height: "95%",
            }} source={{ uri: 'https://png.icons8.com/google/androidL/40/FFFFFF' }} />
          </View>

          <View style={{
            width: '80%',
            alignSelf: 'center',
            justifyContent: "center", alignItems: 'center', alignContent: 'center',
          }}>
            <Text style={{
              color: 'white',
              justifyContent: "center", alignItems: 'center', alignContent: 'center',
            }}>Sign in with google</Text>
          </View>
        </TouchableOpacity>



        <TouchableOpacity style={{
          height: 45,
          width: 250,
          marginBottom: 8,
          borderRadius: 5,
          backgroundColor: "#3B5998",
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }} onPress={this._signInAsync}>
          <View style={{
            justifyContent: "center",
            alignItems: 'center',
            padding: 5,
            borderRadius: 5,
            width: '20%',
            backgroundColor: Color("#3B5998").lighten(0.3)
          }}>
            <Image style={{
               resizeMode: 'contain',
               width: "95%",
               height: "95%",
            }} source={{ uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF' }} />
          </View>

          <View style={{
            width: '80%',
            alignSelf: 'center',
            justifyContent: "center", alignItems: 'center', alignContent: 'center',
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
    width: 250,
    marginBottom: 8,


    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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


  fabookButtonContainer: {
    height: 45,
    width: 250,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: "#333",

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',


  },

  googleButton: {
    backgroundColor: "#DD4B39",
  },

});