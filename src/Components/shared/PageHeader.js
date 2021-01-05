import { Card, Paper, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdf6',
    },
    pageHeader: {
        padding: theme.spacing(4),
        display: 'flex',
        marginBotton: theme.spacing(3)
    },
    pageIcon: {
        padding: theme.spacing(2),
        display: 'inline-block',
        backgroundColor: '#fff'
    },
    pageTitle: {
        paddingLeft: theme.spacing(3),
        '& .MuiTypography-subtitle1':{
            opacity: '0.3'
        }
    }
}));

export default function PageHeader(props) {
    const { title, icon, description } = props;
    const classes = useStyles();
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>

                <div className={classes.pageTitle}>
                    <Typography variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" component="h6">
                        {description}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}
