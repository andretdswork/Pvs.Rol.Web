import ServiceBase from "./servicebase";

class ProlaboreService {

    #service = null
    #url = 'Prolabore'    

    constructor(){
        this.#service = new ServiceBase()
    }

    async Create(params) {
        const response = await this.#service.Post(`${this.#url}/Create`,params)
        return response
    }
}

export default ProlaboreService