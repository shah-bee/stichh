import { Paper, Card, Grid, CircularProgress, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState, useEffect } from 'react'
import { fStore } from '../../firebase';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    },
    cardDetails: {
        marginTop: theme.spacing(4),
        width: '100%',
        backgroundColor: '#f4f4fd',
    },
    linkDecoration: {
        textDecoration: "none"
    }
}));

export default function Customers() {

    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const custRef = await fStore.collection('Customers').get();
            const cust = custRef.docs.map(doc => { return { id: doc.id, ...doc.data() }; });
            setCustomers(cust);
            if(cust){
                setLoading(false);
            }
        })()
        return () => {
            setLoading(false);
        }
    }, []);

    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            {!loading &&
                <Grid container>
                    <Grid item xs={12} >
                        {customers.map((cust, key) => (
                            <ListItem key={key} className={classes.cardDetails}>
                                <Link to={`/CustomerDetails/${cust.id}`} className={classes.linkDecoration}>{cust.firstName}</Link>
                            </ListItem>
                        ))}
                    </Grid>
                </Grid>
            }
            {loading &&
                <CircularProgress></CircularProgress>
            }
        </Paper>

    )
}
