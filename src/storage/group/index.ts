import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION } from '@storage/store.config'
import { AppError } from '@utils/AppError'

export async function groupCreate(newGroupName: string) {
  try {
    const storagedGroups = await groupsGetAll()

    const groupAlreadyExists = storagedGroups.includes(newGroupName)

    if(groupAlreadyExists)
      throw new AppError('Já existe um grupo cadastrado com esse nome.')

    const storage: string = JSON.stringify([...storagedGroups, newGroupName])
    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}

export async function groupsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION)
    const groups: string [] = storage ? JSON.parse(storage) : ''

    return groups
  } catch (error) {
    throw error
  }
}
