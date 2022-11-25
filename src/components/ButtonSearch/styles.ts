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
  border-top-left-radius: 23px;
  border-top-right-radius: 23px;

  background-color: ${({ theme }) => theme.colors.white};

  height: 72px;

  padding: 10px 0px;
  margin-top: 20px;
`;

export const ContainerButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text``;
