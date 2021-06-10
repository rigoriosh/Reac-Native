import React, { createContext, useReducer } from 'react'
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string; 
}



// documentacion del context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    changeFavoriteIcon: (iconName: string)=> void
}


// creando el contexto
export const AuthContext = createContext({} as AuthContextProps);

// componente proveedor del estado

export const authInitialState: AuthState = {isLoggedIn: false, username:undefined, favoriteIcon:undefined};

export const AuthProvider = ({children}:any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({type: 'signIn'})
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({type: 'changeFavIcon', payload: iconName});
    }

    const logOut = () => {
        dispatch({type: 'logOut'});
    }
    return (
         <AuthContext.Provider value={{
             authState,
             signIn,
             changeFavoriteIcon,
             logOut
         }}>
             {children}
         </AuthContext.Provider>
    )
}
