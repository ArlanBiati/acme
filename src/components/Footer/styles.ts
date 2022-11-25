import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70px;

  background-color: ${({ theme }) => theme.colors.gray[300]};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;
