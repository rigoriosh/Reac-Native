
import { useState } from 'react';

export const useCounter = (initialState: number = 0) => {
    const [valor, setContador] = useState<number>(initialState);

    const acumular = () => {
        setContador(valor + 1)
    }

    const restar = () => {
        setContador(valor - 1)
    }

    return{
        valor, acumular, restar
    }
}
