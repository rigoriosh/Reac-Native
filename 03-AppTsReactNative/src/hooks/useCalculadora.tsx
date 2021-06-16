import { useState } from "react";


interface initialState{
    resultado: string;
    resultadoAnterior: string;
    operador: string;
}

const initSt = {
    resultado: '0',
    resultadoAnterior: '0',
    operador:''
}

export const useCalculadora = () => {

    const [state, setState] = useState<initialState>(initSt);
    const {resultado, resultadoAnterior, operador} = state;


    const reset = () => { setState({...state, resultado: '0', resultadoAnterior:''}) }

    const caracterEspecialOprimido = (teclaOprimida: string) => { 
        console.log(teclaOprimida);
        if (resultadoAnterior === '') {
            setState({...state, resultadoAnterior: resultado, resultado: '0', operador: teclaOprimida});            
        } else if(teclaOprimida === '='){

            if (operador === '/') {
                setState({...state, resultado: (Number(resultadoAnterior) / Number(resultado)).toString(), resultadoAnterior: '' });            
            } else if(operador === 'X'){
                setState({...state, resultado: (Number(resultadoAnterior) * Number(resultado)).toString(), resultadoAnterior: '' });
            } else if(operador === '-'){
                setState({...state, resultado: (Number(resultadoAnterior) - Number(resultado)).toString(), resultadoAnterior: '' });
            } else if(operador === '+'){
                setState({...state, resultado: (Number(resultadoAnterior) + Number(resultado)).toString(), resultadoAnterior: '' });
            }
        
        }
     }

    const armarExpresion = (teclaOprimida: string) => { 
        console.log(teclaOprimida); 

        if((resultado.includes('.') && teclaOprimida === '.')) return; // validación no acepta dos puntos en la expresión y ceros repetidos
        console.log(7);
        if (resultado.startsWith('0') || resultado.startsWith('-0')) {
            if(teclaOprimida === '0' && (!resultado.includes('.') || !(resultado.length > 1))) return
            if (teclaOprimida === '.') {//puntos decimales
                console.log(1);
                setState({...state, resultado: resultado + teclaOprimida});
            }else if((teclaOprimida === '0' && resultado.includes('.'))){// evalua si es otro cero y hay un punto; y si es diferente de cero y no tiene un punto
                console.log(2);
                setState({...state, resultado: resultado + teclaOprimida});
            }else if(teclaOprimida !== '0' && !resultado.includes('.')){
                console.log(3);
                (resultado.includes('-')) ? setState({...state, resultado: '-'+teclaOprimida}) : setState({...state, resultado: teclaOprimida});
            }else if(teclaOprimida === '0' && !resultado.includes('.')){
                console.log(8);
                setState({...state, resultado: resultado + teclaOprimida})
            }else{
                console.log(4);
                setState({...state, resultado:  resultado + teclaOprimida})
            }


        } else {
            console.log(5);
            setState({...state, resultado: resultado + teclaOprimida})
        }

    }

    const positivoNegativo = () => {
        if (resultado.includes('-')) {
            setState({...state, resultado: resultado.replace('-', '')})
        } else {
            setState({...state, resultado: '-' + resultado})
        }
    }

    const del = () => {
        if (resultado.length == 2 && resultado.includes('-')) {
            reset()
        }else if (resultado.length > 1) {
            setState({...state, resultado: resultado.slice(0, - 1)})
        }else{
            reset();
        }
    }

    console.log(state);
    
    return {resultadoAnterior, resultado, reset, positivoNegativo, del, caracterEspecialOprimido, armarExpresion}
}
