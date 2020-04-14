import { createStore, combineReducers } from 'redux';
import {v4 as uuidv4 } from 'uuid';

// ADD_EXPENSE
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})
//  REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
// EXPENSES REDUCER
const defaultExpensesReducerState = [];

const expensesReducer = (state = defaultExpensesReducerState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
        //    return state.concat(action.expense)
           return [
               ...state,
               action.expense
           ]
           break;
        case 'REMOVE_EXPENSE':
           return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else{
                    return expense;
                }
            })
        default:
            return state;
    }
}

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
// SORT_BY_DATE 
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE
// FILTER REDUCER
const defaultFilterReducerState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = defaultFilterReducerState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
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

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({amount: 400, note: 'gold mine'}))
const expenseTwo = store.dispatch(addExpense({amount: 400, description: 'Books', note: 'gold mine'}))
// console.log(expenseOne);

store.dispatch(removeExpense({id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, {  amount: 600} ));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

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
