import { Routes } from './routes';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_700Bold, Inter_900Black, Inter_500Medium } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Theme } from './themes/Themes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

export function App() {

    const [loaded, error] = useFonts({
    InterRegular: Inter_400Regular,
    InterBold: Inter_700Bold,
    InterMedium: Inter_500Medium,
    InterBlack: Inter_900Black 
  });

  useEffect(() => {
    if(loaded || error) {
      SplashScreen.hide()
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return(
    <SafeAreaView style={{flex:1, backgroundColor: Theme.colors.navigationbar}}>
        <StatusBar style='light'/>
        <Routes /> 
    </SafeAreaView>
  );
}