import ServiceBase from "./servicebase";

class EmpresaService extends ServiceBase {
    constructor() {
        super('Company')        
    }
    
    async SearchByfilter(param) {        
       return await super.Get(`SearchByFilter?filterCompany=${param}`)
    }
}

export default EmpresaService