import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`;

export const Main = styled.View`
  flex: 1;

  margin-top: 48px;

  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const MainUser = styled.View`
  flex: 1;

  padding: 0 24px;

  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const WrapperSwitch = styled.View`
  background-color: ${({ theme }) => theme.colors.red[500]};

  border-radius: 24px;

  width: 100%;
  height: 40px;

  margin-top: 39px;
  margin-bottom: 21px;
  padding: 1px 4px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
