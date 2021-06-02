import { StyleSheet } from "react-native";


const areaBtn = 80;
export const stylesCalculadora = StyleSheet.create({
    fondo:{
        flex: 1,
        backgroundColor: 'black',
    },
    container:{        
        flex:1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'        
    },
    resultado:{
        color: 'white',
        fontSize: 60,
        textAlign: 'right', marginBottom: 10
    },
    resultado2:{
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 20,
        textAlign: 'right'
    },
    fila:{
        flexDirection: 'row',
        justifyContent:'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    boton:{
        height: areaBtn, width: areaBtn,        
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent:'center', 
        marginHorizontal: 10
    },
    textoBtn:{
        color:'white', fontSize: 30,
        textAlign: 'center', 
        fontWeight:'bold'
    }
});