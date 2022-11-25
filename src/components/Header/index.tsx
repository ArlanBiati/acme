import { useEffect, useState } from 'react';

import { Image } from 'react-native';

import { ButtonOutline } from '@components/ButtonOutline';
import { Modal } from '@components/Modal';

import AsyncStorage from '@react-native-async-storage/async-storage';

import LogoPng from '@assets/logo.png';

import { Container, Wrapper } from './styles';

interface UserProps {
  name: string;
}

export function Header() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<UserProps>();

  const collectionKey = '@acme';

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  async function getUser() {
    try {
      const asyncUser = await AsyncStorage.getItem(collectionKey);
      if (asyncUser !== null) {
        setUser(asyncUser);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <>
      <Container>
        <Wrapper>
          <Image source={LogoPng} style={{ height: 40, width: 100 }} />
          <ButtonOutline onPress={handleShowModal} name={user as UserProps} />
        </Wrapper>
      </Container>
      <Modal showModal={showModal} handleCloseModal={handleCloseModal} />
    </>
  );
}
