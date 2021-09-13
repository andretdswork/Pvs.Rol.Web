import { useState, useMemo, useEffect } from "react"
import LoginService from "../service/loginservice"
import LoginContext from "./login-context";
import { toast } from 'react-toastify'

const LoginProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);
    let loginService = useMemo(() => { return new LoginService() },[]);

    useEffect(() => {        
        const storedUserLoggedInformation = new LoginService().GetLoginKey() !== null
        if (storedUserLoggedInformation) {
            setIsLoggedIn(true)
            setLoggedUser(loginService.GetUserName())
        }
    }, [])

    const loginHandler = (username, password) => {        
        loginService.Login(username, password).then((response) => {
            if (response.loginOK)
            {                
              setLoggedUser(response.login)
              setIsLoggedIn(true)              
            }
            else {          
              toast.error("Usuario ou senha inválidos!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
              });    
            }
          })    
    }

    const logoutHandler = () => {
        loginService = loginService.Logout()
        setIsLoggedIn(false)
    }

    const loginContext = {
        userName: loggedUser,
        userLogged: isLoggedIn,
        Login : loginHandler,
        Logout: logoutHandler
    }

    return (
        <LoginContext.Provider value={loginContext}>
            {props.children}            
        </LoginContext.Provider>
    )
}

export default LoginProvider