import styles from './ProfStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'


function Prof() {
    const {theme, toggleTheme}=useTheme()

    const themeIcon=theme==='light'?sun:moon;
    const twitterIcon=theme==='light'?twitterLight:twitterDark;
    const githubIcon=theme==='light'?githubLight:githubDark;
    const linkedIcon=theme==='light'?linkedinLight:linkedinDark;
    return (
        <section id='prof' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.Prof} src={heroImg} alt="Profile picture" />
                <img className={styles.colorMode} onClick={toggleTheme} src={themeIcon} alt="Color mode icon" />
            </div>
            <div className={styles.info}>
                <h1>Kamala<br/>kannan</h1>
                <h2>Frontend Developer</h2>
                <span>
                    <a href="https://x.com/Kamalakann79474/" target='_blank'><img src={twitterIcon} alt="Twitter icon" /></a>
                    <a href="https://github.com/Kamalakannan-Tech/" target='_blank'><img src={githubIcon} alt="Gitgub icon" /></a>
                    <a href="https://www.linkedin.com/in/kamalakannan2301/" target='_blank'><img src={linkedIcon} alt="Linkedin icon" /></a>
                </span>
                <p className={styles.description}>With a passion for developing modern React web apps for commercial businesses.</p>
                <a href={CV} download><button className='hover'>Resume</button></a>
            </div>

        </section>
    )
}

export default Prof