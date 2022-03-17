import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/home">Logistic</Navbar.Brand>
                    </Container>
                </Navbar></div>
        )
    }
}
