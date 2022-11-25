import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: start;

  margin-top: 100px;
`;

export const Wrapper = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
})`
  margin: 0 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
`;

export const WrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextWrapper = styled.Text`
  color: ${({ theme }) => theme.colors.red[500]};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;

export const CloseButton = styled.TouchableOpacity``;
