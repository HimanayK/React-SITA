import React from 'react'

function Nav() {
    let anchorStyle = {
        textDecoration: 'none'
    }
    return (
        <nav style = {{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '3rem',
            padding:'1.5rem',
            backgroundColor: 'pink'

        }}>
            <a style = {anchorStyle} href="">Home</a>
            <a style = {anchorStyle} href="">About</a>
            <a style = {anchorStyle} href="">Login</a>
            <a style = {anchorStyle} href="">Contact</a>
        </nav>
    )
}

export default Nav