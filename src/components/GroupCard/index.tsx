import { TouchableOpacityProps } from 'react-native'

import { Container, Title, Icon } from './styles'

type Props = TouchableOpacityProps & {
  title: string
}

export function GroupCard({ title, ...args }: Props) {
  return (
    <Container {...args}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}
