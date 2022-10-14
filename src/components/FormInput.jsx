import React, { Fragment } from "react";
import {Form} from 'react-bootstrap';

const FormInput = ({change, label, placeholder, type, inputClass, inputId, value}) => {
    const [gender, setGender] = React.useState('female');
    const inputTypes = ['text', 'email', 'password', 'number', 'date'];
    const genderOptions = [
        {
            label: 'Male',
            value: 'male'
        },
        {
            label: 'Female',
            value: 'female'
        }
    ];

    return(
        <Fragment>
            {inputTypes.indexOf(type) !== -1 && (
                <Form.Group className="mb-3 w-100">
                    <Form.Label htmlFor={inputId}>{label}</Form.Label>
                    <Form.Control 
                        id={inputId} 
                        className={`${inputClass} p-2`} 
                        type={type} 
                        placeholder={placeholder} 
                        value={value}
                        onChange={(e) => change(e.target.value)}
                    />
                </Form.Group>
            )}
            {type === "select" && (
                <Form.Group className="mb-3 w-100">
                    <Form.Label htmlFor={inputId}>{label}</Form.Label>
                    <Form.Select 
                        id={inputId} 
                        className={`${inputClass} p-2`} 
                        onChange={(e) => {
                            const selected = e.target.value;
                            setGender(selected)
                            change(e.target.value)
                        }}
                        value={gender}
                    >
                        {
                            genderOptions.map((x, index) => {
                                return <option key={index} value={x.value}>{x.label}</option>
                            })  
                        }
                    </Form.Select>
                </Form.Group>
            )}
        </Fragment>
    )
}

export default FormInput;