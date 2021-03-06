import React from "react";
import { Platform } from "react-native";
import { Icon } from "react-native-elements";
import {
    createBottomTabNavigator,
    createDrawerNavigator, createStackNavigator,
    NavigationScreenProps, NavigationTransitionProps,
    StackViewTransitionConfigs, TabScene, TransitionConfig
} from "react-navigation";
import { MeScreen, ParcelScreen,ShippingScreen } from '../screens';


const IOS_MODAL_ROUTES = ["OptionsScreen"];

let dynamicModalTransition = (
    transitionProps: NavigationTransitionProps,
    prevTransitionProps: NavigationTransitionProps
): TransitionConfig => {
    return StackViewTransitionConfigs.defaultTransitionConfig(
        transitionProps,
        prevTransitionProps,
        IOS_MODAL_ROUTES.some(
            screenName =>
                screenName === transitionProps.scene.route.routeName ||
                (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
        )
    );
};


const ParcelStack = createStackNavigator({ ParcelScreen });

ParcelStack.navigationOptions = ({ navigation }: NavigationScreenProps) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    let drawerLockMode = "unlocked";
    if (navigation.state.index > 0) {
        drawerLockMode = "locked-closed";
    }
    return {
        tabBarLabel: "Parcel",
        tabBarIcon: ({ tintColor }: TabScene) => (<Icon name="ios-home" type="ionicon" color={tintColor} />),
        tabBarVisible,
        drawerLockMode,
        drawerLabel: "Parcel",
        drawerIcon: ({ tintColor }: TabScene) => (<Icon name="md-home" type="ionicon" color={tintColor} />)
    };
};


const ShippingStack = createStackNavigator({ ShippingScreen });
ShippingStack.navigationOptions = {
    tabBarLabel: "Shipping",
    tabBarIcon: ({ tintColor }: TabScene) => {
        let iconName = Platform.select({ ios: "ios-boat", android: "md-boat" });
        return <Icon name={iconName}   type="ionicon" color={tintColor} />;
    },
    drawerLabel: "Shipping",
    drawerIcon: ({ tintColor }: TabScene) => <Icon name="md-boat" type="ionicon" color={tintColor} />
};



const MeStack = createStackNavigator({ MeScreen });
MeStack.navigationOptions = {
    tabBarLabel: "Me",
    tabBarIcon: ({ tintColor }: TabScene) => {
        let iconName = Platform.select({ ios: "ios-person", android: "md-person" });
        return <Icon name={iconName} type="ionicon" color={tintColor} />;
    },
    drawerLabel: "Me",
    drawerIcon: ({ tintColor }: TabScene) => <Icon name="md-cog" type="ionicon" color={tintColor} />
};

export default createBottomTabNavigator({ ParcelStack,ShippingStack,MeStack });


