import ServiceBase from "./servicebase";

class ProlaboreService extends ServiceBase{

    constructor(){
        super('Prolabore')
    }

    async Create(params) {
        const response = await super.Post(`Create`,params)
        return response
    }
}

export default ProlaboreService