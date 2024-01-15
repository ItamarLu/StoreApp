import React, { useState, useEffect, useCallback } from 'react'
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import HeaderContent from '../components/HeaderContent'
import Item from '../components/Item'
import Category from '../components/Category'
import { loadItems, saveItems } from '../utilities/Storage'
import { useFocusEffect } from '@react-navigation/native'
import { itemDetails } from '../utilities/itemDetails'

const MainScreen = ({ navigation }) => {
  const { container, header, categoryViewStyles, body } = styles

  const [items, setItems] = useState({
    shirt: 0,
    backpack: 0,
    watch: 0,
    hat: 0,
    guitar: 0,
    shoes: 0,
    chair: 0,
    table: 0,
    umbrella: 0,
    ball: 0,
    sunglass: 0,
    notebook: 0
  })

  const updateMainScreenData = useCallback(async () => {
    const storedItems = await loadItems()
    setItems(storedItems)
  }, [])

  useFocusEffect(
    useCallback(() => {
      ;(async () => {
        await updateMainScreenData()
      })()
    }, [updateMainScreenData])
  )

  const handleNav = () => {
    navigation.navigate('CartScreen')
  }

  const handleAddCart = (id) => {
    setItems((prevItems) => ({
      ...prevItems,
      [id]: (prevItems[id] || 0) + 1
    }))
  }

  const itemsOnCart = Object.entries(items).filter(
    ([id, quantity]) => quantity > 0
  )

  useEffect(() => {
    saveItems(items)
  }, [items])

  return (
    <View style={container}>
      <StatusBar backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={header}>
          <HeaderContent navTo={handleNav} cartItemsNum={itemsOnCart.length} />
        </View>
        <View style={categoryViewStyles}>
          <Category />
        </View>
        <View style={body}>
          {Object.entries(itemDetails).map(([id]) => (
            <Item
              key={id}
              itemPath={itemDetails[id].imagePath}
              itemName={itemDetails[id].name}
              itemPrice={itemDetails[id].price}
              addCart={() => handleAddCart(id)}
              id={id}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  categoryViewStyles: {
    paddingBottom: 10
  },
  body: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingBottom: 10,
    gap: 8
  }
})

export default MainScreen
