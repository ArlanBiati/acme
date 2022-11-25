import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
})`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};

  height: 127px;

  border-radius: 16px;

  padding: 20px;

  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.red[500]};

  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  font-weight: ${({ theme }) => theme.fonts.bold};

  margin-bottom: 15px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.gray[500]};

  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-weight: ${({ theme }) => theme.fonts.regular};
`;
