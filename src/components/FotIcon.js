import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../assets/fonts/selection.json';

let instance = null;

function FotIcon() {

    if (!instance) {
        instance = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');
    }
    return instance
}

export default FotIcon();