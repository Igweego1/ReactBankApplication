import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { getAuthenticatedUser, greetings } from '../containers/Helpers';
import { AuthContext } from '../context/Auth';

const Dashboard = () => {
    const {handleLogout} = React.useContext(AuthContext);
    const [transactions, setTransactions] = React.useState({
        userEmail: '',
        type: '',
        date: '',
        details: '',
        amount: 0,
        userBalance: ''
    })
    const navigate = useNavigate();
    const user = getAuthenticatedUser();

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
                <Button className="submitBtn">
                    Withdraw
                </Button>
                <Button className="submitBtn">
                Deposit
            </Button>
            </div>
            <Button onClick={logout} className="submitBtn">
                Logout
            </Button>
        </div>
    )
}

export default Dashboard;