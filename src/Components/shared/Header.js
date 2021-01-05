import { Badge, Grid, IconButton, InputBase, Toolbar } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar'
import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles( theme => ({
    root: {
        backgroundColor: '#fff',
        transform: 'translateZ(0)'
    },
    searchInput: {
        padding: `0px ${theme.spacing(2)}px`,
        opacity: '0.6',
        fontSize: '0.8rem',
        '& :hover':{
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            margin: theme.spacing(1)
        }
    }
}));

export default function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.root}>
                <Grid container alignItems="center">
                    <Grid item>
                        <InputBase
                            className={classes.searchInput}
                            placeholder={"Search customer/order"}
                            startAdornment={<SearchIcon>
                            </SearchIcon>}
                        ></InputBase>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="primary">
                                <NotificationsNoneIcon fontSize="small"></NotificationsNoneIcon>
                            </Badge>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={3} color="secondary">
                                <ChatBubbleOutlineIcon fontSize="small"></ChatBubbleOutlineIcon>
                            </Badge>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <PowerSettingsNewIcon></PowerSettingsNewIcon>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
