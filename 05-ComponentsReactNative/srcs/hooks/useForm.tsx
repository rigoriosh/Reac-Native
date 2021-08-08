import { useState } from 'react'

export const useForm = <T extends Object>(initState: T) => {

    const [formulario, setFormulario] = useState(initState);

    const handleForm = <K extends Object>(value: K, field: keyof T) => {
        setFormulario({...formulario, [field]: value})
    }

    return {
        formulario,
        handleForm
    }
}
