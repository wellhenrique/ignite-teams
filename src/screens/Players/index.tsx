import { useState } from 'react'
import { FlatList } from 'react-native'

import { useRoute } from '@react-navigation/native'

import { RoutePlayersParams } from 'src/@types/navigation'

import { PlayersCard } from '@components/PlayersCard'
import { ButtonIcon } from '@components/ButtonIcon'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty'
import { Header } from '@components/Header'
import { Filter } from '@components/Filter'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

import { Container, Form, HeaderList, NumberOfPlayers } from './styles'

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState([])

  const route = useRoute()
  const { group } = route.params as RoutePlayersParams

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={group}
        subtitle='"Adicione a galera e separe os times'
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B', 'Time C', 'Time D']}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          keyExtractor={(item) => item}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlayersCard onRemove={() => {}} icon="person" name={item} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  )
}
