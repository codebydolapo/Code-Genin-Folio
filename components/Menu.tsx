import styles from "../styles/menu.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

function Menu() {
  const menuState = useSelector((state: any) => state.menuState);

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
        <p>About</p>
      </Link>
    </div>
  );
}

export default Menu;
