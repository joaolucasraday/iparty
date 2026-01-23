import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TopTabRoutes } from './toptab.routes'; // Suas abas estilo TikTok
import { Search } from '../pages/Search/Search';

const Tab = createBottomTabNavigator();

export function BottomTabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="HomeTab" 
        component={TopTabRoutes} // AQUI: A Home vira o container das Top Tabs
        options={{ title: 'Início' }}
      />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}