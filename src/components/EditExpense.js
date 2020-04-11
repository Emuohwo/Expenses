import React from 'react';


const EditExpensesPage = (props) => {
    console.log(props);
    
    return  (
        <div>
            This is from the EDIT expenses with ID: {props.match.params.id}
        </div>
    );
};

export default EditExpensesPage;
