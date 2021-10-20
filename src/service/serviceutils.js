import axios from "axios"

class ServiceUtils  {
    #urlBaseCEP = 'https://viacep.com.br/ws'

    #estados = [
    {"key":"RO","label":"Rondônia"},
    {"key":"AC","label":"Acre"},
    {"key":"AM","label":"Amazonas"},
    {"key":"RR","label":"Roraima"},
    {"key":"PA","label":"Pará"},
    {"key":"AP","label":"Amapá"},
    {"key":"TO","label":"Tocantins"},
    {"key":"MA","label":"Maranhão"},
    {"key":"PI","label":"Piauí"},
    {"key":"CE","label":"Ceará"},
    {"key":"RN","label":"Rio Grande do Norte"},
    {"key":"PB","label":"Paraíba"},
    {"key":"PE","label":"Pernambuco"},
    {"key":"AL","label":"Alagoas"},
    {"key":"SE","label":"Sergipe"},
    {"key":"BA","label":"Bahia"},
    {"key":"MG","label":"Minas Gerais"},
    {"key":"ES","label":"Espírito Santo"},
    {"key":"RJ","label":"Rio de Janeiro"},
    {"key":"SP","label":"São Paulo"},
    {"key":"PR","label":"Paraná"},
    {"key":"SC","label":"Santa Catarina"},
    {"key":"RS","label":"Rio Grande do Sul"},
    {"key":"MS","label":"Mato Grosso do Sul"},
    {"key":"MT","label":"Mato Grosso"},
    {"key":"GO","label":"Goiás"},
    {"key":"DF","label":"Distrito Federal"}];

    #listEstadaCivil = [{
        key: 1,
        label: 'Solteiro'
    }, {
        key: 2,
        label: 'Casado'
    }, {
        key: 3,
        label: 'Divorciado'
    }, {
        key: 4,
        label: 'Viúvo'
    }, {
        key: 5,
        label: 'Desquitado'
    }]

    getEstados() {
        return this.#estados.sort()
    }

    getEstadoCivil() {
        return this.#listEstadaCivil
    }

    async buscarEnderecoPorCep(cep) {
        if (cep) {
            const result = await axios.get(`${this.#urlBaseCEP}/${cep}/json`)
            return result
        }
        return null        
    }
}

export default ServiceUtils