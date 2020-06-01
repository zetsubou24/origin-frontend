import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Button, Card, Image, Header, Segment} from 'semantic-ui-react'
import "./login.css"

const Login = () => {
    return (
        <>
            <Header as={Segment} inverted size="huge" content='Origin Vocabulary App' />   
            <Card.Group centered className="container">
                <Card>
                    <Card.Content>
                        <Card.Header>Improve your vocabulary today!</Card.Header>
                        <Image src="main.png"></Image>
                    </Card.Content>
                <Button as={Link} className={"login"} color="green" to="/home">Login</Button>
                </Card>
            </Card.Group>
        </>
    )
}

export default Login