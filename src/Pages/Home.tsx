import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../components/Config/FirebaseConfig"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Home = () => {

    const [user, loading, error] = useAuthState(auth)
    const navigate =  useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    },[user])

    return (
        <div>
            {
                loading ?
                    (<div>Loading...</div>) :
                    (
                        user
                            ? <p>Show Logout button</p>
                            : <button onClick={() => navigate('/login')}>Login</button>
                    )
            }
        </div>
    )
}

export default Home