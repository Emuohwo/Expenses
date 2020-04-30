import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <div>
        <header>
          <h1>Expensify</h1>
          <NavLink exact={true} activeClassName="is-open" to="/">Home</NavLink>
          <NavLink activeClassName="is-open" to="/add">Add Expense</NavLink>
          <button onClick={startLogout}>Log Out</button>
        </header>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
