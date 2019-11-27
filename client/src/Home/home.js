import React, { useState, useContext, useEffect } from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import SafeAreaView from 'react-native-safe-area-view';


const HomeScreen = (props) => {
  const { navigate } = props.navigation;

  const shopper = (data) => {
       const shopper = props.screenProps.loginShopper(data)
       props.screenProps.shopper = shopper
  }

  console.log('home',props)
  return (
    <>
      <SafeAreaView>
      <Text>
      {props.screenProps.cats} Hello
      </Text>
      </SafeAreaView>


    </>
  );
}

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: "Home",
});

export default HomeScreen;