import React from 'react'
import users from './Users'

function Content(){
  return(
    <div style={{ backgroundColor: 'Pink', paddingBlock: '0.5rem', paddingLeft: '0.8rem' }}>
      {users.map((user)=> {
        return(
          <div>
          <h2>{user.id}</h2>
          <h3>{user.name}</h3>
          <h4>{user.email}</h4>
        </div>
        )
      })
     }
    </div>
  )
}
export default Content