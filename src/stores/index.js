import {AsyncStorage} from 'react-native';
import { withStateHandlers, compose } from "recompose";
import {AuthStore} from './AuthStore';

let authStore = new AuthStore();
export { authStore }

