import { useState } from 'react'
import { FlatList } from 'react-native'

import { PlayersCard } from '@components/PlayersCard'
import { ButtonIcon } from '@components/ButtonIcon'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty'
import { Header } from '@components/Header'
import { Filter } from '@components/Filter'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles'

export default function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState([])

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
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

        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
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
