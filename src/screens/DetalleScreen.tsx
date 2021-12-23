import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native'
import { RootStackParams } from '../navegacion/navegacion'
import Icon from 'react-native-vector-icons/Ionicons';
import useMovieDatalle from '../hooks/useMovieDatalle'
import MovieDetalle from '../components/MovieDetalle'


//coloca el height de la pantalla en una variable
const screenHeight = Dimensions.get('screen').height;

//Se le indica los types y el type Detalle
interface Props extends StackScreenProps<RootStackParams, 'Detalle'> {}

const DetalleScreen = ( { route, navigation }: Props ) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, movieFull, cast } = useMovieDatalle(movie.id);


    return (
        <ScrollView>
            <View style={{ position: 'relative' }}>
                <View style={ styles.imagenContenedor } >
                    <View style={ styles.imagenBorder } >
                        <Image 
                            source={{ uri }}
                            style={ styles.posterImagen }
                        />
                    </View>
                </View>

                <View style={ styles.marginContenedor }>
                    <Text style={ styles.subTitulo } >{ movie.original_title }</Text>
                    <Text style={ styles.titulo } >{ movie.title }</Text>
                </View>

                { isLoading ? (
                    <ActivityIndicator size={ 35 } color="grey" style={{ marginTop: 10 }} />
                ) : (
                    <MovieDetalle
                        movieFull={ movieFull! }
                        cast={ cast }
                    />
                ) }
                {/* Boton para cerrar */}

                <View style={ styles.backBoton }>
                    <TouchableOpacity
                        onPress={ () => navigation.pop() }
                    >
                        <Icon 
                            color="white"
                            name="arrow-back-outline"
                            size={ 75 } 
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imagenContenedor: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 10,
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25
    },
    imagenBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25
    },
    posterImagen: {
        flex: 1
    },
    marginContenedor: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitulo: {
        fontSize: 16,
        opacity: 0.8
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backBoton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 11 ,
        top: 30,
        left: 5
    }
});

export default DetalleScreen
