import React from 'react';
import { InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InputGroupMaker({ icon, placeholder, value, onChange }){

    return (
    <InputGroup className="mb-1">
        <InputGroup.Prepend>
            <InputGroup.Text>
                <FontAwesomeIcon icon={icon} />
            </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </InputGroup>
    )
}

export default InputGroupMaker;