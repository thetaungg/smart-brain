import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

export default function UploadProfilePic({handleUpload}){
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 100,
        },
        button: {
            margin: theme.spacing(1),
            width: 50,
            height: 30,
            textTransform: 'none',
        },
    }));

    const classes = useStyles();

            return (
                <form className={classes.container} noValidate autoComplete="off">
                    <div style={{display: 'inline'}}>
                        <TextField
                            id="standard-basic"
                            className={classes.textField}
                            label="Link"
                            margin="normal"
                        />
                    </div>
                    <div style={{marginTop: '10px', display: 'inline'}}>
                        <Button variant="contained" color="primary" className={classes.button} onClick={handleUpload}>
                            Upload
                        </Button>
                    </div>
                </form>
            );

}