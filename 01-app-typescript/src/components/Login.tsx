
import { useEffect, useReducer } from 'react'


type LoginPayloadAction = {
    //validando: true,
    token: string,
    username: string,
    nombre: string
}
type AuthAction = { type:  'logOut'} | { type:  'login', payload: LoginPayloadAction};

interface authStateInterface {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: authStateInterface = {
    validando: true,
    token: null,
    username:'',
    nombre: ''
}

const authReducer = (state:authStateInterface, action: AuthAction):authStateInterface => {

    switch (action.type) {
        case 'logOut':
            return {
                ...initialState,
                validando: false,
            }
        case 'login':
            return {
                ...state,
                ...action.payload,
                validando: false            
            }
        default:
            return state;
    }
    
}

export const Login = () => {

    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({type:'logOut'});
        }, 1500);
        return () => { }
    }, []);

    if (validando) {
        return(
        <>
            <h3>Login</h3>
            <div className="alert alert-info"> Validando...</div>
        </>)
    }

    const logout = () => {                
        dispatch({type:'logOut'});
    }

    const login = () => {
        dispatch(
            {
                type:'login',
                payload: {
                    nombre: 'Rigo',
                    username: 'rigoRiosH',    
                    token: 'ABC123'
                }
            }
        );
    }

    return (
        <>
            <h3>Login</h3>   
            {
                (token)
                    ?
                    <>                        
                        <div className="alert alert-success"> Autenticado como: {nombre}</div>
                        <button className="btn btn-danger" onClick={logout}>LogOut</button>
                    </>
                    : 
                    <>
                        <div className="alert alert-danger"> No autenticado...</div>
                        <button className="btn btn-primary" onClick={login}>Login</button> &nbsp;
                    </>
            }         
            
            
        </>
    )
}
