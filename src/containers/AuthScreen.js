import React from "react";
import { withStateHandlers, lifecycle, compose } from "recompose";
import AuthScreen from '../screens/AuthScreen';

const enhance = compose(
  withStateHandlers(
    { 
     authState: state.auth,
     navigatorState: state.navigation,
    },
  )
);

export default enhance(AuthScreen);

