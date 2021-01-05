import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root': {
            margin: theme.spacing(1),
            width: '80%',
        },
    },
    buttonGrp: {
        float: "right"
    },
    PageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    }
}));

export function Form(props) {

    const classes = useStyles();

    return (
        <form onSubmit={props.action} className={classes.root}>
            {props.children}
        </form>
    )
}


export function useForm(initialValues) {

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const resetForm = () => {
        setValues(initialValues);
    }

    return {
        values,
        setValues,
        resetForm,
        handleInputChange
    }
}
