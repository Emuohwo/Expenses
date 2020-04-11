import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';


const Dashboard = () => (
    <div>
        This is from the Dashboard component
    </div>
)

const AddExpenses = () => (
    <div>
        This is from the add expenses component
    </div>
) 

const EditExpensesPage = () => (
    <div>
        This is from the EDIT expenses component
    </div>
) 

const HelpPage = () => (
    <div>
        This is from the HELP component
    </div>
) 
const NotFoundPage = () => (
    <div>
        404!
    </div>
)   


const routes = (
    <BrowserRouter>
        <Switch>
        <Route exact={true} path="/" component={Dashboard} />
        <Route path="/add" component={AddExpenses} />
        <Route path="/edit" component={EditExpensesPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));