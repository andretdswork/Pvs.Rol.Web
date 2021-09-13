import ServiceBase from "./servicebase";

class EmpresaService {
    #service = null
    #url = '/Company'

    constructor(){
        this.#service = new ServiceBase()
    }

    async SearchByfilter(param) {        
        const response = await this.#service.Get(`${this.#url}/SearchByFilter?filterCompany=${param}`).then((response) => {
            return response
        })        
        return response
    }
}

export default EmpresaService