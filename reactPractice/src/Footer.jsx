import React from 'react'

function Footer(info) {
    return(
        <div>
            <h1>{info.message} {info.size} {info.arr}</h1>
        </div>
    )
}

export default Footer
