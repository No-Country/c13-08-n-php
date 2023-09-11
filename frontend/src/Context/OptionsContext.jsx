import {useState, createContext } from "react";


export const OptionContext = createContext({

});





const OptionProvider = ({children}) =>{

    const [option, setOption ] = useState('');
    const [url, setUrl ] = useState('');
    const [image, setImage ] = useState('')


    const cambiarOption = (option, url, image) => {
        setOption(option);
        setUrl(url);
        setImage(image)
    }



    return (
        <OptionContext.Provider value={{option, setOption, url, image, setUrl, cambiarOption}}>
            
            {children}

        </OptionContext.Provider>
    )
}

export default OptionProvider