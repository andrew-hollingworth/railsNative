import React from 'react'
import { View, Text } from 'react-native'

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile goes here!</Text>
    </View>
  )
}

ProfileScreen.navigationOptions = ({ navigation }) => ({
  title: "Profile",
});

export default ProfileScreen
