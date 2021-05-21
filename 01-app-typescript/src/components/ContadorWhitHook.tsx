import { useCounter } from '../hooks/useCounter';

export const ContadorWhitHook = () => {

    const { valor, acumular, restar } = useCounter(10);

    return (
        <>
            <h3>ContadorWhitHook <small>{valor}</small></h3>
            <button className="btn btn-primary" onClick={()=>{acumular()}}>+1</button> &nbsp;
            <button className="btn btn-primary" onClick={()=>{restar()}}>-1</button>

        </>
    )
}
