import classes from "./outServices.module.css"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../components/Config/FirebaseConfig";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

const OutServices: React.FC = () => {


    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    },[])

    const FakeData = [
        {
            name: "Pet Shower",
            price: 200,
            img: "/pet-shower.jpg"
        },
        {
            name: "Nail Cutting",
            price: 70,
            img: "/nail-cutting.jpg"
        },
        {
            name: "Surgery",
            price: 500,
            img: "/pet-surgery.jpg"
        },
    ]


    return (
        <main className={classes.outBox}>
            <h2>Our Services</h2>
            <div className={classes.servicesshow}>
                {
                    FakeData.map((service, index) => {
                        return (
                            <div key={index} className={classes.box}>
                                <div>
                                    <img width={300} src={service.img} alt={service.name} />
                                </div>
                                <div className={classes.price}>
                                    <div>{service.name}</div>
                                    <div>Rs {service.price}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default OutServices