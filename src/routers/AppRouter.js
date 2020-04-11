import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
  

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact={true} path="/" component={Dashboard} />
                <Route path="/add" component={CreateExpense} />
                <Route path="/edit" component={EditExpense} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;

