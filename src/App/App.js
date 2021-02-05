import React, { useState, useEffect } from 'react'
import Header from '../Components/shared/Header'
import SideMenu from '../Components/shared/SideMenu'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import { createMuiTheme, CssBaseline } from '@material-ui/core'
import Customer from '../Components/Customer/Customer';
import Customers from '../Components/Customer/Customers';
import { Route, Link, Switch } from 'react-router-dom';
import { Auth } from '../firebase'
import Authenticate from '../Components/Authenticate'
import { UserContext } from '../UserContext';
import CustomerDetails from '../Components/Customer/CustomerDetails'
import EditCustomer from '../Components/Customer/EditCustomer'
import Orders from '../Components/Orders/Orders'
import NewOrder from '../Components/Orders/NewOrder'

export function App() {

  const classes = useStyles();
  const [user, setUser] = useState({ isLoggedIn: false, email: '', photoUrl: '' });

  function onAuthChange(callback) {
    Auth.onAuthStateChanged(user => {
      if (user) {
        callback({ isLoggedIn: true, email: user.email, photoUrl: user.photoURL });
      } else {
        callback({ user });
      }
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* <SideMenu></SideMenu> */}
      <div className={classes.appMain}>
        <UserContext.Provider value={user}>
          <Header></Header>
          <Switch>
            <Route path='/orders/add/:customerId'>
                <NewOrder></NewOrder>
            </Route>
            <Route path='/orders/:customerId'>
                <Orders></Orders>
            </Route>
            <Route path='/customer/edit/:customerId'>
              <EditCustomer />
            </Route>
            <Route path='/customer'>
              <Customer />
            </Route>
            <Route path='/customers'>
              <Customers />
            </Route>
            <Route path='/CustomerDetails/:customerId'>
              <CustomerDetails />
            </Route>
            <Route exact path='/'>
              <Authenticate />
            </Route>
          </Switch>
        </UserContext.Provider>
      </div>
      <CssBaseline></CssBaseline>
    </ThemeProvider>

  );
}

export default App;


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
