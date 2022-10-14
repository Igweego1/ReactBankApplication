import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import '../App.css';
import pic from '../Picture.png'

const Login = () => {
    const navigate = useNavigate();
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
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="form" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="form" type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className="submitBtn" type="submit">
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