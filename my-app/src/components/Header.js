import React from 'react'
import Paper from '@material-ui/core/Paper';


function Header() {
    return (
        <Paper style={{display: "flex"}} square elevation={3}>
            <img style = {{width: "50px"}} src ="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.programwitherik.com%2Fcontent%2Fimages%2F2016%2F02%2Freact-logo.png&f=1&nofb=1"></img>
            <h1 className = "header-name">Kelvin's React App</h1>
        </Paper>
    )
}

export default Header
