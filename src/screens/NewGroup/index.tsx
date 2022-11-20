import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

import { groupCreate } from '@storage/group'
import { AppError } from '@utils/AppError'

import { Container, Content, Icon } from './styles'

export function NewGroup() {
  const [group, setGroup] = useState('')
  
  const navigation = useNavigation()

  async function handleNewGroup() {
    try {
      if(group.length === 0)
        return Alert.alert('Novo Grupo', 'informe o nome da turma.')

      await groupCreate(group);
      navigation.navigate('players', { group: group })
      
    } catch(error) {
      if(error instanceof AppError) 
        Alert.alert('Novo Grupo', error.message)
      else Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.')
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da Turma" onChangeText={(group) => setGroup(group.trim())} />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  )
}
