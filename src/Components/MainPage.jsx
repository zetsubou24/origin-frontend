import React from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';

const MainPage = () => {
    const {loading : authloading, user} = useAuth0();
    
    if (authloading || !user) {
        return <div>Loading...</div>;
      }
    return (
        <>
            <Header as={Segment} inverted size="huge" image='/main3.png' content='Main Page' />
            <Button as={Link} primary to="/lesson">Lesson</Button>
            <Button as={Link} primary to="/quiz">Quiz</Button>
            <Button as={Link} primary to="/results">Result</Button>
        </>
    )
}

export default MainPage;