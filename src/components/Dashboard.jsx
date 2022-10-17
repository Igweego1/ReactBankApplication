import React, { Fragment } from 'react';
import {useNavigate} from 'react-router-dom';
import {Card, Button, Modal, Table, Container, Row, Col, Badge} from 'react-bootstrap';
import { getAuthenticatedUser, greetings, getUserTransactions } from '../containers/Helpers';
import { AuthContext } from '../context/Auth';
import { TransactionContext } from '../context/Transactions';
import FormInput from './FormInput';
import '../App.css';
import pic from '../Picture.png';

const Dashboard = () => {
    const {handleLogout} = React.useContext(AuthContext);
    const {handleWithdraw, handleDeposit} = React.useContext(TransactionContext);
    const user = getAuthenticatedUser();
    const userTransactions = getUserTransactions(user.email);
    const [transactions, setTransactions] = React.useState({
        userEmail: user.email,
        type: '',
        date: '',
        details: '',
        amount: 0,
        userBalance: ''
    });
    const [showWithdraw, setShowWithdraw] = React.useState(false);
    const [showDeposit, setShowDeposit] = React.useState(false);
    const navigate = useNavigate();

    const handleCloseWithdraw = () => setShowWithdraw(false);
    const handleShowWithdraw = () => setShowWithdraw(true);

    const handleCloseDeposit = () => setShowDeposit(false);
    const handleShowDeposit = () => setShowDeposit(true);

    const submitForm = (type) => {
        if(transactions.amount < 5){
            alert('Minimum of N5 is required for a transaction.');
            return;
        }
        if(type === 'Debit') {
            handleWithdraw(transactions);
        }
        else{
            handleDeposit(transactions);
        }
    }

    const logout = (e) => {
        e.preventDefault();
        if(handleLogout(user)){
            navigate('/');
        }
    }

    return(
        <Fragment>
            <Container fluid className="fullHeight">
                <Row className='h-100'>
                    <Col sm={12} md={2} className={"d-flex-sm shadow-sm bg-cards p-3"}>
                        <img src={pic} className="profile rounded-circle mx-auto d-block p-3 mb-3"/>
                        <div className='d-flex flex-row flex-md-column justify-content-between gap-2'>
                            <Button className="submitBtn bg-main" onClick={handleShowWithdraw}>
                                Withdraw
                            </Button>
                            <Button className="submitBtn bg-main" onClick={handleShowDeposit}>
                                Deposit
                            </Button>
                            <Button className="submitBtn bg-main" onClick={logout}>
                                Logout
                            </Button>
                        </div>
                    </Col>
                    <Col sm={12} md={10} className='px-5 py-3 beige'>
                        <Row className='my-4 gy-sm-3'>
                          <Col sm={12} md={5}>
                            <Card className="h-100 remove-border">
                              <Card.Title className='px-3 pt-3'>Good {greetings()}, {user.firstName}</Card.Title>
                              <Card.Body>
                                  <Card.Title>Current Account</Card.Title>
                                  <Card.Text className='fs-1 font-bold mainText'>N {user.initialDeposit}</Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col sm={12} md={7}>
                              <Card className="h-100 remove-border">
                                <Card.Body>
                                    <Card.Title>Profile</Card.Title>
                                    <Card.Text>
                                      <div className="d-flex flex-column gap-1 mb-2">
                                        <div className="text-uppercase fs-6 title mainText">Email</div>
                                        <div>{user.email}</div>
                                      </div>
                                      <div className="d-flex flex-column gap-1 mb-2">
                                        <div className="text-uppercase fs-6 title mainText">Date of birth</div>
                                        <div>{user.dob}</div>
                                      </div>

                                      <div className="d-flex flex-column gap-1 mb-2">
                                        <div className="text-uppercase fs-6 title mainText">Next of kin</div>
                                        <div>{user.nextOfKin}</div>
                                      </div>
                                    </Card.Text>
                                </Card.Body>
                              </Card>
                          </Col>
                        </Row>

                        <Modal show={showWithdraw} onHide={handleCloseWithdraw}>
                        <Modal.Header closeButton>
                            <Modal.Title>Withdraw amount</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormInput
                                change={(amount) => setTransactions({...transactions, amount})}
                                value={transactions.amount}
                                type={'number'}
                                inputClass={'form'}
                                inputId={'formBasicEmail'}
                                label={'Make a withdrawal'}
                                placeholder={'Amount to withdraw'}
                            />
                            <FormInput
                                change={(details) => setTransactions({...transactions, details})}
                                value={transactions.details}
                                type={'text'}
                                inputClass={'form'}
                                inputId={'formBasicEmail'}
                                label={'Description'}
                                placeholder={'Enter a description'}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseWithdraw}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={(e) => {
                                e.preventDefault();
                                handleCloseWithdraw();
                                submitForm('Debit');
                            }} type="submit">
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={showDeposit} onHide={handleCloseDeposit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Deposit amount</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormInput
                                change={(amount) => setTransactions({...transactions, amount})}
                                value={transactions.amount}
                                type={'number'}
                                inputClass={'form'}
                                inputId={'formBasicEmail'}
                                label={'Make a deposit'}
                                placeholder={'Amount to deposit'}
                            />
                            <FormInput
                                change={(details) => setTransactions({...transactions, details})}
                                value={transactions.details}
                                type={'text'}
                                inputClass={'form'}
                                inputId={'formBasicEmail'}
                                label={'Description'}
                                placeholder={'Enter a description'}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseDeposit}>
                            Close
                            </Button>
                            <Button variant="primary" onClick={(e) => {
                                e.preventDefault();
                                submitForm('Credit');
                                handleCloseDeposit();
                            }} type="submit">
                            Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

                        <Card className='remove-border table'>
                          <Card.Body>
                              <Card.Title>Transactions</Card.Title>
                              <Table>
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>Date</th>
                                            <th>Details</th>
                                            <th>Amount</th>
                                            <th>Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            userTransactions && (
                                                userTransactions.map((x, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td><Badge bg={x.type === 'Debit' ? 'danger' : 'success'}>{x.type}</Badge></td>
                                                            <td>{x.date}</td>
                                                            <td>{x.details}</td>
                                                            <td>{x.amount}</td>
                                                            <td>{x.userBalance}</td>
                                                        </tr>
                                                    )
                                                })
                                            )
                                        }
                                    </tbody>
                                </Table>
                          </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Dashboard;