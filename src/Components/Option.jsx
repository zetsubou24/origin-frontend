import React from 'react'
import { Header, Button, Segment } from 'semantic-ui-react'
const Option = (props) => {
    return (
        <Button>
            {props.answer}
        </Button>
    )
}

export default Option