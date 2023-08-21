import classes from "./About.module.css"

const About: React.FC = () => {
    return (
        <main className={classes.about}>
            <div className={classes.mypic}>
                <img src="/mypic.jpg" alt="mypic" />
            </div>
            <div className={classes.flexParent}>
                <div className={classes.flexk}>
                    <div>Name</div>
                    <div>Krishan Kumar</div>
                </div>
                <div className={classes.flexk}>
                    <div>Email</div>
                    <div>krishnkumar180895@gmail.com</div>
                </div>
                <div className={classes.flexk}>
                    <div>LinkedIn</div>
                    <div>https://www.linkedin.com/in/krishan-kumar-389430164</div>
                </div>
                <div className={classes.flexk}>
                    <div>WhatsApp</div>
                    <a href="https://wa.me/919518297071" target="_blank">+91&nbsp;9518297071</a>
                </div>
                <div className={classes.flexk}>
                    <div>GitHub</div>
                    <a href="https://github.com/KrishnKumar-95" target="_blank">GitHub</a>
                </div>
                <div className={classes.flexk}>
                    <div>This Project ( Source Code )</div>
                    <a href="https://github.com/KrishnKumar-95/React-pet-store-deep-dive" target="_blank">Pet Shop</a>
                </div>
            </div>
        </main>
    )
}

export default About