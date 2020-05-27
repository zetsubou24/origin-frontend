import React, { Component } from 'react';
import { Header, Grid, Image, Button, Radio, Menu } from 'semantic-ui-react'

class Question extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.shuffleArray = this.shuffleArray.bind(this)
        this.state = {
            answers : [],
            loading : true,
            selected : -1
        }
    }
    handleClick = (event) => {
        console.log("Inside")
        this.setState({...this.state, selected : event.target.id})
        this.props.handleSelected(event.target.name, event.target.value)
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({answers : this.shuffleArray(this.props.answers[this.props.index].concat({name : this.props.meaning, correct : true})),
            loading : false
        })
        console.log(this.state.answers)
        },1000)
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    render(){
        return (<>
        {this.state.loading ? null :
        <>
            <Header as="h2" className="heading" inverted attached="top">{this.props.name}</Header>
            <Grid padded celled attached>
                <Grid.Row columns="equal">
                    <Grid.Column as={Button} id="0" name={this.props.id} value={this.state.answers[0].correct} color={this.state.selected == 0 ? "green" : ""} onClick={(event) => this.handleClick(event)}>
                        {this.state.loading ? "placeholder" : this.state.answers[0].name}
                    </Grid.Column>
                    <Grid.Column as={Button} id="1" name={this.props.id} value={this.state.answers[1].correct} color={this.state.selected == 1 ? "green" : ""} onClick={(event) => this.handleClick(event)}>
                    {this.state.loading ? "placeholder" : this.state.answers[1].name}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns="equal">
                    <Grid.Column as={Button} id="2" name={this.props.id} value={this.state.answers[2].correct} color={this.state.selected == 2 ? "green" : ""} onClick={(event) => this.handleClick(event)}>
                    {this.state.loading ? "placeholder" : this.state.answers[2].name}
                    </Grid.Column>
                    <Grid.Column as={Button} id="3" name={this.props.id} value={this.state.answers[3].correct} color={this.state.selected == 3 ? "green" : ""} onClick={(event) => this.handleClick(event)}>
                    {this.state.loading ? "placeholder" : this.state.answers[3].name}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
}
        </>)
    }
}

export default Question