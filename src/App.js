import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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

      <Router>
        <Header/>

       
        
       
        <Switch>
          <Route path="/about">
            <MissionVision/>
           
            
          </Route>
          <Route path="/Contact">
            <QuestionsAboutUs/>
         
          </Route>
          <Route path="/event">
            <ChangesLives/>
         
         </Route>
         <Route path="/volunteer">
           <SubscribeForm/>
         
         </Route>
          <Route path="/">
            <Hero/>

            
            <MissionVision/>
            <QuestionsAboutUs/>
            <ChangesLives/>
            <SubscribeForm/>
           
         
          </Route>
        </Switch>
        <Footer/>
      
    </Router>
        
      
    </div>
  );
}

export default App;
