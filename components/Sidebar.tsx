import styles from '../styles/sidebar.module.css'


function Sidebar(){

  const code = '<Code/>'

    return (
      <div className={styles.sidebar}>
        <div className = {styles.iconDiv}>

        <img
          src="/icons/git.png"
          alt=""
          onClick={() =>
            window.open("https://github.com/the-code-genin", "_blank")
          }
        />
        <img
          src="/icons/twitter.png"
          style={{ background: "black" }}
          alt=""
          onClick={() =>
            window.open("https://twitter.com/the_code_genin", "_blank")
          }
        />
        <img
          src="/icons/linkedin.png"
          alt=""
          onClick={() =>
            window.open("https://www.linkedin.com/in/the-code-genin", "_blank")
          }
        />
        <img
          src="/icons/gmail.png"
          alt=""
          onClick={() =>
            window.open(
              "mailto:adekunle3317@gmail.com",
              "_blank"
            )
          }
        />
        </div>
        <div className = {styles.copyrights}>
          <p>Copyright: The {code} Genin, 2022</p>
          <h5>-BDO</h5>
        </div>
      </div>
    );

}

export default Sidebar