import styles from "../styles/about.module.css";
import ResumeCard from './ResumeCard'
import {resumeHighlights}from './data/resumeHighlights'


interface Props {
  firm: string;
  title: string;
  timeline: string;
  image: string;
}

function About() {
  return (
    <div className={styles.about} id="about">
      {/* <div className={styles.left}>
        <img src="/icons/git.png" alt="" />
        <img src="/icons/twitter.png" style={{ background: "black" }} alt="" />
        {/* <img src = '/icons/hashnode.png' alt = ''/> 
        <img src="/icons/linkedin.png" alt="" />
      </div> */}
      <div className={styles.right}>
        <div className={styles.contactCard}>
          <div className={styles.contactCardTop}>
            <img src="/images/profileImage.jpg" alt="" />
            <div className={styles.contactCardNameDiv}>
              <h2>Adekunle </h2>
              <h1>Mohammed</h1>
              <button
                onClick={() =>
                  window.open(
                    "https://mohammedadekunle.com.ng/assets/mohammed-adekunle-resume.pdf",
                    "_blank"
                  )
                }
              >
                Check Out My Resume
              </button>
            </div>
          </div>
          <div className={styles.underline}></div>
          <div className={styles.contactCardBottom}>
            <h1>Who Am I Anyway?</h1>
            <p>
              I'm a full-stack software developer with a specialization in
              building and deploying backend services.
            </p>

            <p>
              I build, deploy and manage software solutions for individuals and
              corporate bodies, looking to leverage the power of modern
              technology, towards optimizing their business/operation to scale
              in the digital space.
            </p>
          </div>
        </div>
        <div className={styles.resumeHighlights}>
          <div className={styles.headerDiv}>
            <h1>Resume Highlights</h1>
          </div>
          <div className={styles.resumeHighlightContainer}>
            {resumeHighlights.map(({ firm, title, image, timeline }: Props) => {
              return (
                <ResumeCard
                  firm={firm}
                  title={title}
                  image={image}
                  timeline={timeline}
                  key={firm}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

