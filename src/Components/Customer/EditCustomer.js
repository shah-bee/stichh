import React, { useState, useEffect } from 'react'
import {
    TextField, Button,
    ButtonGroup, Grid, Paper
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { fStore } from '../../firebase'
import PageHeader from '../shared/PageHeader'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Controls from '../../Controls/Controls'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    buttonGrp: {
        display: "flex",
        float: "left",
        paddingTop: theme.spacing(2)
    },
    root: {
        '& .MuiFormControl-root': {
            margin: theme.spacing(1),
            width: '80%',
        },
    },
    PageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    },
    btn: {
        marginLeft: theme.spacing(3)
    }
}));

export default function EditCustomer() {

    const { customerId } = useParams();
    const [customer, setCustomer] = useState({});
    const [loading, setLoading] = useState(true);
    const [initialData, setInitialData] = useState({});

    const classes = useStyles();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const docRef = fStore.collection('Customers').doc(customerId);
        if (docRef.id) {
            console.log(docRef);
            try {
              await docRef.update(customer);
            }
            catch (error) {
                console.error(error);
                setLoading(false);
            }
            finally{
                setLoading(false);
            }
        }
    }

    useEffect(() => {
        (async () => {
            setLoading(true);
            const docRef = await fStore.collection("Customers").get();
            const data = docRef.docs.filter(doc => doc.id === customerId)[0].data();
            setCustomer({ ...data });
            setInitialData({...data});
            if (customer) {
                setLoading(false);
            }
        })()
        return () => {
        }
    }, []);

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    }

    const handleAddressChange = (e) => {
        setCustomer({
            ...customer,
            Address: {
                ...customer.Address,
                [e.target.name]: e.target.value
            },
        });
    };


    const handleCancel = () => {
        setCustomer(initialData);
    }

    return (
        <>
            <PageHeader
                icon={<PersonAddIcon></PersonAddIcon>}
                title="Customer"
                description="Edit customer details!"
            >
            </PageHeader>
            <Paper className={classes.PageContent}>
                {!loading && customer != null &&
                    <form onSubmit={handleSubmit} className={classes.root}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Controls.Input
                                    label="First Name"
                                    name="firstName"
                                    value={customer.firstName}
                                    onChange={handleChange} />
                                <Controls.Input
                                    label="Last Name"
                                    name="lastName"
                                    value={customer.lastName}
                                    onChange={handleChange} />
                                <Controls.Input
                                    label="Primary Number"
                                    name="phoneNumber" value={customer.phoneNumber}
                                    onChange={handleChange} />
                                <Controls.Input
                                    label="Secondary Number"
                                    name="secondaryNumber"
                                    value={customer.secondaryNumber}
                                    onChange={handleChange} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="street"
                                    name="street"
                                    value={customer.Address.street}
                                    onChange={handleAddressChange} />
                                <TextField
                                    label="City"
                                    name="city"
                                    value={customer.Address.city}
                                    onChange={handleAddressChange} />
                                <TextField
                                    label="House Number"
                                    name="houseNumber"
                                    value={customer.Address.houseNumber}
                                    onChange={handleAddressChange} />
                                <Grid item xs={12}>
                                    <div className={classes.buttonGrp}>
                                        <Button color="primary" variant="contained" type="submit">Update</Button>
                                        <Button color="primary" className={classes.btn} variant="contained" onClick={handleCancel}>Cancel</Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                }
            </Paper>
        </>
    )
}
