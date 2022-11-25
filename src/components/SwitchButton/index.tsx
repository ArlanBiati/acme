import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

interface SwitchButtonProps extends TouchableOpacityProps {
  title: string;
  active?: boolean;
}

export function SwitchButton({ title, active, ...rest }: SwitchButtonProps) {
  return (
    <Container active={active} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
