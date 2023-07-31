import React from "react"
import './NavBarStyle.css';


export default function NavBar() {
    return(
        <div class="top-nav">
            <a class="active" href="">Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
            <a href="">Sign In</a>
            <a href="">Login</a>
        </div>
    )
}