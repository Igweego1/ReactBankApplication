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
        <Fragment>
            <Container className="fullHeight" as={'div'} fluid>
                <Row className="my-auto d-flex justify-content-center h-100">
                    <Col sm={12} md={7} className="my-auto d-flex justify-content-center py-3 px-5">
                        <div className="text-center text-md-start">
                            <h1 className="fw-bold">Sign In to your bank app</h1>
                            <p>If you don't have an account you can <span className="register" onClick={() => navigate('/register')}>Register here!</span></p>
                        </div>
                        <img src={pic} className="w-50 h-50 d-none d-md-block"/>
                    </Col>
                    <Col sm={12} md={5} className="my-auto py-3 px-5">
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
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Login;