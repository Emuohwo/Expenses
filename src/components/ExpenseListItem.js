import React from 'react';
import { connect } from 'react-redux';

const ExpensesListItem = ({ description, amount, createdAt }) => (
    <div>
       <h3>{description}</h3>
       <p>{amount} - {createdAt}</p>
    </div>
);


export default ExpensesListItem;

