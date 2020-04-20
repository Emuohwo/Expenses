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
});
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
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
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
            break;
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
            break;
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
            break;
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
            break;
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    // console.log(store.getState());
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
    
});

const expenseOne = store.dispatch(addExpense({amount: 100, description: 'Rent', createdAt: -21000}))
const expenseTwo = store.dispatch(addExpense({amount: 300, description: 'Coffe', note: 'gold mine', createdAt: -1000}))
// // console.log(expenseOne);

// store.dispatch(removeExpense({id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, {  amount: 600} ));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

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
