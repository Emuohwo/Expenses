import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';   // history@4.7.0
// import { createBrowserHistory } from 'history'; 

import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
 
 export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route exact={true} path="/" component={LoginPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/add" component={CreateExpense} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;














// import React from 'react';
// import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

// import LoginPage from '../components/LoginPage';
// import AppRouter from './AppRouter';

// const AllRouter = () => (
//     <div>
//       <BrowserRouter>
//        <Switch>
//        <Route exact={true} path="/" component={LoginPage} />
//        <Route exact={true} path="/dashboard" component={AppRouter} />
//        </Switch>
//       </BrowserRouter>
//     </div>
// )

// export default AllRouter;
