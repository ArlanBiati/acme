import { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app-routes';

import { api } from '@services/api';

import theme from '@theme/theme';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Footer } from '@components/Footer';

import DetailPng from '@assets/detail.png';
import LogoPng from '@assets/logo.png';

import { Container, Main, Detail, Logo, Title } from './styles';

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const [userInput, setUserInput] = useState('');
  const [user, setUser] = useState({});

  async function getUserGithub() {
    try {
      const response = await api.get(`/users/${userInput}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearch() {
    navigation.navigate('user', { user });
    setUserInput('');
  }

  function handleGoHistory() {
    navigation.navigate('history');
  }

  useEffect(() => {
    if (userInput) {
      getUserGithub();
    }
  }, [getUserGithub]);

  return (
    <Container>
      <Header />
      <Main>
        <Detail source={DetailPng} />
        <Logo source={LogoPng} />
        <Title>Buscador de usuários{'\n'}GitHub</Title>
        <Input
          placeholder="Usuário"
          value={userInput}
          onChangeText={setUserInput}
        />
        <Button
          title="Buscar"
          color={theme.colors.red[500]}
          onPress={handleSearch}
          disabled={!userInput}
        />
        <Button
          title="Histórico"
          color={theme.colors.gray[400]}
          onPress={handleGoHistory}
        />
      </Main>
      <Footer />
    </Container>
  );
}
