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
  Image,
  ImageBackground,
  Dimensions,
  Animated,
  Platform
} from 'react-native';

import Color from 'color';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

import icoMoonConfig from '../../assets/fonts/selection.json';
const Icon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf'
);

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class SignInScreen extends Component {


  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    const userToken = await AsyncStorage.getItem('userToken');
    console.log("SignInScreen userToken ", userToken)
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <ImageBackground
          source={require('../../assets/images/background.png')}
          resizeMode="cover"
          style={styles.bgImage}> */}

        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={{
            height: '40%',
            // flex: 1, alignItems: 'center', justifyContent: 'center' 
          }}>
            <Animated.Image resizeMode="contain" style={{ height: 90 }} source={require('../../assets/images/white-logo.png')} />
          </View>


          <View style={{
            paddingBottom: 10,
            // flex: 1, alignSelf: 'center' 
          }}  >

            <Icon name="Tbao" size={32} color="#FC641F" />
            <Icon name="JD6" size={32} color="#CB3F20" />
            <Icon name="Tmall2" size={32} color="#CB3F20" />
            <Icon name="Tmall6" size={32} color="#CB3F20" />
            <Icon name="explore" size={32} color="#CB3F20" />
            <Icon name="google-plus2" size={32} color="#3B5998" />

            <Text>Please login with below</Text>
          </View>

          <View style={{

            // flex: 1,
            // alignItems: 'flex-start',
            // justifyContent: 'flex-start',
            // alignSelf: 'center',
            // paddingBottom: Platform.OS === 'android' ? 30 : 0,
          }}>

            <TouchableOpacity style={{
              height: 45,
              width: 250,
              marginBottom: 8,
              borderRadius: 5,
              backgroundColor: "#CB3F20",
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }} onPress={this._signInAsync} activeOpacity={0.5}>
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
            }} onPress={this._signInAsync} activeOpacity={0.5}>
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
          </View>
        </View>
        {/* </ImageBackground> */}
      </View>
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

  bgImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: 30,
  },

});