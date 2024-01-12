import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = 'items'

export const loadItems = async () => {
  try {
    const storedItems = await AsyncStorage.getItem(STORAGE_KEY)
    return storedItems ? JSON.parse(storedItems) : []
  } catch (error) {
    console.error('Error loading items from AsyncStorage:', error)
    return []
  }
}

export const saveItems = async (items) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch (error) {
    console.error('Error saving items to AsyncStorage:', error)
  }
}
