import React from 'react'
import ImageColors from 'react-native-image-colors';

const getImageColors = async (uri: string) => {
    const colores = await ImageColors.getColors(uri, {});

    let primary;
    let secondary;

    switch (colores.platform) {
        case 'android':
          // android result properties
          primary = colores.dominant;
          secondary = colores.average;
          break
        case 'web':
          // web result properties
          primary = colores.dominant;
          secondary = colores.darkMuted;
          break
        case 'ios':
          // iOS result properties
          primary = colores.primary;
          secondary = colores.secondary;
          break
        default:
          throw new Error('Unexpected platform key')
    }
    
    return {
        primary,
        secondary
    }

}

export default getImageColors;