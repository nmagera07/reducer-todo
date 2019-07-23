import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'
const FormInput = (props) => {
    const [formInput, setFormInput] = useState({item: ''})

    const handleChanges = e => {
        setFormInput({ [e.target.name]: e.target.value })
    }

    const submitItem = e => {
        e.preventDefault()
        setFormInput({ item: '' })
        props.addItem(e, formInput.item)
    }
    console.log(formInput.item)
    return ( 
        <div className="form">
            <Form onSubmit={submitItem} >
                <Form.Field>
                    <label>Add a Todo</label>
                    <input
                        type="text"
                        value={formInput.item}
                        name="item"
                        onChange={handleChanges}
                    ></input>
                </Form.Field>
                <button>Add Me!</button>
            </Form>
        </div>
     );
}
 
export default FormInput;