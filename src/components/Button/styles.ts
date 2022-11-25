import styled from 'styled-components/native';

interface ButtonContainerProps {
  color: string;
}

export const Container = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 50px;

  margin-top: 27px;

  border-radius: 24px;

  align-items: center;
  justify-content: center;

  background-color: ${({ color }) => color};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  margin-left: 10px;

  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
