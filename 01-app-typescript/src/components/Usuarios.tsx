import { useUsuarios } from "../hooks/useUsuarios";
import { UsuariosList } from '../interfaces/reqResp.interface';


export const Usuarios = () => {

    const {usuarios, paginaAnterior, paginaSiguiente} = useUsuarios();

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
            <button className="btn btn-primary" onClick={paginaAnterior}>previous</button>&nbsp;
            <button className="btn btn-primary" onClick={paginaSiguiente}>next</button>
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
