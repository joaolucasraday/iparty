import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../pages/Home/Home';

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>
        </Drawer.Navigator>
    )
}