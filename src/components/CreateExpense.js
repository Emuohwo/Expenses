import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses'


export class CreateExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
              <h1>Add Expense</h1>
              <ExpenseForm
                onSubmit={this.onSubmit}
              />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(CreateExpense);



// const CreateExpense = (props) => (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm
//             onSubmit={(expense) => {
//                 console.log(expense);
//                 props.dispatch(addExpense(expense))
//                 props.history.push('/dashboard')
//             }} 
//         />
//     </div>
// );