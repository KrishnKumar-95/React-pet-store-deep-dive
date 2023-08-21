import { Link, Outlet } from "react-router-dom"
import classes from "./Layout.module.css"

const Layout = () => {
    return <>
        <nav className={classes.navbar}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
}

export default Layout