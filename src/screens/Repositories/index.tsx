import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app-routes';

import { api } from '@services/api';
import { UserProps } from '@screens/User';

import { Header } from '@components/Header';
import { WrapperSwitch } from '@screens/User/styles';
import { SwitchButton } from '@components/SwitchButton';
import { RepositoryCard } from '@components/RepositoryCard';
import { ButtonSearch } from '@components/ButtonSearch';
import { Footer } from '@components/Footer';

import { Container, Main, MainRepositories } from './styles';

interface RepositoriesProps {
  name: string;
  description: string;
}

export function Repositories() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const route = useRoute();
  const { user } = route.params as UserProps;

  const [repositories, setRepositorires] = useState<RepositoriesProps[]>();

  function goBack() {
    navigation.goBack();
  }

  function handleGoHome() {
    navigation.navigate('home');
  }

  async function getRepositories() {
    try {
      const response = await api.get(`/users/${user.login}/repos`);
      setRepositorires(response.data);
      console.log(repositories);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user) {
      getRepositories();
    }
  }, []);

  return (
    <Container>
      <Header />

      <Main>
        <MainRepositories>
          <WrapperSwitch>
            <SwitchButton title="Usuário" onPress={goBack} />
            <SwitchButton title="Repositórios" active={true} />
          </WrapperSwitch>
          <FlatList
            data={repositories?.slice(0, 10)}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <RepositoryCard
                title={item.name}
                description={item.description}
              />
            )}
            contentContainerStyle={{ paddingBottom: 20, paddingTop: 5 }}
            showsVerticalScrollIndicator={false}
          />
        </MainRepositories>
        <ButtonSearch onPress={handleGoHome} />
      </Main>

      <Footer />
    </Container>
  );
}
