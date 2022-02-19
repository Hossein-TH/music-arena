import {createContext} from 'react'


const AppContextDefault = {
    theme: "light"
};

const AppContext = createContext();



export {AppContext,AppContextDefault}