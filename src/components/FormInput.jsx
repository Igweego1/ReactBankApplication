import { Fragment } from "react";
import {Form} from 'react-bootstrap';

const FormInput = ({onChange, options, label, placeholder, type, inputClass, inputId, value}) => {
    const inputTypes = ['text', 'email', 'password', 'number', 'date'];

    return(
        <Fragment>
            {inputTypes.indexOf(type) !== -1 && (
                    <Form.Group className="mb-3 w-100" controlId={inputId}>
                        <Form.Label>{label}</Form.Label>
                        <Form.Control className={`${inputClass} p-2`} type={type} placeholder={placeholder} />
                    </Form.Group>
                )}
                {type === "select" && (
                    <Form.Group className="mb-3 w-100" controlId={inputId}>
                        <Form.Label>{label}</Form.Label>
                        <Form.Select className={`${inputClass} p-2`} aria-label="Default select example">
                            {Array.isArray(options) &&
                                options.map((x, index) => {
                                    return <option key={index}>{x}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                )}
                {type === "textarea" && (
                    <div>
                        <label htmlFor={inputId} className="form-label">{label}</label>
                        <textarea
                            id={inputId}
                            placeholder={placeholder}
                            value={value}
                            className={`${inputClass} form-control`}
                            onChange={(e) => onChange(e.target.value)}
                        ></textarea>
                    </div>
                )}
                {type === "checkbox" && (
                    <input
                    type={type}
                    value={value}
                    className={`${inputClass}`}
                    id={inputId}
                    onChange={(e) => onChange(e.target.value)}
                    />
                )}
        </Fragment>
    )
}

export default FormInput;