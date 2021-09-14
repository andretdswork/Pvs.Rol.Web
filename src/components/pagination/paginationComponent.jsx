import { useEffect, useState } from "react"
import { Button, ButtonGroup, Row, Col } from "react-bootstrap"

const PaginationComponent = (props) => {
    const lista = props.items
    const [itensPorPagina, setItensPorPagina] = useState()    
    const [paginaAtual, setPaginaAtual] = useState(1)
    /*
        itens por ppagina
        numero de paginas = Math.ceil(totalItems / 10)
        total de registros
    */    

        useEffect(() => {
            setItensPorPagina(10)            
        },[lista])

    const onPrevHandler = () => {        
        setPaginaAtual(paginaAtual - 1)
        props.handlerPage(lista.slice((itensPorPagina - 10) *  paginaAtual ,(itensPorPagina * paginaAtual) - 10))
    }

    const onNextHandler = () => {
        setPaginaAtual(paginaAtual + 1)
        //console.log(itensPorPagina * paginaAtual , (itensPorPagina * paginaAtual) + 10)
        console.log(lista.slice(itensPorPagina * paginaAtual ,(itensPorPagina * paginaAtual) + 10))
        props.handlerPage(lista.slice(itensPorPagina * paginaAtual ,(itensPorPagina * paginaAtual) + 10))        
    }

    return (
        <>
            <Row>
                <span>{paginaAtual} de {props.numeroPaginas}</span>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={3} >
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="outline-info" disabled={paginaAtual === 1} onClick={onPrevHandler} >Anterior</Button>
                        {
                             <Button variant="outline-info" disabled={paginaAtual === props.numeroPaginas}  onClick={onNextHandler}>Próximo</Button>
                        }                        
                    </ButtonGroup>
                </Col>
            </Row>
        </>
    )
}

export default PaginationComponent