import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AboutScreen, AddressScreen, AuthScreen, LoadingScreen, MeScreen, ParcelDetailScreen, ParcelScreen, SettingScreen, SignInScreen } from '../screens';
import MainNavigator from './MainNavigator';


const SignInStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
    {
        Loading: LoadingScreen,
        App: MainNavigator,
        Auth: SignInStack,

        ParcelDetail: ParcelDetailScreen,
        Setting: SettingScreen,
        Address: AddressScreen,
        About: AboutScreen,
    },
    {
        initialRouteName: 'Loading',
    }
));
