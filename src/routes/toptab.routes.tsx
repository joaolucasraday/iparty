import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { YourPage } from '../pages/YourPage/YourPage';
import { Friends } from '../pages/Friends/Friends';
import { StyleSheet } from 'react-native'
import { Theme } from '../themes/Themes';

const Tab = createMaterialTopTabNavigator();

export function TopTabRoutes(){
    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabel,
            tabBarIndicatorStyle: styles.tabBarIndicator,
            tabBarPressColor: 'transparent',
        }}>
            <Tab.Screen 
            name='YourPage'
            component={YourPage}
            options={{ title: 'Sua página'}}/>
            <Tab.Screen 
            name='Friends'
            component={Friends}
            options={{ title: 'Amigos' }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create ({
    tabBar: {
        backgroundColor: Theme.colors.navigationbar,
        borderBottomWidth: 0.5,
        borderBottomColor: Theme.colors.divider,
        height: 50
    },
    tabBarLabel: {
        fontFamily: Theme.fonts.interMedium,
        color: Theme.colors.text,
        fontSize: Theme.fontSizes.toptabtitle
    },
    tabBarIndicator: {
        backgroundColor: Theme.colors.primary,
        height: 3,
        borderRadius: 3,
    }
})