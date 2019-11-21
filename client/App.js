import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import 'react-native-gesture-handler';
import HomeScreen from './src/Home/home';
import ProfileScreen from './src/Profile/ProfileScreen'
import WishlistScreen from './src/Wishlist/WishlistScreen'
import ItemScreen from './src/Item/ItemScreen'
import CartScreen from './src/Cart/CartScreen'

const MainNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Wishlist: { screen: WishlistScreen },
  Items: { screen: ItemScreen },
  Cart: { screen: CartScreen },

});

const App = createAppContainer(MainNavigator);

export default App;