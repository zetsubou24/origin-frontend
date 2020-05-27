import React, { useEffect } from 'react'
import { Header, Segment } from 'semantic-ui-react'
import './word.css'
const Word = (props) => {
    return (
        <>
            <Header as='h2' className="heading" inverted attached='top'>
                {props.name}
            </Header>
            <Segment attached>
                <p>{props.meaning}</p>
            </Segment>
        </>
    )
}

export default Word