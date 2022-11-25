import { ScrollView } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app-routes';

import { ButtonSearch } from '@components/ButtonSearch';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { SwitchButton } from '@components/SwitchButton';
import { UserCard } from '@components/UserCard';

import { Container, Main, MainUser, WrapperSwitch } from './styles';

export interface UserProps {
  user: {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    followers: number;
    following: number;
    location: string;
    company: string;
    blog: string;
    twitter_username: string;
  };
}

export function User() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const route = useRoute();
  const { user } = route.params as UserProps;

  function goBack() {
    navigation.goBack();
  }

  function handleGoRepositories() {
    navigation.navigate('repositories', { user });
  }

  return (
    <Container>
      <Header />

      <Main>
        <MainUser>
          <WrapperSwitch>
            <SwitchButton title="Usuário" active={true} />
            <SwitchButton title="Repositórios" onPress={handleGoRepositories} />
          </WrapperSwitch>

          <ScrollView
            contentContainerStyle={{ paddingBottom: 20, paddingTop: 5 }}
            showsVerticalScrollIndicator={false}
          >
            <UserCard />
          </ScrollView>
        </MainUser>
        <ButtonSearch onPress={goBack} />
      </Main>

      <Footer />
    </Container>
  );
}
