import { MaterialIcons } from '@expo/vector-icons'

import { ButtonIcon } from '@components/ButtonIcon'

import { Container, Icon, Name } from './styles'

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap
  name: string
  onRemove: () => void
}

export function PlayersCard({ name, icon, onRemove, ...props }: Props) {
  return (
    <Container {...props}>
      <Icon name={icon} />

      <Name>{name}</Name>

      <ButtonIcon onPress={onRemove} icon="close" type="SECONDARY" />
    </Container>
  )
}
