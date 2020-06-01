import React, { useState, useEffect } from 'react';
import { Header, Segment, Button, Grid} from 'semantic-ui-react';
import Word from "./Word"
import { useAuth0 } from '../react-auth0-spa';
import {Link} from 'react-router-dom'

const Lesson = () => {
    const [loading, setLoading] = useState(true)
    const [words, setWords] = useState([])
    const [ids, setIds] = useState([])
    const {loading : authloading, user, logout} = useAuth0();
    const { getTokenSilently } = useAuth0();
    const [completed, setCompleted] = useState(false);

    async function fetchData(isSubscribed) {
        var temp = []
        const token = await getTokenSilently()
        console.log(user)
        if(user){
        fetch(`http://localhost:8080/api/lesson`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({email : user.email, name : user.name}),
        })
            .then(data => data.json())
            .then(data => {
                data.map(ele => {
                    temp.push(ele.wordId)
                })
                if(isSubscribed){
                setWords(data)
                setLoading(false)
                setIds({ids : temp})
                }
            })
        }
}
    useEffect(() => {
        let isSubscribed = true
        fetchData(isSubscribed)
        return () => isSubscribed = false
    }, [user])
    const items = words.map(word => {
        return <Word name={loading ? "" : word.wordName} meaning={loading ? "" : word.wordMeaning}></Word>
        })
    const handleFinish = async () => {
        const token = await getTokenSilently()

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({...ids, email : user.email}),
        };
        fetch(`http://localhost:8080/api/lesson/submit?email=${user.email}`, requestOptions)
            .then(response => console.log(response))
        console.log("Completing Lesson!")
        console.log(ids)
        console.log(words)
        console.log(user)
        console.log(user.email)
        console.log(token)
        console.log({...ids, email : user.email})
        setCompleted(true)
    }

    if (authloading || !user) {
        return <div>Loading...</div>;
      }
    return (
        <>
            <Header as={Segment} inverted size="huge" image="lesson2.png" content='Lesson Page'>
            </Header>
            <Button onClick={()=>logout()}>Logout</Button>
            <br></br>
            {items}
            <br></br>
            <Grid >
                <Grid.Row centered columns={7}>
                    <Grid.Column>
                        <Button color="green" onClick={() => {handleFinish()}}>Complete Lesson!</Button>
                    </Grid.Column>
                </Grid.Row>
                {/* <Grid.Row centered columns={8}>
                    <Grid.Column>
                        <Button as={Link} primary to="/quiz">Start Quiz</Button>
                    </Grid.Column>
                </Grid.Row> */}
                <Grid.Row centered columns={8}>
                    <Grid.Column>
                        <Header color="red" content={completed ? "Lesson Completed" : ""}></Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <br></br>
            <br></br>
        </>
    )
}

export default Lesson;