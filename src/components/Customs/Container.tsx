import { ReactElement, ReactNode } from "react";
import classes from "./Container.module.css"

interface IContainer {
    children: ReactNode | ReactElement;
}

const Container = (props: IContainer) => {
    return (
        <div className={classes.container}>
            <div className={classes.container_card} >
                {props.children}
            </div>
        </div>
    )
}

export default Container;