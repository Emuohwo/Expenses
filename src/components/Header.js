import React from 'react';
import { NavLink } from 'react-router-dom';

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
);

export default Header;
