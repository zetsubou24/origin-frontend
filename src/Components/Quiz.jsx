import React,{useEffect, useState} from 'react';
import { Header, Segment, Button, Grid} from 'semantic-ui-react';
import QuestionAnswer from './QuestionAnswer';
import { useAuth0 } from '../react-auth0-spa';

const Quiz = () => {
    const [loading, setLoading] = useState(true)
    const [words, setWords] = useState([])
    const [answers, setAnswers] = useState([])
    const [selected, setSelected] = useState([])
    const [postdata, setPostdata] = useState([])
    const {loading : authloading, user} = useAuth0();
    const { getTokenSilently } = useAuth0();

    async function fetchData(isSubscribed){
        var data3 = []
        const token = await getTokenSilently()
        if(user){
        fetch("http://localhost:8080/api/quiz",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({email : user.email}),
        })
            .then(data => data.json())
            .then(data => {
                console.log(data)
                if(isSubscribed){
                setWords(data)
                setLoading(false)
                }
                    data.map(dt => {fetch(`http://localhost:8080/api/meanings?id=${dt.wordId}`,{
                        headers: {
                          Authorization: `Bearer ${token}`
                        }
                      })
                    .then(data2 => data2.json())
                    .then(data2 => {
                        console.log(data2)
                        var eles = []
                        data2.map(ele => {
                            eles.push({
                                name : ele,
                                correct : false
                            })
                        })
                        data3.push(eles)
                    })})
            })
            if(isSubscribed){
            setAnswers(data3)
            }
        }
    }

    useEffect(() => {
        let isSubscribed = true
        fetchData(isSubscribed)
        return () => isSubscribed = false
    }, [user])
    
    const handleSelected = (name, value) => {
        console.log(name, value)
        setSelected(prevState => ({...prevState, [name] : value}))
    }

    const handleClick = () => {
        console.log(selected)
        console.log(postdata)
    }

    const handleSubmit = async () => {
        let data = []
        const token = await getTokenSilently()
        Object.keys(selected).forEach(function(key) {
            data.push({id : key, correct : selected[key]})
          })
        setPostdata(data)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({answers : data, email : user.email})
        };
        fetch('http://localhost:8080/api/quiz/submit', requestOptions)
            .then(response => console.log(response))
    }
    if (authloading || !user) {
        return <div>Loading...</div>;
      }
    const items = words.map((word,index) => {
        return <QuestionAnswer index={index} id={loading ? "" : word.wordId} name={loading ? "" : word.wordName} meaning={loading ? "" : word.wordMeaning} answers={loading ? "" : answers} handleSelected={handleSelected}></QuestionAnswer>
        })
    return (
        <>
            <Header as={Segment} inverted size="huge" image='/quiz2.png' content='Quiz Page' />
            {items}
            <Grid >
                <Grid.Row centered columns={7}>
                    <Grid.Column>
                        <Button color="green" onClick={() => {handleSubmit()}}>Complete Quiz!</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <br></br>
            <br></br>
    
        </>
    )
}

export default Quiz;