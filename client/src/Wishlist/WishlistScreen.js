import React from 'react'
import { View, Text } from 'react-native'

const WishlistScreen = () => {
  return (
    <View>
      <Text>Wishlists go here!</Text>
    </View>
  )
}

WishlistScreen.navigationOptions = ({ navigation }) => ({
  title: "Wishlist",
});

export default WishlistScreen
