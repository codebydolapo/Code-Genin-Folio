import styles from '../styles/menu.module.css'
import {useSelector} from 'react-redux'


function Menu(){

    const menuState= useSelector((state: any)=> state.menuState)

    return(
        <div className = {menuState ? styles.menuActive : styles.menu}>
            <p>Blog</p>
            <p>Resume</p>
            <p>Contact</p>
        </div>
    )
}

export default Menu