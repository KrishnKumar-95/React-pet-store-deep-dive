import { Link } from "react-router-dom"
import classes from "./Services.module.css"

const Services: React.FC = () => {
    return (
        <main className={classes.services}>
            <section className={classes.left}>
                <h2>Pet register</h2>
                <Link to='/petregister'>
                    <div>
                        <img src="/doggo.jpg" alt="doggo" />
                    </div>
                </Link>
            </section>
            <section className={classes.right}>
                <h2>All services</h2>
                <div>
                    <img src="/dogsalon.jpg" alt="doggo" />
                </div>
            </section>
        </main>
    )
}

export default Services 