import { createStore } from 'redux';

// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });
// destructured 
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count} = {}) => ({
    type: 'SET',
    count
})

const countReducer = ((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
            break;
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
            break;
        case 'RESET':
            return {
                count: 0
            }
            break;
        case 'SET':
            return {
                count: action.count
            }
            break;
        default:
            return state;
            break;
    }
    
});

const store = createStore(countReducer)

store.subscribe(() => {
    console.log(store.getState());
})

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })
// store.dispatch({
//     type: 'INCREMENT'
// })
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(resetCount())

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 100 }))