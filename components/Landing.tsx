import styles from '../styles/landing.module.css'
import Link from 'next/link'


function Landing(){
    return(
        <div className= {styles.landing} id = 'landing'>
            <div className = {styles.landingDiv}>
                <h2>Adekunle</h2>
                <h1>Mohammed</h1>
                <p>Full-Stack Software Developer</p>
            </div>
            <Link href = '/#about'>
            <button>Say Hello !</button>
            </Link>
        </div>
    )
}

export default Landing