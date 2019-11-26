import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <Text>Profile goes here!</Text>
    </SafeAreaView>
  )
}

ProfileScreen.navigationOptions = ({ navigation }) => ({
  title: "Profile",
});

export default ProfileScreen
