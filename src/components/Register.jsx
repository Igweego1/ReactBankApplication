import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FormInput from './FormInput'
import '../App.css';
import { getDate } from "../containers/Helpers";
import pic from '../Picture.png';
import { AuthContext } from "../context/Auth";

const Register = () => {
    const {handleRegister} = React.useContext(AuthContext);
    const [signUpDetails, setSignUpDetails] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        gender: '',
        dob: '',
        nextOfKin: '',
        initialDeposit: 0,
        password: '',
        confirmPassword: ''
    })
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(signUpDetails.password !== signUpDetails.confirmPassword){
            alert('Passwords do\'nt match');
            return;
        }
        if(handleRegister(signUpDetails)){
            navigate('/');
        }
    }

    return(
        <Fragment>
            <Container className="fullHeight" as={'div'} fluid>
                <Row className="my-auto d-flex justify-content-center h-100">
                    <Col sm={12} md={7} className="my-auto d-md-flex justify-content-center py-3 px-5">
                        <div>
                            <h1 className="fw-bold">Create an account</h1>
                            <p>If you already have an account you can <span className="register" onClick={() => navigate('/')}>Sign in here!</span></p>
                        </div>
                        <img src={pic} className="w-50 d-none d-md-block h-50"/>
                    </Col>
                    <Col sm={12} md={5} className="my-auto py-3 px-5">
                        <Form>
                            <div className="d-md-flex justify-content-between gap-3">
                                <FormInput
                                    change={(firstName) => setSignUpDetails({...signUpDetails, firstName})}
                                    value={signUpDetails.firstName} 
                                    type={'text'}
                                    inputClass={'form'}
                                    inputId={'fname'}
                                    label={'First name'}
                                    placeholder={'Enter first name'}
                                />
                                <FormInput 
                                    change={(lastName) => setSignUpDetails({...signUpDetails, lastName})}
                                    value={signUpDetails.lastName}
                                    type={'text'}
                                    inputClass={'form'}
                                    inputId={'lname'}
                                    label={'Last name'}
                                    placeholder={'Enter last name'}
                                />
                            </div>
                            <div className="d-md-flex justify-content-between gap-3">
                                <FormInput 
                                    change={(email) => setSignUpDetails({...signUpDetails, email})}
                                    value={signUpDetails.email}
                                    type={'email'}
                                    inputClass={'form'}
                                    inputId={'email'}
                                    label={'Email address'}
                                    placeholder={'Enter email'}
                                />
                                <FormInput 
                                    change={(phoneNo) => setSignUpDetails({...signUpDetails, phoneNo})}
                                    value={signUpDetails.phoneNo}
                                    type={'text'}
                                    inputClass={'form'}
                                    inputId={'phoneNo'}
                                    label={'Phone number'}
                                    placeholder={'Enter phone number'}
                                />
                            </div>
                            <div className="d-md-flex justify-content-between gap-3">
                                <FormInput
                                    change={(gender) => {
                                        setSignUpDetails({...signUpDetails, gender})
                                    }}
                                    type={'select'}
                                    inputClass={'form'}
                                    inputId={'gender'}
                                    label={'Gender'}
                                />
                                <FormInput 
                                    change={(dob) => setSignUpDetails({...signUpDetails, dob: getDate(dob) })}
                                    value={signUpDetails.dob}
                                    type={'date'}
                                    inputClass={'form'}
                                    inputId={'dob'}
                                    label={'Date of birth'}
                                />
                            </div>
                            <div className="d-md-flex justify-content-between gap-3">
                                <FormInput 
                                    change={(nextOfKin) => setSignUpDetails({...signUpDetails, nextOfKin})}
                                    value={signUpDetails.nextOfKin} 
                                    type={'text'}
                                    inputClass={'form'}
                                    inputId={'nextOfKin'}
                                    label={'Next of kin'}
                                    placeholder={'Enter next of kin'}
                                />
                                <FormInput 
                                    change={(initialDeposit) => setSignUpDetails({...signUpDetails, initialDeposit})}
                                    value={signUpDetails.initialDeposit} 
                                    type={'number'}
                                    inputClass={'form'}
                                    inputId={'initialDeposit'}
                                    label={'Initial deposit'}
                                    placeholder={'Enter initial deposit'}
                                />
                            </div>
                            <div className="d-md-flex justify-content-between gap-3">
                                <FormInput 
                                    change={(password) => setSignUpDetails({...signUpDetails, password})}
                                    value={signUpDetails.password} 
                                    type={'password'}
                                    inputClass={'form'}
                                    inputId={'password'}
                                    label={'Password'}
                                    placeholder={'Enter password'}
                                />
                                <FormInput 
                                    type={'password'}
                                    inputClass={'form'}
                                    inputId={'confirmPassword'}
                                    label={'Confirm password'}
                                    placeholder={'Confirm password'}
                                    change={(confirmPassword) => setSignUpDetails({...signUpDetails, confirmPassword})}
                                    value={signUpDetails.confirmPassword}
                                />
                            </div>
    
                            <Button onClick={handleSubmit} className="submitBtn" type="submit">
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