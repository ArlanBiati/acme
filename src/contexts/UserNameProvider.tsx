import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState } from 'react';

interface UserNameProviderProps {
  children: React.ReactNode;
}

const UserNameContext = createContext({});

function UserNameProvider({ children }: UserNameProviderProps) {
  const [userName, setUserName] = useState();

  const collectionKey = '@acme';

  async function getUserName(userName: string) {
    try {
      const asyncUser = await AsyncStorage.getItem(collectionKey);
      if (asyncUser !== null) {
        setUserName(asyncUser);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserNameContext.Provider
      value={{
        userName,
        getUserName,
      }}
    >
      {children}
    </UserNameContext.Provider>
  );
}

export { UserNameProvider, UserNameContext };
