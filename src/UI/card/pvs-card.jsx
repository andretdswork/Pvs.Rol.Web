import { Container } from 'react-bootstrap'
import styles from './pvs-card.module.css'

const PvsCard = (props) => {
    return (
        <Container>
            <div className={styles.pvsForm}>
            <span className={styles.title}>{props.title}</span>
                {props.children}
            </div>
        </Container>
    )
}

export default PvsCard