import React from 'react'
import { View, Text } from 'react-native';
import { allItem, oneItem } from '../../services/api-helper';

const ItemScreen = () => {
  const [item, setItem] = React.useState({
  })
  const [run, setRun] = React.useState({
    value: true
  })
  const getOneItem = async () => {
    const item = await oneItem();
    setItem(item)
  }
  let list = list = item.item && item.item.map((ele,i) => {
    return (
      <>
      <Text key={i}>{ele.title}</Text>
      <Text >{ele.price}</Text>
      </>
    )
  });

  const getAllItem = async () => {
    const item = await allItem();
    setItem({item:item})
  }

  React.useEffect(() => {
    if(run.value === true){
      getAllItem();
      setRun({value: false});
    }
  })
  return (
    <View>
      <Text>ITEMS GO HERE!</Text>
      <Text>{list}</Text>
    </View>
  )
}

ItemScreen.navigationOptions = ({ navigation }) => ({
  title: "Items",
});

export default ItemScreen
