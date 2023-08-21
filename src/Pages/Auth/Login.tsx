import React from "react"
import Container from "../../components/Customs/Container";
import Form from "../../components/Customs/Form";

interface ILoginUser {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [user, setUser] = React.useState<ILoginUser>({
        email: "",
        password: ""
    })

    return (
        <Container>
            <Form name="login" title="Login">
                <input className="k-req-inp" type="email" placeholder="E-mail Address" />
                <input className="k-req-inp" type="password" placeholder="Password" />
                <button>Login</button>
            </Form>
        </Container>
    )
}

export default Login