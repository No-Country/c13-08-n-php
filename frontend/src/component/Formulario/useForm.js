import { useState } from "react";

export const useForm = ( initialForm = () => {
    const [ formState, setFormState ] = useState ( initialForm);

    const onInputChange = ({target}) => {
        const { name,apellido, email, password, value} = target;
        setFormState({
            ...formState,
            [ name ] : value,
            [ apellido ] : value,
            [ email ] : value,
            [ password ] : value
        });
        
    
    
    
    }

    return {
        ...formState,
        formState,
        onInputChange,
    }
})