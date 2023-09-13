import {useState, createContext } from "react";
import image1 from "../assets/Panes.png";

export const OptionsContext = createContext({
   option: '',
    url:  '',
    image: image1,

});

 export const OptionProvider = ({children}) =>{

    const [option, setOption ] = useState('');
    const [url, setUrl ] = useState('');
    const [image, setImage ] = useState('')


    const cambiarOption = (option, url, image) => {
        setOption(option);
        setUrl(url);
        setImage(image)
    }



    return (
        <OptionsContext.Provider value={{option, setOption, url, image, setUrl, cambiarOption}}>
            
            {children}

        </OptionsContext.Provider>
    )
}

export default OptionContext
