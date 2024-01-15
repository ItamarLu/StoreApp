import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from 'react-native'
import InputInfo from '../components/InputInfo'

const PayScreen = ({ navigation }) => {
  const {
    container,
    sectionContainer,
    inputContainer,
    input,
    label,
    TitleLabel,
    confirmButton,
    confirmButtonText
  } = styles

  const handleConfirm = () => {
    navigation.navigate('SentScreen', { shippingInfo })
  }

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: ''
  })

  return (
    <View style={container}>
      <StatusBar backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={sectionContainer}>
          <Text style={TitleLabel}>Payment Information</Text>
          <InputInfo
            inputContainer={inputContainer}
            label={label}
            input={input}
            labelText={'Card Number'}
            placeholder={'Enter your card number'}
            keyboardType={'numeric'}
          />
          <InputInfo
            inputContainer={inputContainer}
            label={label}
            input={input}
            labelText={'Expiry Date'}
            placeholder={'MM/YY'}
            keyboardType={'numeric'}
          />
          <InputInfo
            inputContainer={inputContainer}
            label={label}
            input={input}
            labelText={'CVV'}
            placeholder={'Enter CVV'}
            keyboardType={'numeric'}
            secureTextEntry={true}
          />
          <InputInfo
            inputContainer={inputContainer}
            label={label}
            input={input}
            labelText={'Name on Card'}
            placeholder={'Enter your name'}
            onChangeText={(text) =>
              setShippingInfo({ ...shippingInfo, name: text })
            }
          />
        </View>
        <View style={sectionContainer}>
          <Text style={TitleLabel}>Shipping Information</Text>
          <InputInfo
            inputContainer={inputContainer}
            label={label}
            input={input}
            labelText={'Shipping Address'}
            placeholder={'Enter your shipping address'}
            onChangeText={(text) =>
              setShippingInfo({ ...shippingInfo, address: text })
            }
          />
          <InputInfo
            inputContainer={inputContainer}
            label={label}
            input={input}
            labelText={'City'}
            placeholder={'Enter your city'}
            onChangeText={(text) =>
              setShippingInfo({ ...shippingInfo, city: text })
            }
          />
          <InputInfo
            inputContainer={inputContainer}
            label={label}
            input={input}
            labelText={'Postal Code'}
            placeholder={'Enter your postal code'}
            keyboardType={'numeric'}
          />
        </View>
        <TouchableOpacity style={confirmButton} onPress={handleConfirm}>
          <Text style={confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  sectionContainer: {
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5
  },
  label: {
    marginBottom: 5,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  },
  TitleLabel: {
    marginBottom: 10,
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold'
  },
  confirmButton: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    elevation: 3,
    marginBottom: 5
  },
  confirmButtonText: {
    fontWeight: '600',
    fontSize: 18
  }
})

export default PayScreen
