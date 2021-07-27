import React from 'react'
import { Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'

const useStyles=makeStyles({
    root:{
        background:'linear-gradient(45deg,#FE6B8B,#FF8E53)',
        border:0,
        borderRadius:15,
        color:'white',
        padding:'5px 30px',
        marginTop:15
    }
})

export default function StyledButtonComponent() {
    const classes=useStyles();
    return (
        <div>
            <Button className={classes.root}>Styled Button</Button>
        </div>
    )
}
