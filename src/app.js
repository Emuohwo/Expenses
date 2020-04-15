import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/style.scss';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill'}))
store.dispatch(addExpense({ description: 'Gas Bill'}));
store.dispatch(setTextFilter('water'))

// store.subscribe(() => {
    const state = store.getState()
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpense);
    
// })


ReactDOM.render(<AppRouter />, document.getElementById('app'));