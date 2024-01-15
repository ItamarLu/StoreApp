import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const NextScreen = ({ route }) => {
  const { shippingInfo } = route.params
  const navigation = useNavigation()

  const {
    container,
    thankYouText,
    shippingInfoText,
    addressText,
    goBackButton,
    goBackButtonText
  } = styles

  const handleGoBack = () => {
    navigation.navigate('MainScreen')
  }

  return (
    <View style={container}>
      <Text style={thankYouText}>
        Thank you, {shippingInfo.name}, for your order!
      </Text>
      <Text style={shippingInfoText}>
        It will be shipped to {shippingInfo.city} at the following address:
      </Text>
      <Text style={addressText}>{shippingInfo.address}</Text>
      <TouchableOpacity style={goBackButton} onPress={handleGoBack}>
        <Text style={goBackButtonText}>Go Back to MainScreen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thankYouText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  shippingInfoText: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center'
  },
  addressText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },
  goBackButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    elevation: 3
  },
  goBackButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center'
  }
})

export default NextScreen
