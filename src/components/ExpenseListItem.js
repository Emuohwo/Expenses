import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpensesListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
       <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
       <p>
           N{numeral(amount/ 100).format('N0,0.00')} -  
           {moment(createdAt).format('MMM Do, YYYY')}
       </p>
    </div>
);

export default ExpensesListItem;


