import React from 'react'
import { View, Text } from 'react-native'

const ItemScreen = () => {
  return (
    <View>
      <Text>ITEMS GO HERE!</Text>
    </View>
  )
}

ItemScreen.navigationOptions = ({ navigation }) => ({
  title: "Items",
});

export default ItemScreen
