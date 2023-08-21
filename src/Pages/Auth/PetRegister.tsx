
import React, { useEffect } from "react"
import Container from "../../components/Customs/Container";
import Form from "../../components/Customs/Form";

interface IRegPet {
    pet_name: string;
    name: string;
    email: string;
}

interface IRegEPet {
    pet_name: string;
    name: string;
    email: string;
    status: boolean;
}

const INITIAL_STATE = {
    pet_name: "",
    name: "",
    email: "",
}

const PetRegister: React.FC = () => {
    const [pet, setPet] = React.useState<IRegPet>(INITIAL_STATE)
    const [pet_E, setPet_E] = React.useState<IRegEPet>({
        pet_name: "",
        name: "",
        email: "",
        status: false
    })

    const entery = (event: any) => {
        const field_value = event.target.value
        const field_name = event.target.name

        if (field_value.trim().length === 0) {
            setPet_E(prev => {
                return {
                    ...prev,
                    [field_name]: `${field_name.split("_").join(' ').toUpperCase()} is required.`
                }
            })
        } else {
            setPet_E(prev => {
                return {
                    ...prev,
                    [field_name]: ``
                }
            })
        }
        setPet(prev => {
            return {
                ...prev,
                [field_name]: field_value
            }
        })


    }

    const registerPet = (e: any) => {
        e.preventDefault()
        // @ts-ignore
        var err;
        for (const item in pet) {
            // Alert msg using DOM-Manipulation for Form
            // @ts-ignore
            if (pet[item].trim().length === 0) {
                err = true
                // Alert msg for input using state
                setPet_E(prev => {
                    return {
                        ...prev,
                        [item]: `${item.split("_").join(' ').toUpperCase()} is required.`
                    }
                })
                if (!document.getElementById('all-req-msg')) {
                    const reqBox: any = document.getElementById('req-msg')
                    let el = document.createElement('p')
                    el.setAttribute('id', 'all-req-msg')
                    let req_msg_con = document.createTextNode('All fields are required*')
                    el.style.color = 'red'
                    el.appendChild(req_msg_con)
                    reqBox.appendChild(el)
                    // return false
                }
            } else {
                if (document.getElementById('all-req-msg')) {
                    document.getElementById('all-req-msg')?.remove()
                }
            }
        }

        if (!err) {
            let reg_pets = localStorage.getItem('registered_pets')
            let _reg_pets = reg_pets ? JSON.parse(reg_pets) : []
            _reg_pets.push(pet)
            const mod_reg_pets = JSON.stringify(_reg_pets)
            localStorage.setItem('registered_pets', mod_reg_pets)
            setPet(INITIAL_STATE)
        }
    }

    return (
        <Container>
            <Form onSubmit={registerPet} name="pet_store" title="Pet Register">
                <div id="req-msg"></div>
                <input name="pet_name" value={pet['pet_name']} className="k-req-inp" type="text" onChange={entery} placeholder="Pet name" />
                <p style={textDanger}>{pet_E['pet_name']}</p>
                <input name="name" value={pet['name']} className="k-req-inp" type="text" onChange={entery} placeholder="Customer Name" />
                <p style={textDanger}>{pet_E['name']}</p>
                <input name="email" value={pet['email']} className="k-req-inp" type="email" onChange={entery} placeholder="E-mail Address" />
                <p style={textDanger}>{pet_E['email']}</p>
                <button>Register</button>
            </Form>
        </Container>
    )
}

const textDanger = {
    color: "red"
}

export default PetRegister