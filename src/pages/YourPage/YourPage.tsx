import { Text, View, StyleSheet } from 'react-native'
import { Theme } from '../../themes/Themes'

export function YourPage(){
    return(
        <View style={styles.mainContainer}>
            <View style={styles.destaqueContainer}>
                <Text style={styles.titleText}>Em destaque</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Theme.colors.navigationbar,
        flex: 1
    },
    destaqueContainer: {
        backgroundColor: Theme.colors.background,
        height: 380,
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    titleText: {
        color: Theme.colors.text,
        fontFamily: Theme.fonts.interBold,
        fontSize: Theme.fontSizes.title,
        marginTop: 25,
    }
})