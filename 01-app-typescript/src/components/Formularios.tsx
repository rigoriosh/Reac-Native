import React from 'react'
import { useForm } from '../hooks/useForm'

export const Formularios = () => {

    
    const { formulario, onChange } = useForm({email: 'teste@tes.com', password: '12345'});
    
    return (
        <>
          <h3>Formularios</h3>  
          <input value={formulario.email} onChange={({target})=> onChange(target.value, 'email')} type="text" placeholder="email" className="form-control"/>
          <input onChange={({target})=> onChange(target.value, 'password')} type="text" placeholder="password" className="form-control mb-2 mt-2"/>

          <code>
              <pre>{JSON.stringify(formulario, null, 2)}</pre>
          </code>
        </>
    )
}
