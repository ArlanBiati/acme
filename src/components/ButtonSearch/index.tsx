import { Ionicons } from '@expo/vector-icons';

import theme from '@theme/theme';

import { Container, ContainerButton, Title } from './styles';

interface ButtonSearchProps {
  onPress: () => void;
}

export function ButtonSearch({ onPress }: ButtonSearchProps) {
  return (
    <Container>
      <ContainerButton onPress={onPress}>
        <Ionicons name="search" size={30} color={theme.colors.red[500]} />
        <Title>Consultar</Title>
      </ContainerButton>
    </Container>
  );
}
