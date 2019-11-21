import React from 'react'
import { SafeView, View, Text } from 'react-native'

const CartScreen = () => {
  return (
    <View>
      <Text>Cart goes here!</Text>
    </View>
  )
}

CartScreen.navigationOptions = ({ navigation }) => ({
  title: "Cart",
});

export default CartScreen
