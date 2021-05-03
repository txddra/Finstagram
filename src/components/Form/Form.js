import React, {useState} from 'react';
import {TextField,Button,Typography, Paper} from '@material-ui/core';

import useStyles from './styles';
const Form =() =>{
    const [postData, setPostData] =useState({
// properties that object starts with
        creator:"", title:"", message:"", tags:"", selectedFile:""


    })
const classes = useStyles();

const handleSubmit =()=>{
    
}

    return(
        <Paper className={classes.paper}> 
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant = "h6">Creating a memory</Typography>
                <TextField
                name="creator"
                variant= "outlined"
                label="Creator"
                fullWidth value={postData.creator}
                // keeps data persistent  g
                onChange={(e)=>setPostData({...postData, creator: e.target.value})}
                ></TextField>

            </form>
        </Paper>
    );
}

export default Form;