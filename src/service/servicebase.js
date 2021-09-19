import axios from "axios"

class ServiceBase {    
    #baseUrl = 'https://localhost:44309/'
    #instance = null

    constructor(){
        this.#instance = axios.create({
            baseURL: this.#baseUrl,
            timeout: 5000            
          });
    }

    async Get(url, params) {
        const response = await this.#instance.get(`${url}`, params).then((response) => {
            return response.data
        }).catch(function (error) {
            console.log(error);
          });
          return response
    }

    async Post(url, params) {
        const response = await this.#instance.post(`${url}`, params).then((response) => {
            return response.data
        }).catch(function (error) {
            console.log(error);
          });
        return response
    }
}

export default ServiceBase