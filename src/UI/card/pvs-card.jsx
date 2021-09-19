import { Container } from 'react-bootstrap'
import styles from './pvs-card.module.css'

const PvsCard = (props) => {
    return (
        <Container>
            <div className={styles.pvsForm}>
                {props.children}
            </div>
        </Container>
    )
}

export default PvsCard