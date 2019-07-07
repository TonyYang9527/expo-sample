import React from 'react';
import { StatusBar, StyleSheet, View, UIManager, SafeAreaView } from 'react-native';
import { AppLoading, Font } from 'expo';
import Colors from './src/constants/Colors';
import RootNavigation from './src/navigation/RootNavigation';
import { authStore } from './src/stores';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () => Promise.all([
    Font.loadAsync({
      'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
      'Lato-BoldItalic': require('./assets/fonts/Lato-BoldItalic.ttf'),
      'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
      'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
      'Lato-Medium': require('./assets/fonts/Lato-Medium.ttf'),
      'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
      'Lato-Semibold': require('./assets/fonts/Lato-Semibold.ttf'),
      'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf'),
      'icomoon': require('./assets/fonts/icomoon.ttf'),
    }),
  ]);

  _handleLoadingError = (error) => {
    console.info(error);
  };
  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading startAsync={this._loadResourcesAsync} onError={this._handleLoadingError} onFinish={this._handleFinishLoading} />
      );
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.watermelon} />
        <RootNavigation />
        <View />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
