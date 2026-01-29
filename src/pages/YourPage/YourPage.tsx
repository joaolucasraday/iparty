import { Text, View, StyleSheet } from 'react-native'
import { Theme } from '../../themes/Themes'

export function YourPage(){
    return(
        <View style={styles.mainContainer}>
            <Text style={{color: 'white'}}>YourPage</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Theme.colors.background,
        flex: 1
    }
})