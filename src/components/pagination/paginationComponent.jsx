import { useCallback, useEffect, useState } from "react"
import { Pagination } from "react-bootstrap"

const PaginationComponent = (props) => {
    const [items, setItems] = useState([]);
    const [activePage, setActivepage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState()
    const [totalItems] = useState(props.length)

    const generatePaginationItens = useCallback(() => {
        console.log(totalItems)
        setNumberOfPages(Math.ceil(totalItems / 10))
        setActivepage(1)
        let paginationItems = []
        for (let number = 1; number <= numberOfPages; number++) {
            paginationItems.push(number)
        }
        setItems(paginationItems)
    }, [numberOfPages, totalItems])

    const activePageHandle = (event) => {
        setActivepage(event.target.value)
    }

    useEffect(() => {        
        generatePaginationItens()        
    }, [generatePaginationItens])

    return (
        <>
            <Pagination>{
                items.map((item) => {                    
                    return <Pagination.Item key={item} active={item == activePage} onClick={activePageHandle}>
                        {item}
                    </Pagination.Item>

            })
                }</Pagination>
        </>
    )
}

export default PaginationComponent