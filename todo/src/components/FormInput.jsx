import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'
const FormInput = () => {
    const [formInput, setFormInput] = useState({item: ''})

    const handleChanges = e => {
        setFormInput({ [e.target.name]: e.target.value })
    }

    return ( 
        <div classList="form">
            <Form>
                <Form.Field width="4">
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