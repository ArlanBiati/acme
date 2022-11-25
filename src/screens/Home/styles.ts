import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const Main = styled.View`
  flex: 1;
  padding: 0 30px;
  align-items: center;
`;

export const Detail = styled.Image``;

export const Logo = styled.Image`
  margin-top: 16px;
  width: 252px;
  height: 96px;
`;

export const Title = styled.Text`
  margin-top: 40px;
  text-align: center;

  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
