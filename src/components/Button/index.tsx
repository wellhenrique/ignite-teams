import { TouchableOpacityProps } from 'react-native'
import { Container, Title, ButtonTypeStyleProps } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'PRIMARY', ...props }: Props) {
  return (
    <Container type={type} {...props}>
      <Title>{title}</Title>
    </Container>
  )
}
