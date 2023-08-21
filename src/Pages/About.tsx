import classes from "./About.module.css"

const About: React.FC = () => {
    return (
        <main className={classes.about}>
            {/* <h1>About</h1> */}
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
            </div>
        </main>
    )
}

export default About