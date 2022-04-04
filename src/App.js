import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';
import MissionVision from './components/MissionVision';
import QuestionsAboutUs from './components/QuestionsAboutUs';
import ChangesLives from "./components/ChangesLives"
import Footer from './components/Footer';
import SubscribeForm from './components/SubscribeForm';

function App() {
  return (
    <div className="app">
     
      <Header />
      <Hero />
      <MissionVision />
      <QuestionsAboutUs />
      <ChangesLives />
      <SubscribeForm />
      <Footer/>
      
      
    </div>
  );
}

export default App;
