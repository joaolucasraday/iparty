import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TopTabRoutes } from './toptab.routes';
import { Search } from '../pages/Search/Search';
import { Chat } from '../pages/Chat/Chat';
import { Profile } from '../pages/Profile/Profile';

const Tab = createBottomTabNavigator();

export function BottomTabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="HomeTab" 
        component={TopTabRoutes}
        options={{ title: 'Início' }}
      />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}