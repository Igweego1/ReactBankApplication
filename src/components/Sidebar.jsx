import { Fragment } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import '../App.css';
import pic from '../Picture.png'

const Sidebar = () => {
    return (
        <Col sm={12} md={2} className={"d-flex-sm shadow-sm bg-cards p-3"}>
            <img src={pic} className="profile rounded-circle mx-auto d-block p-3 mb-3"/>
            <div className='d-flex flex-row flex-md-column gap-5 justify-content-center'>
                <Button className="bg-main">Withdraw</Button>
                <Button className="bg-main">Deposit</Button>
                <Button className="bg-main">Logout</Button>
            </div>
        </Col>
        // <div className='m-auto'>
        //     <div>
        //         <img src={pic} className="w-25 h-25"/>
        //     </div>
        //     <h3>Sidebar</h3>
        //     <p>{user.firstName} {user.lastName}</p>
        // </div>
    )
}

export default Sidebar;