import React, { createContext, useState } from 'react';


export interface InterfaceImageColors{
    primary: string;
    secundary: string;
}

interface ContextProps{
    colors:InterfaceImageColors,
    previusColors:InterfaceImageColors,
    setMainColors:(colors: InterfaceImageColors) => void,
    setMainPrevColors:(colors: InterfaceImageColors) => void,
}

export const GradientContext = createContext({} as ContextProps);



export const GradientProvider = ({children}: any) => {

    const [colors, setColors] = useState<InterfaceImageColors>({ primary:'transparent', secundary: 'transparent' });
    const [previusColors, setPreviusColors] = useState<InterfaceImageColors>({ primary:'transparent', secundary: 'transparent' });

    const setMainColors = (colors: InterfaceImageColors)=>{
        setColors(colors)
    }

    const setMainPrevColors = (colors: InterfaceImageColors)=>{
        setPreviusColors(colors)
    }

    return(
        <GradientContext.Provider value={{ colors, previusColors, setMainColors, setMainPrevColors  }}>
            {children}
        </GradientContext.Provider>
    )
}
