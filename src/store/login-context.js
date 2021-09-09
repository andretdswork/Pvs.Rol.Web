import React from 'react'

const LoginContext = React.createContext({
    userName: '',
    userLogged: false,
    Login : (username, password) => {},
    Logout: _ => {}
})

export default LoginContext