import axios from "axios"

class ServiceBase {    
    #baseUrl = 'https://localhost:44309/'
    #instance = null
    #url = ''

    constructor(url){
        this.#instance = axios.create({
            baseURL: this.#baseUrl,
            timeout: 5000
          });
          this.#url = url
    }

    async Get(action, params) {    
        const response = await this.#instance.get(`${this.#url}/${action}`, params)
        return response.data
    }

    async Post(action, params) {
        const response = await this.#instance.post(`${this.#url}/${action}`, params)
        return response.data
    }
}

export default ServiceBase