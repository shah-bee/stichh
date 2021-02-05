import React, { useState, useEffect } from 'react'
import { fStore } from '../../firebase'
import { useParams } from 'react-router-dom'
import { IconButton, Paper, Card, Grid, CardActions, Button, CardContent } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';



export default function Orders(props) {

    const useStyles = makeStyles(theme => ({
        root: {
            padding: theme.spacing(2),
            margin: theme.spacing(1)
        }
    }));

    const { customerId } = useParams();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const classes = useStyles();
    useEffect(() => {
        (async () => { 
            setLoading(true);
            const docRef = await fStore.collection("Orders").where('customerId', '==', customerId).get();
            if (docRef.docs.length > 0) {
                const orders = docRef.docs.map(doc => { return { id: doc.id, ...doc.data() } });
                if (orders.length > 0) {
                    setOrders(orders);
                    setLoading(false);
                }
            }

        })()
        return () => {

        }
    }, [customerId])

    return (
        <>
            <IconButton>
                <Link to={`/orders/add/${customerId}`}><AddIcon>Add</AddIcon></Link>
            </IconButton>
            {!loading &&
                <Grid container>
                    {orders.map(o => (<Grid item xs={2}>
                        <Card elevation={4} variant="outlined" className={classes.root}>
                            <CardContent>
                            {
                                o.stichType
                            }
                            </CardContent>
                            <CardActions>
                                <Button color="primary">Details</Button>
                            </CardActions>
                        </Card>
                    </Grid>))}
                </Grid>
            }
        </>
    )

}
