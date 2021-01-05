import React, { Component } from 'react'
import Header from '../Components/shared/Header'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Footer from '../Components/shared/Footer'
import Home from '../Components/Home'
import SideMenu from '../Components/shared/SideMenu'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import { createMuiTheme, CssBaseline } from '@material-ui/core'
import PageHeader from '../Components/shared/PageHeader'
import Customer from '../Components/Customer/Customer';
import Customers from '../Components/Customer/Customers';
import { Route, Link } from 'react-router-dom';


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
});

const theme = createMuiTheme({
  palette: {
    overrides: {
      MuiAppBar: {
        root: {
          transform: 'translateZ(0)'
        }
      }
    }
  }
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu></SideMenu>
      <div className={classes.appMain}>
        <Header></Header>
        <Route path='/customer' component={Customer}></Route>
        <Route path='/customers' component={Customers}></Route>
      </div>
      <CssBaseline></CssBaseline>
    </ThemeProvider>

  )
}

export default App;