import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { allItem, oneItem } from '../../services/api-helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 30,
    paddingBottom: 40,
  },
  itemCard: {
    display: 'flex',
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 17,
    width: '90%',
  },
  itemContainer: {
    justifyContent: "center",
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemDesc: {
    fontStyle: 'italic',
  },
  itemPrice: {
    textAlign: 'right',
    paddingRight: 10,
  },
});

const WishlistScreen = () => {
  const [item, setItem] = React.useState({
  })
  const [run, setRun] = React.useState({
    value: true
  })
  const getOneItem = async () => {
    const item = await oneItem();
    setItem(item)
  }
  let list = list = item.item && item.item.map((ele, i) => {
    return (
      <View style={styles.itemCard} key={i}>
        <Text style={styles.itemTitle}>{ele.title}</Text>
        <Text style={styles.itemDesc}>{ele.description}</Text>
        <Text style={styles.itemPrice}>${ele.price}0</Text>
        <Button title='Add to Cart'></Button>
        <Button color='grey' title='Remove from Wishlist'></Button>
      </View>
    )
  });

  const getAllItem = async () => {
    const item = await allItem();
    setItem({ item: item })
  }

  React.useEffect(() => {
    if (run.value === true) {
      getAllItem();
      setRun({ value: false });
    }
  })
  return (
    <SafeAreaView style={styles.container}>
      <View><Text style={styles.header}>Items</Text></View>
      <ScrollView contentContainerStyle={styles.itemContainer}>
        <View>{list}</View>
      </ScrollView>
    </SafeAreaView>
  )
}

WishlistScreen.navigationOptions = ({ navigation }) => ({
  title: "Wishlist",
});

export default WishlistScreen
