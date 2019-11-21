import React, { useState, useContext, useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  return (
    <>
      <Button
        title="Go to Form"
        onPress={() => navigate('Form', { name: 'Form' })}
      />
      <Button
        title="Profile"
        onPress={() => navigate('Profile', { name: 'ProfileScreen' })}
      />
      <Button
        title="Wishlist"
        onPress={() => navigate('WishlistScreen', { name: 'WishlistScreen' })}
      />
      <Button
        title="Items"
        onPress={() => navigate('ItemScreen', { name: 'ItemScreen' })}
      />
    </>
  );
}

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: "Home",
});

export default HomeScreen;