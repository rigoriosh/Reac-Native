import { authTipos } from '../helpers/tipos';
import { authInitialState, AuthState } from "./AuthContext";


export const authReducer = (state:AuthState, action:authTipos ):AuthState => {
    
    switch (action.type) {
        case 'signIn':
            return{
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case 'changeFavIcon':
            return{ ...state, favoriteIcon: action.payload }

        case 'logOut':
            return authInitialState;

        default:
            return state;
    }
}
