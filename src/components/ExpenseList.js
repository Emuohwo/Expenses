import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
      {
          props.expenses.length === 0 ? (
              <p>No expenses</p>
          ) : (
              props.expenses.map((expense) => {
                  return <ExpensesListItem key={expense.id} {...expense} />
              })
          )
      }
        
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default  connect(mapStateToProps)(ExpenseList);

