import styles from './App.module.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import ProjectsGallery from './components/ProjectsGallery';
import Contact from './components/Contact';
//LEMBRAR DO "homapage" no PACKAGEJSON 
function App() {
  return (
    <div className={styles.App} id="HOME">
      <Header />
      <Profile />
      <Projects /> 
      <ProjectsGallery  className={styles.ProjectsGallery}/>
      <Contact />
    </div>
  );
}

export default App;
