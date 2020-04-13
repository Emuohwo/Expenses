import { createStore } from 'redux';

const store = createStore((state = {count: 0}, action) => {
    // console.log('running dispatch');
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            }
            break;
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
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

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})
store.dispatch({
    type: 'INCREMENT'
})
store.dispatch({
    type: 'RESET'
})
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
})
store.dispatch({
    type: 'DECREMENT'
})

store.dispatch({
    type: 'SET',
    count: 101
})