import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

const Login = () => {
    return (
        <Button as={Link} color="green" to="/home">Login</Button>
    )
}

export default Login