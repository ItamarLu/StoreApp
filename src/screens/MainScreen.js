import React from "react"
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import HeaderContent from "../components/HeaderContent"
import Item from "../components/Item"

const MainScreen = () => {
  const {container, header, body} = styles

  return (
    <View style={container}>
      <StatusBar />
      <ScrollView>
        <View style={header}>
          <HeaderContent />
        </View>
        <View style={body}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
    gap: 10
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