import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../pages/Home/Home';
import { Search } from '../pages/Search/Search';
import { Chat } from '../pages/Chat/Chat';
import { Profile } from '../pages/Profile/Profile';

const Tab = createBottomTabNavigator();

export function TabRoutes(){
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Search' component={Search}/>
            <Tab.Screen name='Chat' component={Chat}/>
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
    )
}