import styles from "../styles/resumecard.module.css";

interface Props{
    firm: string,
    title: string,
    timeline: string,
    image: string
}

function ResumeCard({firm, title, timeline, image}: Props) {
  return (
    <div className={styles.resumecard}>
      <div className={styles.imageDiv}>
        <img src={image} alt="" />
      </div>
      <div className={styles.roleDiv}>
        <h1>
          Firm: <b>{firm}</b>
        </h1>
        <h2>Contract: <b>{title}</b></h2>
        <p>{timeline}</p>
      </div>
    </div>
  );
}

export default ResumeCard;
