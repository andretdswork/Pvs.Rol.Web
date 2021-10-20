import { memo } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import styles from './pvsInput.module.css'

const PvsInput = (props) => {

    const onChangeHandler = (event) => {
        const { name, value} = event.target
        props.onChange(name, value)
    }
    const onBlurHandler = (event) => {
        if (props.onBlur)
            props.onBlur(event.target.value)
    }

    return (
        <>
            <FloatingLabel controlId="floatingInputGrid" label={props.label}>
                {
                    props.isTextArea ?
                        <Form.Control
                            type={props.type}
                            placeholder={props.placeHolder}
                            onChange={onChangeHandler}                            
                            value={props.value}
                            maxLength={props.maxLength}
                            required={props.required}
                            min={props.min}
                            max={props.max}
                            as='textarea'
                            size={props.size ? props.size : 'lg'}
                            name={props.name}
                        />
                        :
                        <Form.Control
                            type={props.type}
                            placeholder={props.placeHolder}
                            onChange={onChangeHandler}
                            onBlur={onBlurHandler}
                            value={props.value}
                            maxLength={props.maxLength}
                            required={props.required}
                            min={props.min}
                            max={props.max}
                            size={props.size ? props.size : 'lg'}
                            name={props?.name}
                        />
                }

            </FloatingLabel>
            {
                props.isValidInput && <div className={styles.invalidInputMessage}>Valor invalido</div>
            }
        </>
    )
}

export default memo(PvsInput)