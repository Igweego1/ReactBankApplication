import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Modal, Table} from 'react-bootstrap';
import { getAuthenticatedUser, greetings, getFromLocalStorage } from '../containers/Helpers';
import { AuthContext } from '../context/Auth';
import { TransactionContext } from '../context/Transactions';
import FormInput from './FormInput';

const Dashboard = () => {
    const allTransactions = getFromLocalStorage('allTransactions');
    const {handleLogout} = React.useContext(AuthContext);
    const {handleWithdraw, handleDeposit} = React.useContext(TransactionContext);
    const user = getAuthenticatedUser();
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
        <div>
            <p>Dashboard</p>
            <p>Good {greetings()}, {user.firstName}</p>
            <h4>N{user.initialDeposit}</h4>
            <div className='d-flex gap-4 mb-3'>
                <Button className="submitBtn" onClick={handleShowWithdraw}>
                    Withdraw
                </Button>
                <Button className="submitBtn" onClick={handleShowDeposit}>
                Deposit
            </Button>
            </div>
            <Button onClick={logout} className="submitBtn">
                Logout
            </Button>

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
                    }} type="submit">
                    Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Table striped bordered hover>
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
                        allTransactions && (
                            allTransactions.map((x, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{x.type}</td>
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
        </div>
    )
}

export default Dashboard;