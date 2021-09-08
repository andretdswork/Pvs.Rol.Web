import { useEffect, useState } from 'react';
import Home from './components/home/home';
import Login from './components/login/login'
import LoginService from './service/loginservice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  let loginService = new LoginService();

  useEffect(() => {    
    const storedUserLoggedInformation = new LoginService().GetLoginKey() !== null
    if (storedUserLoggedInformation)
      setIsLoggedIn(true)    
  }, [])

  const logginHandler = (login, password) => {      
      loginService.Login(login, password).then((response) => {
        if (response.logged)
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

  return (
    <div className="App">
      {
        !isLoggedIn && <Login onLogin={logginHandler} ></Login>
      }
      {
        isLoggedIn && <Home onLogout={logoutHandler} userName={loggedUser}></Home>
      }
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
