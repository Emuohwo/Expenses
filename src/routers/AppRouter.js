import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';   // history@4.7.0

import Dashboard from '../components/Dashboard';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Header from '../components/Header';
 
 export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute exact={true} path="/" component={LoginPage} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/add" component={CreateExpense} />
                <PrivateRoute path="/edit/:id" component={EditExpense} />
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
