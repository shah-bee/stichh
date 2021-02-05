import React from 'react'
import { fStore } from '../../firebase';
import { useForm, Form } from '../../Hooks/useForm'
import { Order } from '../../Models/Order'
import Controls from '../../Controls/Controls'
import StichType from '../../Constants/Constants'
import * as service from '../../Services/StichTypes'
import { useParams } from 'react-router-dom'
import Shirt from '../Measurement/Shirt';
import { Button, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Trouser from '../Measurement/Trouser';
import PageHeader from '../shared/PageHeader';

export default function NewOrder() {

    const useStyles = makeStyles(theme => ({
        root: {
            padding: theme.spacing(2)
        }
    }));

    const { values, setValues, resetForm, handleInputChange } = useForm(Order);
    const { customerId } = useParams();
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //TODO: Find customer doc and update the orders
        setValues({ ...values, customerId: customerId });
        const docRef = await fStore.collection('Orders').add(values);
        if (docRef.id) {
            console.log(docRef);
        }
    }

    return (
        <>
            <PageHeader title={"New Order"} description={"Add a new order"}>

            </PageHeader>

            <Grid container>
                <Grid item xs={6}>
                    <Form action={handleSubmit}>
                        <Paper elevation={4} className={classes.root}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Controls.Select
                                        label="Type"
                                        name="stichType"
                                        value={values.stichType}
                                        options={service.getStichTypes()}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Controls.MuiDate
                                        name="deliveryDate"
                                        label="Delivery Date"
                                        value={values.deliveryDate}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {values.stichType === "Shirt" &&
                                        <Shirt></Shirt>
                                    }
                                    {values.stichType === "Trouser" &&
                                        <Trouser></Trouser>
                                    }
                                </Grid>
                                <Button color="primary" variant="contained" type="submit">Submit</Button>
                            </Grid>
                        </Paper>
                    </Form>
                </Grid>
            </Grid >
        </>
    )
}
