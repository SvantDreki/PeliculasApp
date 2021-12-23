import React, { createContext, useState } from "react";

interface ImageColors {
    primary: string,
    secondary: string
}

interface ContextProps {
    colors: ImageColors,
    prevColors: ImageColors,
    setMainColors: (colors: ImageColors) => void,
    setPrevMainColors: (colors: ImageColors) => void
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: any) => {

    const [colores, setColores] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const [prevColores, setPrevColores] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const setMainColors = ( colors: ImageColors ) => {
        setColores( colors );
    }

    const setPrevMainColors = ( colors: ImageColors ) => {
        setPrevColores( colors );
    }

    return (
        <GradientContext.Provider
            value={{
                colors: colores,
                prevColors: prevColores,
                setMainColors,
                setPrevMainColors
            }}
        >
            {children}
        </GradientContext.Provider>
    )

}