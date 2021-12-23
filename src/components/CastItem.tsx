import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interfaces/creditsInterface'

interface Props {
    actor: Cast
}

const CastItem = ( { actor} : Props ) => {

    const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`

    return (
        <View style={ styles.actorConteiner }>
            {
                actor.profile_path && (
                    <Image 
                        source={{ uri }}
                        style={ styles.actorImage }
                    />
                )
            }
            
            
            <View style={ styles.actorInfo }>
                <Text style={ styles.nombreActor }>
                    { actor.name }
                </Text>
                <Text style={{}}>
                    { actor.character }
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    actorConteiner: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        marginHorizontal: 20,
        paddingRight: 15,
        height: 50
    },
    actorImage: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    nombreActor: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    actorCaracter: {
        fontSize: 16,
        opacity: 0.7
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4
    }
});

export default CastItem
