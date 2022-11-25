import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app-routes';

import { Header } from '@components/Header';
import { ButtonSearch } from '@components/ButtonSearch';
import { Footer } from '@components/Footer';

import { Container, Main, MainHistory } from './styles';

export function History() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function goBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header />

      <Main>
        <MainHistory></MainHistory>
        <ButtonSearch onPress={goBack} />
      </Main>

      <Footer />
    </Container>
  );
}
