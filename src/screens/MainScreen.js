import React, { useState, useEffect, useCallback } from 'react'
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import HeaderContent from '../components/HeaderContent'
import Item from '../components/Item'
import Category from '../components/Category'
import { loadItems, saveItems } from '../utilities/Storage'
import { useFocusEffect } from '@react-navigation/native'

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
      (async () => {
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

  const filteredItems = Object.entries(items).filter(
    ([id, quantity]) => quantity > 0
  )

  useEffect(() => {
    saveItems(items)
  }, [items])

  return (
    <View style={container}>
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={header}>
          <HeaderContent
            navTo={handleNav}
            cartItemsNum={filteredItems.length}
          />
        </View>
        <View style={categoryViewStyles}>
          <Category />
        </View>
        <View style={body}>
          <Item
            itemPath={require('../../icons/shirt.png')}
            itemName={'Black Shirt'}
            itemPrice={'34,99'}
            addCart={handleAddCart}
            id={'shirt'}
          />
          <Item
            itemPath={require('../../icons/backpack.png')}
            itemName={'Backpack'}
            itemPrice={'49,99'}
            addCart={handleAddCart}
            id={'backpack'}
          />
          <Item
            itemPath={require('../../icons/watch.png')}
            itemName={'Golden Watch'}
            itemPrice={'99,99'}
            addCart={handleAddCart}
            id={'watch'}
          />
          <Item
            itemPath={require('../../icons/strawHat.png')}
            itemName={'Straw Hat'}
            itemPrice={'9,99'}
            addCart={handleAddCart}
            id={'hat'}
          />
          <Item
            itemPath={require('../../icons/guitar.png')}
            itemName={'Electric Guitar'}
            itemPrice={'344,99'}
            addCart={handleAddCart}
            id={'guitar'}
          />
          <Item
            itemPath={require('../../icons/shoes.png')}
            itemName={'Black Shoes'}
            itemPrice={'59,99'}
            addCart={handleAddCart}
            id={'shoes'}
          />
          <Item
            itemPath={require('../../icons/chair.png')}
            itemName={'Couch Chair'}
            itemPrice={'22,99'}
            addCart={handleAddCart}
            id={'chair'}
          />
          <Item
            itemPath={require('../../icons/table.png')}
            itemName={'Tall Table'}
            itemPrice={'137,99'}
            addCart={handleAddCart}
            id={'table'}
          />
          <Item
            itemPath={require('../../icons/umbrella.png')}
            itemName={'Red Umbrella'}
            itemPrice={'17,99'}
            addCart={handleAddCart}
            id={'umbrella'}
          />
          <Item
            itemPath={require('../../icons/ball.png')}
            itemName={'Soccer Ball'}
            itemPrice={'15,99'}
            addCart={handleAddCart}
            id={'ball'}
          />
          <Item
            itemPath={require('../../icons/sunglass.png')}
            itemName={'Sunglass'}
            itemPrice={'42,99'}
            addCart={handleAddCart}
            id={'sunglass'}
          />
          <Item
            itemPath={require('../../icons/notebook.png')}
            itemName={'Notebook'}
            itemPrice={'589,99'}
            addCart={handleAddCart}
            id={'notebook'}
          />
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
