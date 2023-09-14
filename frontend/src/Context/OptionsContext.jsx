import {useState, createContext} from "react";


export const OptionContext = createContext({
   option: '',
    url:  '',
    image: '',

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
        <OptionContext.Consumer value={{option, setOption, url, image, setUrl, cambiarOption}}>
            
            {children}

        </OptionContext.Consumer>
    )
}

export default OptionContext
