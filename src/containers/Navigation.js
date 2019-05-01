
import React from "react";
import {StyleSheet,View,Button ,Text} from 'react-native';
import { withStateHandlers, lifecycle, compose } from "recompose";
import NavigatorView from '../navigation/Navigation';

const enhance = compose(
  
  withStateHandlers(
    { 
     authState: state.auth,
     navigatorState: state.navigation,
    },
  )
);

export default enhance(NavigatorView);
