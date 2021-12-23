import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navegacion from './src/navegacion/navegacion';
import FadeScreen from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({children}: any) => {

  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  return (

    <NavigationContainer>
      <AppState>
        {/*<FadeScreen />*/}
        <Navegacion />
      </AppState>
      
    </NavigationContainer>
  )
}

export default App

