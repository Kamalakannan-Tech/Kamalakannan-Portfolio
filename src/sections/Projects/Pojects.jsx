import styles from './ProjectsStyples.module.css'
import netflix from '../../assets/netflix-logo.png'
import weather from '../../assets/weather.png'
import internals from '../../assets/calculator.png';
import profile from '../../assets/hero-img.png'
import ProjectCard from '../../common/ProjectCard'

function Pojects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
              src={netflix} 
              link='https://github.com/Kamalakannan-Tech/NetflixClone' 
              h3='Netflix-clone' 
              p='Streaming App'
            />
            <ProjectCard 
              src={weather} 
              link='https://github.com/Kamalakannan-Tech/Weather' 
              h3='WeatherBug' 
              p='Climate Check'
            />
            <ProjectCard 
              src={internals} 
              link='https://github.com/Kamalakannan-Tech/Internal-calculator' 
              h3='IntraCalc' 
              p='Claculate Internals'
            />
            <ProjectCard 
              src={profile} 
              link='https://github.com/Kamalakannan-Tech/Kamalakannan-Portfolio' 
              h3='Portfolio' 
              p='React Portfolio'
            />
        </div>
    </section>
  )
}

export default Pojects
