import React,{useState, useEffect} from 'react'
import { Header, Grid, Image, Button, Menu } from 'semantic-ui-react'
import Option from './Option'
import "./word.css"
const Question = (props) => {

    const [answers, setAnswers] = useState([])
    const [temp, setTemp] = useState([])
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            
            setLoading(false)

          console.log('This will run after 1 second!')
        }, 1000);
        return () => clearTimeout(timer);
      }, [props.answers[props.index]]);
    useEffect(() => {
        let data = []
            
            data.push(props.answers[props.index])
            data.push({name : props.meaning,
                correct: true
            })
            setTemp(data)
        setLoading2(false)
    }, [props.answers[props.index],loading])
    useEffect(() => {
        let data = []
            
            data.push({name : props.meaning,
                correct: true
            })
            console.log(temp)
            setAnswers(temp.concat(data))
        setLoading2(false)
    }, [props.answers[props.index], loading2])
    const handleClick = () => {
        console.log(temp)
        console.log(answers)
    }
    return (
        <>
        {loading2 ? null :
        <>
            <Header as="h2" className="heading" inverted attached="top">{props.name}</Header>
            <Grid padded celled attached>
                <Grid.Row columns="equal">
                    <Grid.Column as={Button} onClick={() => handleClick()}>
                        {/* {answers[0]} */}
                        {props.meaning}
                    </Grid.Column>
                    <Grid.Column as={Button} >
                    {/* {props.answers[1].name} */}
                    {props.meaning}

                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns="equal">
                    <Grid.Column as={Button}>
                    {/* {props.answers[2].name} */}
                    {props.meaning}

                    </Grid.Column>
                    <Grid.Column as={Button}>
                        {props.meaning}
                    {/* {props.answers[3].name} */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Button onClick={()=>handleClick()}>Press Me</Button>
            </>
}
        </>
    )
}

export default Question