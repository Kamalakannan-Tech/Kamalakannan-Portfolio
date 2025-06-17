import styles from './skillsStyles.module.css'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import checkMarkLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext'

function Skills() {

  const {theme, toggleTheme}=useTheme()

  const themeIcon=theme==='light'?checkMarkLight:checkMarkDark;
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={themeIcon} skill='HTML' />
            <SkillList src={themeIcon} skill='CSS' />
            <SkillList src={themeIcon} skill='JavaScript' />
            <SkillList src={themeIcon} skill='React' />
            <SkillList src={themeIcon} skill='Node' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={themeIcon} skill='Tensorflow' />
            <SkillList src={themeIcon} skill='Scikit-learn' />
            <SkillList src={themeIcon} skill='SQL' />
            <SkillList src={themeIcon} skill='MongoDB' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={themeIcon} skill='Java' />
            <SkillList src={themeIcon} skill='Python' />
            <SkillList src={themeIcon} skill='Git' />
            <SkillList src={themeIcon} skill='Android Studio' />
            <SkillList src={themeIcon} skill='Power BI' />
        </div>
        <hr />

    </section>
  )
}

export default Skills