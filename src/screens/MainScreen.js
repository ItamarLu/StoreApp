import React from 'react'
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import HeaderContent from '../components/HeaderContent'
import Item from '../components/Item'
import Category from '../components/Category'

const MainScreen = ({ navigation }) => {
  const { container, header, categoryViewStyles, body } = styles

  const handleNav = () => {
    navigation.navigate('CartScreen')
  }

  return (
    <View style={container}>
      <StatusBar />
      <ScrollView>
        <View style={header}>
          <HeaderContent navTo={handleNav} />
        </View>
        <View style={categoryViewStyles}>
          <Category />
        </View>
        <View style={body}>
          <Item itemPath={require('../../icons/shirt.png')} />
          <Item itemPath={require('../../icons/shirt.png')} />
          <Item itemPath={require('../../icons/shirt.png')} />
          <Item itemPath={require('../../icons/shirt.png')} />
          <Item itemPath={require('../../icons/shirt.png')} />
          <Item itemPath={require('../../icons/shirt.png')} />
          <Item itemPath={require('../../icons/shirt.png')} />
          <Item itemPath={require('../../icons/shirt.png')} />
          <Item itemPath={require('../../icons/shirt.png')} />
          <Item itemPath={require('../../icons/shirt.png')} />
          <Item itemPath={require('../../icons/shirt.png')} />
          <Item itemPath={require('../../icons/shirt.png')} />
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
