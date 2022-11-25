import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { User } from '@screens/User';
import { History } from '@screens/History';
import { Repositories } from '@screens/Repositories';

type AppRoutes = {
  home: undefined;
  user: Object;
  repositories: Object;
  history: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="user" component={User} />
      <Screen name="repositories" component={Repositories} />
      <Screen name="history" component={History} />
    </Navigator>
  );
}
