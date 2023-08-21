import React, { useEffect } from "react"
import Container from "../../components/Customs/Container";
import classes from "./Login.module.css"
import Form from "../../components/Customs/Form";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../components/Config/FirebaseConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from "firebase/auth"

interface ILoginUser {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    // manual user
    const [_user, setUser] = React.useState<ILoginUser>({
        email: "",
        password: ""
    })
    // manual error
    const [E_user, setEUser] = React.useState<ILoginUser>({
        email: "",
        password: ""
    })

    const location = useLocation()
    const { search } = location

    // google user
    const [g_user, setG_User] = React.useState({
        email: "",
    })
    // google error
    const [g_Euser, setG_EUser] = React.useState({
        email: "",
    })

    const [loading, setLoading] = React.useState<boolean>(false)

    const [loginErr, setLoginErr] = React.useState<string>('')

    const [info, setInfo] = React.useState<string>('')

    const [mode, setMode] = React.useState('google')

    const [user] = useAuthState(auth)

    const navigate = useNavigate()

    const [initialLoading, setInitialLoading] = React.useState(false)
    const [initialErr, setInitialErr] = React.useState("")

    useEffect(() => {
        if (user) {
            navigate('/services')
        } else {
            // not sigend in 
            if (isSignInWithEmailLink(auth, window.location.href)) {
                let email: any = localStorage.getItem("google_user")
                if (!email) {
                    email = window.prompt("Provide your email address")
                }
                setInitialLoading(true)
                signInWithEmailLink(auth, email, window.location.href)
                    .then((result) => {
                        // console.log(result.user);
                        localStorage.removeItem("google_user")
                        setInitialErr('')
                        navigate('/services')
                    }).catch((err) => {
                        setInitialErr(err.message)
                    }).finally(() => {
                        setInitialLoading(false)
                        navigate("/login")
                    })
            } else {
                // console.log('');

            }
        }
    }, [navigate, user, search])

    const inputChange = (event: any) => {
        const field_value = event.target.value
        const field_name = event.target.name

        if (field_value.trim().length === 0) {
            if (mode === 'google') {
                setG_EUser(prev => {
                    return {
                        ...prev,
                        [field_name]: `${field_name.split("_").join(' ').toUpperCase()} is required.`
                    }
                })
            } else {
                setEUser(prev => {
                    return {
                        ...prev,
                        [field_name]: `${field_name.split("_").join(' ').toUpperCase()} is required.`
                    }
                })
            }
        } else {
            if (mode === 'google') {
                setG_EUser(prev => {
                    return {
                        ...prev,
                        [field_name]: ``
                    }
                })
            } else {
                setEUser(prev => {
                    return {
                        ...prev,
                        [field_name]: ``
                    }
                })
            }
        }

        if (mode === "google") {
            setG_User((prev) => {
                return {
                    ...prev,
                    [field_name]: field_value
                }
            })
        } else {
            setUser((prev) => {
                return {
                    ...prev,
                    [field_name]: field_value
                }
            })
        }
    }

    const googleLogin = (e: any) => {
        e.preventDefault()
        setLoading(true)
        sendSignInLinkToEmail(auth, g_user.email, {
            url: "http://localhost:3000/login",
            handleCodeInApp: true
        }).then(() => {
            localStorage.setItem('google_user', g_user.email)
            setLoginErr('')
            setInfo('Check your mailbox use link to login.')
        }).catch((err) => {
            setLoginErr(err.message)
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <Container>
            <div className={classes.selector}>
                <div className={classes.google} style={{ backgroundColor: mode === 'google' ? "#5d54e1" : "#666666" }} onClick={() => setMode('google')}>Google Login</div>
                <div className={classes.manual} style={{ backgroundColor: mode === 'manual' ? "#5d54e1" : "#666666" }} onClick={() => setMode('manual')}>Manual Login</div>
            </div>
            {
                mode === 'google'
                    ? (
                        initialLoading ? <div>Loading...</div> :
                            initialErr
                                ? <div>{initialErr}</div>
                                : (user
                                    ? (<div>Please wait</div>)
                                    : (<div>
                                        <Form name="google" title="Google Login">
                                            <input name="email" type="email" value={g_user.email} placeholder="Enter your email" onChange={inputChange} />
                                            <p style={ErrClass}>{g_Euser.email}</p>
                                            <button onClick={googleLogin}>
                                                {
                                                    loading
                                                        ? <span>Logging you in</span>
                                                        : (
                                                            <span>Login</span>
                                                        )
                                                }
                                            </button>
                                        </Form>
                                    </div>
                                    )
                                )
                    )
                    : (
                        <Form name="login" title="Manual login">
                            <input className="k-req-inp" value={_user.email} name="email" type="email" placeholder="E-mail Address" onChange={inputChange} />
                            <p style={ErrClass}>{E_user.email}</p>
                            <input className="k-req-inp" value={_user.password} name="password" type="password" placeholder="Password" onChange={inputChange} />
                            <p style={ErrClass}>{E_user.password}</p>
                            <button>
                                {
                                    loading
                                        ? <span>Logging you in</span>
                                        : (
                                            <span>Login</span>
                                        )
                                }
                            </button>
                        </Form>
                    )
            }

            {
                loginErr !== '' && <div>{loginErr}</div>
            }
            {
                info !== '' && <div style={{ textAlign: "center" }}>{info}</div>
            }

        </Container>
    )
}

const ErrClass = {
    color: "red",
    marginTop: "5px"
}

export default Login