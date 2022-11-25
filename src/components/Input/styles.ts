import styled from 'styled-components/native';

export const Container = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 4px;

  width: 100%;
  height: 48px;

  margin-top: 40px;

  flex-direction: row;
  align-items: center;

  padding: 0 10px;
`;

export const TextInput = styled.TextInput`
  margin-left: 10px;
`;
