import { Paper, Card, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState, useEffect } from 'react'
import axios from '../../Axios/customer-axios'
import { fStore } from '../../firebase';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    },
    cardDetails: {
        padding: theme.spacing(4),
        width: '50%',
        backgroundColor: '#f4f4fd'
    }
}));

export default function Customers() {

    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const customer = {
        id: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        secondaryNumber: '',
        Address: {
            street: '',
            city: '',
            houseNumber: ''
        },
        photo: ''
    }

    useEffect(() => {
        (async ()=> {
            setLoading(true);
            const custRef = await fStore.collection('Customers').get();
            const cust = custRef.docs.map(doc => { return { id: doc.id, ...doc.data() }; });

            setCustomers(cust);
        })()
        return () => {
            setLoading(false);
        }
    }, []);

    const classes = useStyles();
    return (

        <Paper className={classes.root}>
            <Grid container>
                <Grid item xs={12} >
                    {customers.map((cust, key) => (
                        <Card key={key} className={classes.cardDetails}>{cust.firstName}</Card>
                    ))}
                </Grid>
            </Grid>
        </Paper>

    )
}
