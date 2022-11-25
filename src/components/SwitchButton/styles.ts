import styled from 'styled-components/native';

interface SwitchProps {
  active?: boolean;
}

export const Container = styled.TouchableOpacity<SwitchProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.red[500]};

  padding: 8px 28px;

  border-radius: 25px;
`;

export const Title = styled.Text<SwitchProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;
