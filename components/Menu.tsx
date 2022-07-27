import styles from "../styles/menu.module.css";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import {activateMenu, deactivateMenu} from './reducers/actions'

function Menu() {
  const menuState = useSelector((state: any) => state.menuState);

  const dispatch = useDispatch()

  function handleAbout(){
      if (menuState) {
        dispatch(deactivateMenu());
      } else if (!menuState) {
        dispatch(activateMenu());
      }
  }

  return (
    <div className={menuState ? styles.menuActive : styles.menu}>
      <p
        onClick={() =>
          window.open("https://blog.mohammedadekunle.com.ng/", "_blank")
        }
      >
        Blog
      </p>
      <p
        onClick={() =>
          window.open(
            "https://mohammedadekunle.com.ng/assets/mohammed-adekunle-resume.pdf",
            "_blank"
          )
        }
      >
        Resume
      </p>
      <Link href="/#about">
        <p onClick = {handleAbout}>About</p>
      </Link>
    </div>
  );
}

export default Menu;
