import { useContext } from 'react'
import Home from './components/home/home';
import Login from './components/login/login'
import MainNavBar from './components/home/main-nav-bar'
import { ToastContainer } from 'react-toastify'
import LoginContext from './store/login-context'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

function App() {  
  const loginCtx = useContext(LoginContext)
  return (
      <div className="App">
        {
          !loginCtx.userLogged && <Login></Login>
        }
        {
          loginCtx.userLogged && <>
            <MainNavBar title='Pvs Rol'></MainNavBar>
            <Home></Home>
          </>
        }
        <ToastContainer autoClose={3000} />
      </div>
  );
}

export default App;
