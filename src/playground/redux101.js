import { createStore } from 'redux';

const store = createStore((state = {count: 0}, action) => {
    console.log('running dispatch');
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
            break;
        case 'DECREMENT':
            return {
                count: state.count-1
            }
            break;
        case 'RESET':
            return {
                count: 0
            }
            break;
        default:
            return state;
            break;
    }
    
});

console.log(store.getState());

store.dispatch({
    type: 'INCREMENT'
})
store.dispatch({
    type: 'RESET'
})
store.dispatch({
    type: 'DECREMENT'
})

console.log(store.getState());
