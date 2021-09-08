import CryptoJs from 'crypto-js'

class CriptoService {
    #phraseSHA512 = ''
    #secretKey = "1324567890ABGTYR1324567890ABGTYR"
    #publicKey = "ASLDJFLKJH82R2IFNO23NFKL2NF20FNFKLSDFN82&*(019329321-"
    #fraseParaCriptografia = ''
    #fraseCriptografada = ''

    constructor(phrase){
        this.#phraseSHA512 = phrase
        this.#fraseParaCriptografia = phrase
    }

    CriptografarAES() {
        this.#fraseCriptografada = CryptoJs.AES.encrypt(this.#fraseParaCriptografia,this.#secretKey, this.#publicKey).toString()
        return this.#fraseCriptografada
    }

    Descriptografar() {        
        var bytes = CryptoJs.AES.decrypt(this.#fraseCriptografada,this.#secretKey )
        var originalText = bytes.toString(CryptoJs.enc.Utf8)
        return originalText
    }   

    CriptografarSha512() {
        return CryptoJs.SHA512(this.#phraseSHA512).toString()
    }
}

export default CriptoService