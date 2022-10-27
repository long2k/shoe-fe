import React from 'react'
import { useRouter } from 'next/router'

// define authen context
type authContextType = {
    user: boolean;
    login: ()=> void;
    logout: ()=> void;
}

const authContextDefault: authContextType ={
    user: false,
    login: ()=>{},
    logout: ()=>{}
}

const AuthContext = React.createContext<authContextType>(authContextDefault)

const { Provider } = AuthContext

const AutProvider = ({children : React.Children}){

}