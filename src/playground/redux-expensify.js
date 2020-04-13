import { createStore, combineReducers } from 'redux';

// EXPENSES REDUCER
const defaultExpensesReducerState = [];

const expensesReducer = (state = defaultExpensesReducerState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

// FILTER REDUCER
const defaultFilterReducerState = {
    tex: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = defaultFilterReducerState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);
console.log(store.getState());


const demoState = {
    expenses: [{
        id: 'fhhdhjhjj',
        description: 'House rent',
        note: 'This was for the month of May',
        amount: 35363,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}