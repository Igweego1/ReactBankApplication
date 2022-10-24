import {routes, authRoutes} from '../routes';
import {Link} from 'react-router-dom'
import {Container, Row, Col, Stack} from 'react-bootstrap';
import React, { Fragment } from 'react';
import '../App.css';

const Layout = ({children}) => {
    if(authRoutes.indexOf(window.location.pathname) !== -1){
        return <div>{children}</div>
    }

    return (
        <Fragment>
            <Container as='div' fluid className="fullHeight">
                {children}
            </Container>
        </Fragment>
    )
}

export default Layout;