import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Navigation/Header';
import Hero from "./components/Home/Hero";
import './App.css';
import MissionVision from './components/Mission/MissionVision';
import QuestionsAboutUs from "./components/Questions/QuestionsAboutUs";
import ChangesLives from "./components/ChangeManyLives/ChangesLives"
import Footer from './components/FooterNavigation/Footer';
import SubscribeForm from './components/Subscribe/SubscribeForm';
import SupportSection from "./components/SupportManyPeople/SupportSection";


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
        
         
         </Route>
          <Route path="/">
            <Hero/>

            
            <MissionVision/>
            <QuestionsAboutUs/>
            <ChangesLives/>
            
           
         
          </Route>
        </Switch>


        <SubscribeForm/>
        <Footer/>
      
    </Router>
        
      
    </div>
  );
}

export default App;
