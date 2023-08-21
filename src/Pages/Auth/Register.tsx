import React from "react"
import Container from "../../components/Customs/Container";
import Form from "../../components/Customs/Form";

interface IRegUser {
    name: string;
    email: string;
    password: string;
    confirm_pass: string;
}

const Register: React.FC = () => {
    const [user, setUser] = React.useState<IRegUser>({
        name: "",
        email: "",
        password: "",
        confirm_pass: ""
    })

    return (
        <Container>
            <Form name="registration" title="Create new account">
                <input className="k-req-inp" type="text" placeholder="Name" />
                <input className="k-req-inp" type="email" placeholder="E-mail Address" />
                <input className="k-req-inp" type="password" placeholder="Password" />
                <input className="k-req-inp" type="password" placeholder="Confirm password" />
                <button>Create</button>
            </Form>
        </Container>
    )
}

export default Register