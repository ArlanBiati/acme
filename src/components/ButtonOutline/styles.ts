import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: 'black';
  margin-left: 10px;

  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: italic;
`;
