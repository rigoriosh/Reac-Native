import React from 'react'

interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona:Persona = {
        nombre: 'rigo',
        edad: 40,
        direccion:{
            pais: 'Colombia',
            casaNo: 19202
        }
    }


    return (
        <>
            <h3>Objetos Literales</h3>            
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
