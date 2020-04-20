// EXPENSES REDUCER
const defaultExpensesReducerState = [];

// const expensesReducer = (state = defaultExpensesReducerState, action) => {
export default (state = defaultExpensesReducerState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
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
};
