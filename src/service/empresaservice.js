import ServiceBase from "./servicebase";

class EmpresaService {
    #service = null
    #url = '/Company'

    constructor(){
        this.#service = new ServiceBase()
    }
    
    async SearchByfilter(param) {        
       return await this.#service.Get(`${this.#url}/SearchByFilter?filterCompany=${param}`)
    }
}

export default EmpresaService