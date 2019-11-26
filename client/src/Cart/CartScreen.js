import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

const CartScreen = () => {
  return (
    <SafeAreaView>
      <Text>Cart goes here!</Text>
    </SafeAreaView>
  )
}

CartScreen.navigationOptions = ({ navigation }) => ({
  title: "Cart",
});

export default CartScreen
