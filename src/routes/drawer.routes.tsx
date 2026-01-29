import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../pages/Home/Home';
import { BottomTabRoutes } from './bottomtab.routes';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Theme } from '../themes/Themes';
import { MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
    return(
        <Drawer.Navigator
        screenOptions={({ navigation }) => ({
        headerShown: true,
        headerTitle: 'iParty',
        headerTitleAlign: 'center',
        headerLeft: () => (
            <TouchableOpacity 
            onPress={() => navigation.openDrawer()}
            style={styles.headerButtonLeft}
            >
                <MaterialIcons
                name="menu"
                 size={28}
                color={Theme.colors.text}/>
            </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
          style={styles.headerButtonRight}>
            <MaterialIcons
            name="notifications"
            size={28}
            color={Theme.colors.text}/>
          </TouchableOpacity>
        ),
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle
      })}>
            <Drawer.Screen name="App" component={BottomTabRoutes} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Theme.colors.navigationbar,
        elevation: 0,
        shadowOpacity: 0,
    },
    headerTitle: {
        color: Theme.colors.text,
        fontSize: Theme.fontSizes.ipartytitle,
        fontFamily: Theme.fonts.interBlack
    },
    headerButtonLeft: {
        marginLeft: 10
    },
    headerButtonRight: {
        marginRight: 10
    }
})