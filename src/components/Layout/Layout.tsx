import { Link, Outlet, useNavigate } from "react-router-dom"
import classes from "./Layout.module.css"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/FirebaseConfig"

const Layout = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate("/login")
        })
    }

    const [user] = useAuthState(auth);

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
                    <Link to="/all-services">Services</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>


            {user ? <div className={classes.logout}>
                <button onClick={handleLogout}>Logout</button>
            </div> : <></>}
        </nav>
        <Outlet />
    </>
}

export default Layout