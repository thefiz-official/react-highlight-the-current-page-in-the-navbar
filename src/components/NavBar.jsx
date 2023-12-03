import { NavLink } from "react-router-dom"

function NavBar() {

    return <nav className="nav">
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blog</NavLink>
            </li>
        </ul>
    </nav>

}

export default NavBar