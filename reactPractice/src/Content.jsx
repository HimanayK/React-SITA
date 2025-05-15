import React from 'react'

function Content() {
    let contentStyle = {
        color: 'green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    }
  return (
    <div style = {contentStyle}>
        <h2>I am the content</h2>
    </div>
  )
}

export default Content