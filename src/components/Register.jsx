import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FormInput from './FormInput'
import '../App.css';
import { getDate } from "../containers/Helpers";
import pic from '../Picture.png';

const Register = () => {
    const [signUpDetails, setSignUpDetails] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        gender: '',
        dob: '',
        nextOfKin: '',
        initialDeposit: 0,
        password: ''
    })
    const navigate = useNavigate();

    const testing = (e) => {
        e.preventDefault();
        console.log({signUpDetails})
    }

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
                                    change={(firstName) => setSignUpDetails({...signUpDetails, firstName})}
                                    value={signUpDetails.firstName} 
                                    type={'text'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'First name'}
                                    placeholder={'Enter first name'}
                                />
                                <FormInput 
                                    change={(lastName) => setSignUpDetails({...signUpDetails, lastName})}
                                    value={signUpDetails.lastName}
                                    type={'text'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'Last name'}
                                    placeholder={'Enter last name'}
                                />
                            </div>
                            <div className="d-flex justify-content-between gap-3">
                                <FormInput 
                                    change={(email) => setSignUpDetails({...signUpDetails, email})}
                                    value={signUpDetails.email}
                                    type={'email'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'Email address'}
                                    placeholder={'Enter email'}
                                />
                                <FormInput 
                                    change={(phoneNo) => setSignUpDetails({...signUpDetails, phoneNo})}
                                    value={signUpDetails.phoneNo}
                                    type={'text'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'Phone number'}
                                    placeholder={'Enter phone number'}
                                />
                            </div>
                            <div className="d-flex justify-content-between gap-3">
                                <FormInput
                                    change={(gender) => {
                                        setSignUpDetails({...signUpDetails, gender})
                                    }}
                                    type={'select'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'Gender'}
                                />
                                <FormInput 
                                    change={(dob) => setSignUpDetails({...signUpDetails, dob: getDate(dob) })}
                                    value={signUpDetails.dob}
                                    type={'date'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'Date of birth'}
                                />
                            </div>
                            <div className="d-flex justify-content-between gap-3">
                                <FormInput 
                                    change={(nextOfKin) => setSignUpDetails({...signUpDetails, nextOfKin})}
                                    value={signUpDetails.nextOfKin} 
                                    type={'text'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'Next of kin'}
                                    placeholder={'Enter next of kin'}
                                />
                                <FormInput 
                                    change={(initialDeposit) => setSignUpDetails({...signUpDetails, initialDeposit})}
                                    value={signUpDetails.initialDeposit} 
                                    type={'number'}
                                    inputClass={'form'}
                                    inputId={'formBasicEmail'}
                                    label={'Initial deposit'}
                                    placeholder={'Enter initial deposit'}
                                />
                            </div>
                            <div className="d-flex justify-content-between gap-3">
                                <FormInput 
                                    change={(password) => setSignUpDetails({...signUpDetails, password})}
                                    value={signUpDetails.password} 
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
    
                            <Button onClick={testing} className="submitBtn" type="submit">
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