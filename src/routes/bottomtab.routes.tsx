import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TopTabRoutes } from './toptab.routes';
import { Search } from '../pages/Search/Search';
import { Chat } from '../pages/Chat/Chat';
import { Profile } from '../pages/Profile/Profile';
import { MaterialIcons } from '@expo/vector-icons';
import { Theme } from '../themes/Themes';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export function BottomTabRoutes() {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Theme.colors.text, 
        tabBarInactiveTintColor: 'rgba(255,255,255,0.5)', 
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: { borderRadius: 10, margin: 5 },
      }}>
      
      <Tab.Screen 
        name="HomeTab" 
        component={TopTabRoutes}
        options={{ 
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={28} color={color}/>
          ),
        }}
      />
      
      <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{ 
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={28} color={color}/>
          ),
        }}
      />
      
      <Tab.Screen 
        name="Chat" 
        component={Chat} 
        options={{ 
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="chat" size={28} color={color}/>
          ),
        }}
      />
      
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{ 
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={28} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Theme.colors.navigationbar,
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(255,255,255,0.1)',
    height: 60,      
    paddingBottom: 15, 
    paddingTop: 5,    
    elevation: 0, 
    shadowOpacity: 0,
  }
});