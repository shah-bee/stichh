import React, { useState } from 'react'
import {
    TextField, Button,
    ButtonGroup, Grid, Paper
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import withErrorBoundary from '../../withErrorBoundary'
import { fStore } from '../../firebase'
import PageHeader from '../shared/PageHeader'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import axios from 'axios';
import { useForm, Form } from '../../Hooks/useForm'
import Controls from '../../Controls/Controls'

const useStyles = makeStyles((theme) => ({
    buttonGrp: {
        float: "left",
        paddingTop: theme.spacing(2)
    },
    PageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    }
}));

const Customer = function Customer() {
    const classes = useStyles();
    const customerModel = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        secondaryNumber: '',
        Address: {
            street: '',
            city: '',
            houseNumber: ''
        },
        photo: ''
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const docRef = await fStore.collection('Customers').add(values);
        if (docRef.id) {
            console.log(docRef);
        }
    }

    const { handleInputChange, values, resetForm, setValues } = useForm(customerModel);

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
                                variant="outlined"
                                name="phoneNumber" value={values.phoneNumber}
                                onChange={handleInputChange} />
                            <Controls.Input
                                label="Secondary Number"
                                name="secondaryNumber"
                                variant="outlined"
                                value={values.secondaryNumber}
                                onChange={handleInputChange} />
                        </Grid>
                        <Grid item xs={6}>
                            <Controls.Input
                                label="street"
                                name="street"
                                value={values.Address.street}
                                onChange={handleInputChange} />
                            <Controls.Input
                                label="City"
                                name="city" value={values.Address.city}
                                onChange={handleInputChange} />
                            <Controls.Input
                                label="House Number"
                                name="housenumber"
                                value={values.Address.houseNumber}
                                onChange={handleInputChange} />
                            <Grid item xs={12}>
                                <div className={classes.buttonGrp}>
                                    <Button variant="filled" color="primary" type="submit">Submit</Button>
                                    <Button variant="filled" color="primary" onClick={resetForm}>Clear</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Form>
            </Paper>
        </>
    )
}



export default withErrorBoundary(Customer, axios);