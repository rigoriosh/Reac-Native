import { useRef, useState } from "react"
import { useEffect } from "react"
import { reqResApi } from "../api/reqResp"
import { ReqRespListado, UsuariosList } from '../interfaces/reqResp.interface';


export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<UsuariosList[]>([]);
    const paginaRef = useRef(1);

    useEffect(() => {
        //llamdao al API: https://reqres.in/api/users?page=2
        cargarUsuarios();
        return () => { }
    }, [])
    
    const cargarUsuarios = async() => {
        const respApi = await  reqResApi.get<ReqRespListado>('/users', {
            params:{
                page: paginaRef.current
            }
        });
        const {data} = respApi;
        if (data.data.length > 0) {
            setUsuarios(data.data)
            paginaRef.current ++;
        }else{
            alert('Fin registros')
        }
        /* reqResApi.get<ReqRespListado>('/users')
            .then(({data}) => { setUsuarios(data.data) })
            .catch( console.log ) */
    }

    const renderUsuarioItem = (usuario: UsuariosList) => (
            <tr key={usuario.id.toString()}>
                <td><img src={usuario.avatar} alt={usuario.first_name} style={{borderRadius:100, width:50}}/></td>
                <td>{usuario.email}</td>
                <td>{usuario.first_name} {usuario.last_name}</td>
            </tr>
        )
    

    return (
        <>
            <h3>Usuarios</h3>
            <button className="btn btn-primary" onClick={cargarUsuarios}>next</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Email</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    { usuarios.map(renderUsuarioItem) }
                </tbody>
            </table>
        </>
    )
}
