import { TouchableOpacityProps } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  name: string;
  onPress: () => void;
}

export function ButtonOutline({ name, onPress, ...rest }: ButtonProps) {
  return (
    <Container onPress={onPress} {...rest}>
      <Ionicons name="person-outline" size={12} />
      <Title>{name}</Title>
    </Container>
  );
}
