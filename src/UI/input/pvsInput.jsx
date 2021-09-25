import { memo } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import styles from './pvsInput.module.css'

const PvsInput = (props) => {
    
    const onChangeHandler = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <>
            <FloatingLabel controlId="floatingInputGrid" label={props.label}>
                <Form.Control type={props.type}
                    placeholder={props.placeHolder}
                    onChange={onChangeHandler} 
                    value={props.value} 
                    maxLength={props.maxLength} 
                    required={props.reguired}   
                    min={props.min} 
                    max={props.max}                    
                    />
            </FloatingLabel>
            {
                props.isValidInput && <div className={styles.invalidInputMessage}>Valor invalido</div>
            }
        </>
    )
}

export default memo(PvsInput)