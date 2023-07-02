import React from 'react'

export default function Navbar()
{
    React.useEffect(()=>{init();});

    return (
        <nav><a className="1 active" href="#about">About</a><a className="2" href="#work">Work</a><a className="3" href="#blog">Blog</a><a className="4" href="#long">Verylongtext</a><span id="navLine"></span></nav>
    )
}