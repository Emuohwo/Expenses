// Higher Order Component (HOC) - A component that renders another component
// Resuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
      <h1>Info</h1>
      <p>Info: {props.info}</p>
    </div>
);

const WithAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
          {props.isAdmin && <p>This is private info, please don't share</p>}
          <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
          {props.isAuthenticated ? (
            <WrappedComponent {...props} />
          ) : (
            <p>Please sign in to access page</p>
          )}
        </div>
    )
};

const AuthInfo = requireAuthentication(Info)

const AdminInfo = WithAdminWarning(Info)
// ReactDOM.render(<AdminInfo isAdmin={true} info="These are from the info" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are from the info" />, document.getElementById('app'))