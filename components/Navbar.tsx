import styles from "../styles/navbar.module.css";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { activateMenu, deactivateMenu } from "./reducers/actions";

function Navbar() {
  const dispatch = useDispatch();
  const menuState = useSelector((state: any) => state.menuState);

  function dispatchFunction() {
    if (menuState) {
      dispatch(deactivateMenu());
    } else if (!menuState) {
      dispatch(activateMenu());
    }
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <img className={styles.logo} alt="" src="/icons/ma.jpg" />
      </div>
      <div className={styles.right}>
        <p
          onClick={() =>
            window.open(
              "https://mohammedadekunle.com.ng/assets/mohammed-adekunle-resume.pdf",
              "_blank"
            )
          }
        >
          BLOG
        </p>
        <p
          onClick={() =>
            window.open("https://blog.mohammedadekunle.com.ng/", "_blank")
          }
        >
          RESUME
        </p>
        <p>CONTACT</p>
        <h2 className={styles.menu} onClick={dispatchFunction}>MENU</h2>
        <ChevronDownIcon
          className={menuState ? styles.menuIconActive : styles.menuIcon}
          id="menuIcon"
          onClick={dispatchFunction}
        />
      </div>
    </div>
  );
}

export default Navbar;
