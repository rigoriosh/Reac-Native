import { StyleSheet } from 'react-native';

export const colores = {
    color1: '#5856D6',
    color2: '#FF9427',
    color3: '#084F6A'
}

export const indexCss = StyleSheet.create({
    container:{        
        flex:1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'        
    },
    globalMargin:{
        marginHorizontal: 20
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 5
    },
    title2:{
        fontSize: 20,
        //fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginVertical: 5
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
        marginVertical:5,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        
    }
})