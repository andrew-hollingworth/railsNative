import React, { useState, useContext, useEffect } from 'react'
import { Button, Text, SafeAreaView } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView>
      <Text>WELCOME TO THE HOMEPAGE</Text>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: "Home",
});

export default HomeScreen;