import React, { useState } from 'react'
import { View, Text, Button, Modal} from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

export const ModalScreen = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <View>
            <HeaderTitle title="ModalScreen"/>
            <Button title={openModal ? 'Cerrar Modal' : 'Abrir Modal'}
                onPress={()=>setOpenModal(!openModal)}
                />

            <Modal
                animationType="fade"
                visible={openModal}
                transparent
            >
                <View style={{flex:1, /* width:200, height:200, */ backgroundColor:'rgba(0,0,0,0.3)', alignItems:'center', justifyContent:'center'}}>
                    {/* Contenido del modal */}
                     <View style={{
                         backgroundColor:'white',
                         padding:20,
                         borderRadius:10,
                         shadowOffset:{width:0, height:20},
                         shadowOpacity:0.25,
                         elevation:20
                         }}>
                        <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold'}}>Titulo del modal</Text>
                        <Text style={{textAlign:'center', margin:20}}>Cuerpo del modal</Text>
                        <Button title={'Cerrar'}
                            onPress={()=>setOpenModal(false)}
                        />
                     </View>
                </View>

            </Modal>
        </View>
    )
}
