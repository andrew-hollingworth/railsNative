import { createAppContainer } from 'react-navigation';
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
  Profile: { screen: ProfileScreen },
  Wishlist: { screen: WishlistScreen },
  Items: { screen: ItemScreen },
  Cart: { screen: CartScreen },


});

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