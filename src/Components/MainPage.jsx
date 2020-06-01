import React from 'react';
import { Header, Segment, Button, Card, Image, Grid} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';
import './mainpage.css'
 
const MainPage = () => {
    const {loading : authloading, user, logout} = useAuth0();
    
    // if (authloading || !user) {
    //     return <div>Loading...</div>;
    //   }
    return (
        <>
                <Header as={Segment} inverted size="huge" image='/main3.png' content='Main Page' />
                <Button onClick={()=>logout()}>Logout</Button>

            <Card.Group centered className="container">
                <Card>
                    <Card.Content>
                        <Card.Header>Start the Lesson</Card.Header>
                        <Image src="lesson2.png" size="medium"></Image>
                    </Card.Content>
                    <Button as={Link} className={"login"} color="green" to="/lesson">Start Lesson</Button>
                </Card> 
                <Card>
                    <Card.Content>
                        <Card.Header>Test your Knowledge</Card.Header>
                        <Image src="quiz2.png" size="medium"></Image>
                    </Card.Content>
                    <Button as={Link} color="green" to="/quiz">Start Quiz</Button>
                </Card>
            </Card.Group>
        </>
    )
}

export default MainPage;