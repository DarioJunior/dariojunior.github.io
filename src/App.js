import styles from './App.module.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';

//LEMBRAR DO "homapage" no PACKAGEJSON 
function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Profile />
      <Projects /> 
    </div>
  );
}

export default App;
