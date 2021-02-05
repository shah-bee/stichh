import { Card, Typography, Paper, Grid, IconButton } from '@material-ui/core';
import DetailsIcon from '@material-ui/icons/Details';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import { useParams } from 'react-router-dom'
import { fStore } from '../../firebase'
import PageHeader from '../shared/PageHeader'
import CustomerModel from '../../Models/Customer'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: '10px',
        fontFamily: "Vazir, sans-serif",
        width: "60%",
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },

    editIcon: {
        float: "right"
    },

    orders:{
        fontSize: '10px'
    }

}));

function CustomerDetails(props) {

    const [customer, setCustomer] = useState({ CustomerModel });
    const [loading, setLoading] = useState(true);
    const { customerId } = useParams();

    useEffect(() => {
        (async () => {
            setLoading(true);
            const docRef = await fStore.collection("Customers").get();
            const customer = docRef.docs.filter(doc => doc.id === customerId)[0].data();
            setCustomer({ ...customer });
            if (customer) {
                setLoading(false);
            }
        })()
        return () => {
        }
    }, [])

    const classes = useStyles();

    return (
        <>
            <PageHeader
                icon={<DetailsIcon></DetailsIcon>}
                title="Customer details"
                description="Customer details!"
            >

            </PageHeader>
            {!loading &&
                <>
                    <Card className={classes.root}>
                        <IconButton className={classes.editIcon}>
                            <Link to={`/customer/edit/${customerId}`}><EditIcon /></Link>
                        </IconButton>
                        <IconButton className={classes.editIcon}>
                            <Link to={`/orders/${customerId}`}><AddShoppingCartIcon></AddShoppingCartIcon></Link>
                        </IconButton>
                        <Grid container spacing={2} alignContent="center">
                            <Grid item xs={6}>
                                <Typography>Name</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>{customer.firstName} {customer.lastName}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Date of Birth</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>{customer.lastName} {customer.firstName}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Email</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>{customer.email}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Address</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>
                                    {customer.Address.houseNumber},{customer.Address.street},
                                {customer.Address.city}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography> Phone Number </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>{customer.phoneNumber}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Secondary Number</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>{customer.secondaryNumber}</Typography>
                            </Grid>
                        </Grid>
                    </Card>
                </>
            }
        </>
    )


}

export default CustomerDetails
