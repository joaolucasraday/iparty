import { NavigationContainer } from '@react-navigation/native';
import { BottomTabRoutes } from './bottomtab.routes';
import { TopTabRoutes } from './toptab.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <BottomTabRoutes />
    </NavigationContainer>
  );
}