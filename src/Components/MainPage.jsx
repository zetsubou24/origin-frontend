import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Button } from "semantic-ui-react"

const MainPage = () => {
    return (
    <>
        <Header>Main Page</Header>
        <Button as={Link} primary to="/lesson">Lesson</Button>
        <Button as={Link} primary to="/quiz">Quiz</Button>
    </>
    )
}

export default MainPage;