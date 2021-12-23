import React, { useContext, useEffect } from 'react'
import Carousel from 'react-native-snap-carousel'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies'
import HorizontalSlider from '../components/HorizontalSlider';
import GradientFondo from '../components/GradientFondo';
import getImageColors from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const { width: screenWidth } = Dimensions.get('screen') //cuando no se coloca el valor en {} se esta renombrando

const HomeScreen = () => {

    const { setMainColors, setPrevMainColors } = useContext(GradientContext)
    const { nowPlaying, popular, topRated, upcoming, loading } = useMovies();

    const { top } = useSafeAreaInsets();

    const getPosterColors = async ( index: number ) => {
        const movie = nowPlaying[ index ];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const { primary = 'green', secondary = 'orange' } = await getImageColors(uri);

        setMainColors( {primary, secondary} );
    }

    useEffect(() => {
        if( nowPlaying.length > 0 ) {
            getPosterColors(0);
        }
    }, [ nowPlaying ])

    if( loading ) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color='red' size={ 40 } />
            </View>
        )
    }

    return (

        <GradientFondo>
            <ScrollView>
                <View style={{ marginTop: top + 20 }} >
                    <View style={{ height: 440 }}>
                        <Carousel 
                            data={ nowPlaying }
                            renderItem={ ({ item }) => <MoviePoster movie={ item }/> }
                            sliderWidth={ screenWidth }
                            itemWidth={ 300 }
                            inactiveSlideOpacity={ 0.9 }
                            onSnapToItem={ index => getPosterColors( index ) }
                        />
                    </View>

                    <HorizontalSlider title="Populares" movies={ popular } />

                    <HorizontalSlider title="Mejor Rankeadas" movies={ topRated } />

                    <HorizontalSlider title="Proximas en LLegar" movies={ upcoming } />

                </View>
            </ScrollView>
        </GradientFondo>
    )
}

export default HomeScreen
