import React from 'react'
import { Header, Grid, Image, Button, Menu } from 'semantic-ui-react'
import Option from './Option'

const Question = (props) => {
    const handleClick = () => {
        console.log("Inside")
    }
    return (
        <>
            <Header>{props.data.question}</Header>
            <Grid padded celled>
                <Grid.Row columns="equal">
                    <Grid.Column as={Button} onClick={() => handleClick()}>
                        {props.data.answers[0]}
                    </Grid.Column>
                    <Grid.Column as={Button} >
                        {props.data.answers[1]}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns="equal">
                    <Grid.Column as={Button}>
                        {props.data.answers[2]}
                    </Grid.Column>
                    <Grid.Column as={Button}>
                        {props.data.answers[3]}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    )
}

export default Question