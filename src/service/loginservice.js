import CriptoService from "./criptoservice"
import axios from "axios"

class LoginService {
    #IS_LOGGEDIN = 'isLoggedIn'
    #url = 'https://localhost:44309/user/login/'
    #login = ''
    #password = ''
    #loginKey = ''

    Login(login, password) {
        this.#login = login
        this.#password = new CriptoService(password).CriptografarSha512()

        let url = `${this.#url}?login=${this.#login}&password=${this.#password}`
        const response = axios.get(url).then((response) => {
            const data = response.data            
            if (data.loginOK){
                this.SetLoginKey(`${data.login}${Math.random()}`)
                localStorage.setItem(this.#IS_LOGGEDIN,this.#loginKey)
                localStorage.setItem('username',data.login)
            }
            return data
        })
        return response
    }

    Logout() {
        localStorage.removeItem(this.#IS_LOGGEDIN)
        localStorage.removeItem('username')
    }

    SetLoginKey(phrase) {
         this.#loginKey = new CriptoService(phrase).CriptografarSha512()
    }

    GetLoginKey(){
        return localStorage.getItem(this.#IS_LOGGEDIN)
    }

    GetUserName(){
        return localStorage.getItem('username')
    }
}

export default LoginService