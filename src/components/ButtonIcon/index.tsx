import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Icon, ButtonIconStyleProps } from './styles'

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconStyleProps
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...props }: Props) {
  return (
    <Container {...props}>
      <Icon name={icon} type={type} />
    </Container>
  )
}
