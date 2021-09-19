import React ,{ useState, memo, useRef, useImperativeHandle } from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'

const PvsSelect = React.forwardRef((props, ref) => {
    const selectRef = useRef()
    const [value, setValue] = useState(props.defaultValue)    

    const setStatusHandler = (event) => {
        setValue(event.target.value)
        props.onChangeHandler(event.target.value)
    }

    const setDefaultValue = ((value) => {
        setValue(value)
    })

    useImperativeHandle(ref , () => {
        return {
            defaultValue : setDefaultValue
        }
    })

    return (
        <>
            <FloatingLabel controlId="floatingSelect" label="Escolha a Situação">
                <Form.Select aria-label="" onChange={setStatusHandler} value={value} ref={selectRef}>
                    {
                        props.options.map((item) => {
                            return <option value={item.value} key={item.value}>{item.label}</option>
                        })
                    }
                </Form.Select>
            </FloatingLabel>
        </>
    )
})

export default memo(PvsSelect)