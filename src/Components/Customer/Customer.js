import React, { useState, useEffect } from 'react'
import {
    TextField, Button,
    ButtonGroup, Grid, Paper
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import withErrorBoundary from '../../withErrorBoundary'
import { fStore } from '../../firebase'
import PageHeader from '../shared/PageHeader'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useForm, Form } from '../../Hooks/useForm'
import Controls from '../../Controls/Controls'
import CustomerModel from '../../Models/Customer'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    buttonGrp: {
        display: "flex",
        float: "left",
        paddingTop: theme.spacing(2)
    },
    PageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    },
    btn: {
        marginLeft: theme.spacing(3)
    }
}));

const Customer = function Customer() {

    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const docRef = await fStore.collection('Customers').add(values);
        if (docRef.id) {
            console.log(docRef);
        }
    }

    const { handleInputChange, values, resetForm, setValues } = useForm(CustomerModel);

    const handleChange = (e) => {
        setValues({
            ...values,
            Address: {
                ...values.Address,
                [e.target.name]: e.target.value
            },
        });
    };

    return (
        <>
            <PageHeader
                icon={<PersonAddIcon></PersonAddIcon>}
                title="New Customer"
                description="Add customer details!"
            >
            </PageHeader>
            <Paper className={classes.PageContent}>
                <Form action={handleSubmit} className={classes.root}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Controls.Input
                                label="First Name"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleInputChange} />
                            <Controls.Input
                                label="Last Name"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleInputChange} />
                            <Controls.Input
                                label="Primary Number"
                                name="phoneNumber" value={values.phoneNumber}
                                onChange={handleInputChange} />
                            <Controls.Input
                                label="Secondary Number"
                                name="secondaryNumber"
                                value={values.secondaryNumber}
                                onChange={handleInputChange} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="street"
                                name="street"
                                value={values.Address.street}
                                onChange={handleChange} />
                            <TextField
                                label="City"
                                name="city"
                                value={values.Address.city}
                                onChange={handleChange} />
                            <TextField
                                label="House Number"
                                name="houseNumber"
                                value={values.Address.houseNumber}
                                onChange={handleChange} />
                            <Grid item xs={12}>
                                <div className={classes.buttonGrp}>
                                    <Button color="primary" variant="contained" type="submit">Submit</Button>
                                    <Button color="primary" className={classes.btn} variant="contained" onClick={resetForm}>Clear</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Form>
            </Paper>
        </>
    )
}

export default Customer;