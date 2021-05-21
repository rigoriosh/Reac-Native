import React, { useState } from 'react'

export const Contador = () => {

    const [contador, setContador] = useState<number>(0);

    return (
        <>
            <h3>Contador <small>{contador}</small></h3>
            <button className="btn btn-primary" onClick={()=>{setContador(e => e + 1)}}>+1</button> &nbsp;
            <button className="btn btn-primary" onClick={()=>{setContador(e => e - 1)}}>-1</button>

        </>
    )
}
