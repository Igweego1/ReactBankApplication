import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import '../App.css';
import pic from '../Picture.png'
import { AuthContext } from "../context/Auth";

const Login = () => {
    const {handleLogin} = React.useContext(AuthContext);
    const navigate = useNavigate();
    const [loginDetails, setLoginDetails] = React.useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(handleLogin(loginDetails)){
            navigate('/dashboard');
        }
    }

    return(
        <Form>
            <FormInput
                change={(email) => setLoginDetails({...loginDetails, email})}
                value={loginDetails.email}
                type={'email'}
                inputClass={'form'}
                inputId={'formBasicEmail'}
                label={'Email address'}
                placeholder={'Enter email'}
            />
            <FormInput 
                change={(password) => setLoginDetails({...loginDetails, password})}
                value={loginDetails.password}
                type={'password'}
                inputClass={'form'}
                inputId={'formBasicPassword'}
                label={'Password'}
                placeholder={'Enter password'}
            />
            <Button onClick={handleSubmit} className="submitBtn" type="submit">
                Sign In
            </Button>
        </Form>
    )
}

export default Login;