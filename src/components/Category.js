import React from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Category = () => {
  const { container, categoryWrapperStyles } = styles

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={container}>
        <TouchableOpacity>
          <View style={categoryWrapperStyles}>
            <MaterialIcons name="house" size={75} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={categoryWrapperStyles}>
            <MaterialIcons name="backpack" size={75} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={categoryWrapperStyles}>
            <MaterialIcons name="auto-stories" size={75} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={categoryWrapperStyles}>
            <MaterialIcons name="beach-access" size={75} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={categoryWrapperStyles}>
            <MaterialIcons name="agriculture" size={75} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={categoryWrapperStyles}>
            <MaterialIcons name="airplanemode-on" size={75} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={categoryWrapperStyles}>
            <MaterialIcons name="attractions" size={75} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 10,
    marginVertical: 5
  },
  categoryWrapperStyles: {
    backgroundColor: 'black',
    borderRadius: 50,
    padding: 10,
    elevation: 7
  }
})

export default Category
