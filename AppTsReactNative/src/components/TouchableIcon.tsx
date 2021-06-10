import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colores } from '../styles';
import { indexCss } from '../styles/index';

interface Props {
    nombreIcon: string;
    sizeIcon: number;
    colorIcon: string;
    accion: (nameIcon:string)=>void;
}

export const TouchableIcon = ({ nombreIcon, sizeIcon, colorIcon, accion }:Props) => {

    
    const {changeFavoriteIcon} = useContext(AuthContext);

    const btnOprimido = (nombreIcon: string) => {
        changeFavoriteIcon(nombreIcon);
        accion(nombreIcon);
    }

    return (
        
        <TouchableOpacity style={{marginHorizontal: 2}} onPress={()=>btnOprimido(nombreIcon)}>
            <Icon name={nombreIcon} size={sizeIcon} color={colorIcon} />
        </TouchableOpacity>
    )
}
