import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import '../App.css';
import pic from '../Picture.png'

const Login = () => {
    const navigate = useNavigate();
    const [loginDetails, setLoginDetails] = React.useState({
        email: '',
        password: ''
    })

    const display = (e) => {
        e.preventDefault();
        console.log(loginDetails.email, loginDetails.password)
    }

    // React.useEffect((e) => {
    //     e.preventDefault();
    //     console.log({...loginDetails})
    // }, [loginDetails])
    

    return(
        <Fragment>
            <Container className="fullHeight" as={'div'} fluid>
                <Row className="my-auto d-flex justify-content-center h-100">
                    <Col sm={12} md={7} className="my-auto d-flex justify-content-center p-5">
                        <div>
                            <h1 className="fw-bold">Sign In to your bank app</h1>
                            <p>If you don't have an account you can <span className="register" onClick={() => navigate('/register')}>Register here!</span></p>
                        </div>
                        <img src={pic} className="w-50 h-50"/>
                    </Col>
                    <Col sm={12} md={5} className="my-auto p-5">
                        <Form>
                            <FormInput
                                onChange={(email) => setLoginDetails({...loginDetails, email})}
                                value={loginDetails.email}
                                type={'email'}
                                inputClass={'form'}
                                inputId={'formBasicEmail'}
                                label={'Email address'}
                                placeholder={'Enter email'}
                            />
                            <FormInput 
                                onChange={(password) => setLoginDetails({...loginDetails, password})}
                                value={loginDetails.password}
                                type={'password'}
                                inputClass={'form'}
                                inputId={'formBasicPassword'}
                                label={'Password'}
                                placeholder={'Enter password'}
                            />
                            <Button onClick={display} className="submitBtn" type="submit">
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