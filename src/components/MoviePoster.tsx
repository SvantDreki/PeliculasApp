import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie: Movie,
    height?: number,
    width?: number
}

const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const navegacion = useNavigation();

    return (
        <TouchableOpacity
            onPress={ () => navegacion.navigate('Detalle' as never, movie as never)}
            activeOpacity={ 0.8 }
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 15,
                paddingHorizontal: 7
            }}
        >
            <View style={ styles.imagenContenedor }>
                <Image
                    source={{ uri }}
                    style={ styles.imagen }
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imagenContenedor: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    imagen: {
        flex: 1,
        borderRadius: 18
    }
});

export default MoviePoster
