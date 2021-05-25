import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqResp";
import { ReqRespListado, UsuariosList } from "../interfaces/reqResp.interface";


export const useUsuarios = () => {
    
    const [usuarios, setUsuarios] = useState<UsuariosList[]>([]);
    const paginaRef = useRef(1);

    useEffect(() => {
        //llamdao al API: https://reqres.in/api/users?page=2
        cargarUsuarios();
        return () => { }
    }, [])
    
    const cargarUsuarios = async() => {
        console.log(paginaRef.current);
        const respApi = await  reqResApi.get<ReqRespListado>('/users', {
            params:{
                page: paginaRef.current
            }
        });
        console.log(respApi.data);
        const {data} = respApi;
        if (data.data.length > 0) {
            setUsuarios(data.data)            
        }else{
            alert('Fin registros');
            paginaRef.current = 2;
        }
        /* reqResApi.get<ReqRespListado>('/users')
            .then(({data}) => { setUsuarios(data.data) })
            .catch( console.log ) */
    }

    const paginaAnterior = () => {
        
        if (paginaRef.current > 1) {
            
            paginaRef.current --;
            cargarUsuarios();
        }
    }

    const paginaSiguiente = () => {
        
        if (paginaRef.current < 3) {
            
            paginaRef.current ++;
        }
        cargarUsuarios();
    }

    return {usuarios, paginaAnterior, paginaSiguiente}
}
