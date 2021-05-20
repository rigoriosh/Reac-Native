import React from 'react'

export const TiposBasicos = () => {

    let nombre: string | number = 'Rigo'; // pude ser string o numero
    const edad = 40;
    const esActivo:boolean = true;
    const poderes:string[] = ['velocidad', 'respirar en el agua']

    console.log(nombre, edad, esActivo, poderes);




    return (
        <>
         <h3>tipos basicos</h3>   
         {nombre} {edad}
         <br />
         {poderes.join(', ')}
        </>
    )
}
