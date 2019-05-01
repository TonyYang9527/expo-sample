import React from 'react';
import { ActivityIndicator, AsyncStorage, Button, StatusBar, StyleSheet, View } from 'react-native';


export default class LoadingScreen extends React.Component {

    constructor() {
        super();
        this._bootstrapAsync();
    }
    
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        console.log("userToken ",userToken)
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});