import { StyleSheet } from 'react-native';

export const colores = {
    color1: '#5856D6',
    color2: '#FF9427',
}

export const indexCss = StyleSheet.create({
    globalMargin:{
        marginHorizontal: 20
    },
    color1:{
        color: colores.color1
    },
    color2:{
        color: colores.color2
    },
    flexDirR:{
        flexDirection: 'row'
    },
    avatar:{
        width: 150,
        height: 150,
        borderRadius:100
    },
    avatarContainer:{
        marginTop: 10,        
        alignItems: 'center'
    },
    menuContainer:{
        marginVertical: 20,
        marginHorizontal:20,
        
    },
    menuItem:{
        fontSize: 20,
        
    },
    menuBtn:{
        marginVertical:5
    }
})