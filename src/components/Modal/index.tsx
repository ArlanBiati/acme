import { useState } from 'react';

import {
  Modal as ModalReactNative,
  View,
  ModalBaseProps,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Ionicons } from '@expo/vector-icons';

import theme from '@theme/theme';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import {
  Container,
  Wrapper,
  WrapperHeader,
  TextWrapper,
  CloseButton,
} from './styles';

interface ModalProps extends ModalBaseProps {
  showModal: boolean;
  handleCloseModal: () => void;
}

export function Modal({ showModal, handleCloseModal }: ModalProps) {
  const collectionKey = '@acme';

  const [user, setUser] = useState('');

  function handleCancel() {
    handleCloseModal();
  }

  async function handleSaveUser(value: string) {
    try {
      await AsyncStorage.setItem(collectionKey, value);
      setUser('');
      handleCloseModal();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possivel trocar o nome.');
    }
  }

  return (
    <View>
      <ModalReactNative
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={handleCloseModal}
      >
        <Container>
          <Wrapper>
            <WrapperHeader>
              <TextWrapper>Alterar nome do usuário</TextWrapper>
              <CloseButton onPress={handleCloseModal}>
                <Ionicons name="close" size={20} />
              </CloseButton>
            </WrapperHeader>
            <Input placeholder="Nome" value={user} onChangeText={setUser} />
            <Button
              title="Alterar"
              color={theme.colors.red[500]}
              onPress={() => handleSaveUser(user)}
            />
            <Button
              title="Cancelar"
              color={theme.colors.gray[400]}
              onPress={handleCancel}
            />
          </Wrapper>
        </Container>
      </ModalReactNative>
    </View>
  );
}
