import React from 'react';
import { createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import 'react-native-gesture-handler';
import HomeScreen from './src/Home/Home';
import ProfileScreen from './src/Profile/ProfileScreen'
import WishlistScreen from './src/Wishlist/WishlistScreen'
import ItemScreen from './src/Item/ItemScreen'
import CartScreen from './src/Cart/CartScreen'
import { SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import { loginShopper, oneItem, registerShopper } from './services/api-helper';


const MainNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Items: { screen: ItemScreen },
  Wishlist: { screen: WishlistScreen },
  Profile: { screen: ProfileScreen },
  Cart: { screen: CartScreen },
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person`;
        } else if (routeName === 'Wishlist') {
          iconName = `ios-gift`;
        } else if (routeName === 'Items') {
          iconName = `ios-list`;
        } else if (routeName === 'Cart') {
          iconName = `ios-cart`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    // tabBarOptions: {
    //   activeTintColor: 'tomato',
    //   inactiveTintColor: 'gray',
    // },
  }
);

const AppContainer = createAppContainer(MainNavigator);

class App extends React.Component{
  constructor(props){
    super(props)
    state = {
      shopper : '',
      number : 4
    }
  }

  render(){
    return(
      <AppContainer screenProps={{cats : 'eloise', shopper : state.shopper, loginShopper: loginShopper, registerShopper: registerShopper}}/>
    )
  }
}

export default App;