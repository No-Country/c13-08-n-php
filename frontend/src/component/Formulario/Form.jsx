import { useForm } from "./useForm"

export const Form = () => {
    const { formState, onInputChange, username, email, password} = useForm({
        username: "",
        apellido: "",
        email: "",
        password: ""
    })


  return (
    <>
    <form>
        <input 
        type="text"
        className="form-control"
        placeholder="Nombre"
        name="username"
        value={ username }
        onChange= { onInputChange}/>

        <input 
        type="text"
        className="form-control"
        placeholder="Apellido"
        name="apellido"
        value={ apellido }
        onChange= { onInputChange}/>

        <input 
        type="email"
        className="form-control"
        placeholder="Email"
        name="email"
        value={ email }
        onChange= { onInputChange}/>

        <input 
        type="password"
        className="form-control"
        placeholder="Password"
        name="password"
        value={ password}
        onChange= { onInputChange}/> 

        
        
      

    </form>
    
    
    
    
    
    </>
  )
}

