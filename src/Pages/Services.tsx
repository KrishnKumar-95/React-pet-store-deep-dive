import { Link, useNavigate } from "react-router-dom"
import classes from "./Services.module.css"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../components/Config/FirebaseConfig";
import { useEffect } from "react";


const Services: React.FC = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (!user) {
    //         navigate("/login")
    //     }
    // },[])

    return (
        <main className={classes.services}>
            <section className={classes.left}>
                <h2>Pet register</h2>
                <div>
                    <Link to='/petregister'>
                        <img src="/doggo.jpg" alt="doggo" />
                    </Link>
                </div>
            </section>
            <section className={classes.right}>
                <h2>All services</h2>
                <div>
                    <Link to="/all-services" >
                        <img src="/dogsalon.jpg" alt="doggo" />
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Services 