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
                {/* for creator */}
                <TextField name="creator" variant= "outlined" label="Creator" fullWidth value={postData.creator}
                // keeps data persistent 
                onChange={(e)=>setPostData({...postData, creator: e.target.value})}
                ></TextField>
                {/* for title */}
                <TextField name="title" variant= "outlined" label="Title" fullWidth value={postData.title}
                // keeps data persistent 
                onChange={(e)=>setPostData({...postData, title: e.target.value})}
                ></TextField>
                {/* for message */}
                <TextField name="message" variant= "outlined" label="Message" fullWidth value={postData.message}
                // keeps data persistent 
                onChange={(e)=>setPostData({...postData, message: e.target.value})}
                ></TextField>
                {/*for tags */}
                <TextField name="tags" variant= "outlined" label="Tags" fullWidth value={postData.tags}
                // keeps data persistent 
                onChange={(e)=>setPostData({...postData, tags: e.target.value})}
                ></TextField>

            </form>
        </Paper>
    );
}

export default Form;