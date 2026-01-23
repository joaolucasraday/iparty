import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { YourPage } from '../pages/YourPage/YourPage';
import { Friends } from '../pages/Friends/Friends';

const Tab = createMaterialTopTabNavigator();

export function TopTabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='YourPage' component={YourPage}/>
            <Tab.Screen name='Friends' component={Friends}/>
        </Tab.Navigator>
    )
}