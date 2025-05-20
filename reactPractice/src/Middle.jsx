import React from 'react'
import users from './Users'

function Middle() {
  return (
    <div>
      {users.map((user) => {
        return (
          <div style={{backgroundColor: 'beige', paddingBlock: '0.5rem', paddingLeft: '0.8rem' }}>
            <h5>{user.role}</h5>
            <p>{user.location}</p>
            <img src={user.image} />
          </div>
        );
      })}
    </div>
  );
}
export default Middle