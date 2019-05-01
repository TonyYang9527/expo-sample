import React from 'react';
import { ActivityIndicator, AsyncStorage, Button,StatusBar, StyleSheet,View,Text} from 'react-native';

export default class SettingScreen extends React.Component {
    static navigationOptions = {
        title: 'Me ',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text> SettingScreen </Text>
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});