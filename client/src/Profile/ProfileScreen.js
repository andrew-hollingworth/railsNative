import React from 'react'

import { View, Text, SafeAreaView } from 'react-native'


const ProfileScreen = (props) => {
  console.log(props)
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
