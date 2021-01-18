import React, { useState, useContext } from 'react'
import { Auth } from '../../firebase'
import { Controls } from '../../Controls/Controls'
import { Button, Grid, Paper, TextField } from '@material-ui/core'
import { useForm, Form } from '../../Hooks/useForm'
import { makeStyles } from '@material-ui/styles'
import { signInWithGoogle } from '../../firebase'
import { Authenticate } from '../Authenticate'
import { Customer } from '../Customer/Customer'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../../UserContext'

export const Login = () => {

    const user = useContext(UserContext);

    const loginModel = {
        userName: '',
        password: ''
    }

    const [path, setPath] = useState();
    const { values, setValues, resetForm, handleInputChange } = useForm(loginModel);

    const submit = (e) => {
        e.preventDefault();
        setPath("/Customers");
        console.log({ path });
    }

    const useStyles = makeStyles(theme => ({
        root: {
            width: '50%',
            marginTop: theme.spacing(5),
            padding: theme.spacing(5)
        },
        siginButton: {
            marginTop: theme.spacing(2),
            float: "right"
        },
        siginWithGoogle: {
            marginTop: theme.spacing(4),
            width: '100%'
        }
    }));

    const classes = useStyles();
    return (
        <>
            <Grid container justify="center">
                <Paper elevation={3} className={classes.root}>
                    <Form action={submit} >
                        <Grid item xs={12}>
                            <Controls.Input
                                name={values.userName}
                                label="User Name"
                                values={values}
                                onChange={handleInputChange}
                            />
                            <TextField type="password"
                                name={values.userName}
                                label="Password"
                                values={values}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <Button className={classes.siginButton} variant="contained" color="primary">Sign In</Button>
                        </Grid> */}
                        <Grid item xs={12} className={classes.signInWithGoogle}>
                            <Button onClick={signInWithGoogle} variant="contained" color="primary">Sign In with Google</Button>
                        </Grid>
                    </Form>
                </Paper>
            </Grid>
        </>
    )
}

export default Login;