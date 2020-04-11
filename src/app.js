import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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
        404! - <Link to="/">Go Home</Link>
    </div>
)   


const Header = () => (
    <div>
        <header>
          <h1>Expensify</h1>
          <NavLink exact={true} activeClassName="is-open" to="/">Home</NavLink>
          <NavLink activeClassName="is-open" to="/add">Add Expense</NavLink>
          <NavLink activeClassName="is-open" to="/edit">Edit Expense</NavLink>
          <NavLink activeClassName="is-open" to="/help">Help</NavLink>
        </header>
    </div>
)  

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact={true} path="/" component={Dashboard} />
                <Route path="/add" component={AddExpenses} />
                <Route path="/edit" component={EditExpensesPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));