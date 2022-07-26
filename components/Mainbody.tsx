import styles from '../styles/mainbody.module.css'
import Landing from './Landing'
import About from './About'
import Menu from './Menu'


function Mainbody(){
    return(
        <div className = {styles.mainBody}>
            <Landing/>
            <About/>
            <Menu/>
        </div>
    )
}

export default Mainbody