import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import DetalleScreen from '../screens/DetalleScreen'
import { Movie } from '../interfaces/movieInterface'

//Se tipea los parametros que van a resivir cada screen
//Home no resive nada si que se deja undefined y Detalle resive una Movie
export type RootStackParams = {
    Home: undefined,
    Detalle: Movie
}

//Le entregamos los types al stackNavigator
const Stack = createStackNavigator<RootStackParams>()

const Navegacion = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detalle" component={DetalleScreen} />
        </Stack.Navigator>
    )
}

export default Navegacion
