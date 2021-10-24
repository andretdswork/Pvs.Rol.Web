import React ,{ useState, memo, useRef, useImperativeHandle } from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'

const PvsSelect = React.forwardRef((props, ref) => {
    const selectRef = useRef()
    const [key, setKey] = useState(props.defaultValue)    

    const setStatusHandler = (event) => {
        const { name, value} = event.target
        setKey(event.target.value)
        props.onChange(name, value)
    }

    const setDefaultValue = ((value) => {
        setKey(value)
    })

    useImperativeHandle(ref , () => {
        return {
            defaultValue : setDefaultValue
        }
    })

    return (
        <>
            <FloatingLabel controlId="floatingSelect" label={props.label}>
                <Form.Select aria-label="" onChange={setStatusHandler} value={key} ref={selectRef} name={props.name} >
                    {
                        props.options.map((item) => {
                            return <option value={item.key} key={item.key}>{item.label}</option>
                        })
                    }
                </Form.Select>
            </FloatingLabel>
        </>
    )
})

export default memo(PvsSelect)