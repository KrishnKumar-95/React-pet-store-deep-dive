import { ReactElement, ReactNode } from "react";
import classes from "./Form.module.css"

interface IForm {
    name: string;
    title: string;
    children: ReactNode | ReactElement;
    onSubmit?: any;
}

const Form = (props: IForm) => {
    return (
        <form onSubmit={props.onSubmit} className={classes.form} name={props.name}>
            <h2>{props.title}</h2>
            <section>
                {props.children}
            </section>
        </form>
    )
}

export default Form