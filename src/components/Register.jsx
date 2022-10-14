import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import FormInput from './FormInput'
import '../App.css';
import pic from '../Picture.png'

const Register = () => {
    const navigate = useNavigate();
    const genderOptions = ['male', 'female']
    return(
        <Fragment>
            <Container className="fullHeight" as={'div'} fluid>
                <Row className="my-auto d-flex justify-content-center h-100">
                    <Col sm={12} md={7} className="my-auto d-flex justify-content-center p-5">
                        <div>
                            <h1 className="fw-bold">Create an account</h1>
                            <p>If you already have an account you can <span className="register" onClick={() => navigate('/')}>Sign in here!</span></p>
                        </div>
                        <img src={pic} className="w-50 h-50"/>
                    </Col>
                    <Col sm={12} md={5} className="my-auto p-5">
                        <Form>
                            <div className="d-flex justify-content-between gap-3">
                                <FormInput 
                                    type={'text'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'First name'}
                                    placeholder={'Enter first name'}
                                />
                                <FormInput 
                                    type={'text'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'Last name'}
                                    placeholder={'Enter last name'}
                                />
                            </div>
                            <div className="d-flex justify-content-between gap-3">
                                <FormInput 
                                    type={'email'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'Email address'}
                                    placeholder={'Enter email'}
                                />
                                <FormInput 
                                    type={'text'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'Phone number'}
                                    placeholder={'Enter phone number'}
                                />
                            </div>
                            <div className="d-flex justify-content-between gap-3">
                                <FormInput 
                                    type={'select'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'Gender'}
                                    options={genderOptions}
                                />
                                <FormInput 
                                    type={'date'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'Date of birth'}
                                />
                            </div>
                            <div className="d-flex justify-content-between gap-3">
                                <FormInput 
                                    type={'text'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'Next of kin'}
                                    placeholder={'Enter next of kin'}
                                />
                                <FormInput 
                                    type={'number'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'Initial deposit'}
                                    placeholder={'Enter initial deposit'}
                                />
                            </div>
                            <div className="d-flex justify-content-between gap-3">
                                <FormInput 
                                    type={'password'}
                                    inputClass={'form'}
                                    inputId={'formBasicPassword'}
                                    label={'Password'}
                                    placeholder={'Enter password'}
                                />
                                <FormInput 
                                    type={'password'}
                                    inputClass={'form'}
                                    inputId={'formBasicPassword'}
                                    label={'Confirm password'}
                                    placeholder={'Confirm password'}
                                />
                            </div>
    
                            <Button className="submitBtn" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Register;