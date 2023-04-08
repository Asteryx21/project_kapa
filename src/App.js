import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css'

import video from './assets/video.mp4';
import slogan from './assets/text.png'
import comingsoon from './assets/text2.png'

export default function App() {

  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setBackgroundLoaded(true);
    };
  }, []);

  useEffect(() => {
    if (backgroundLoaded) {
      Aos.init({ duration: 2500 });
    }
  }, [backgroundLoaded]);

  return (
    <div className='App'>
      <div className='grids'>
      <div data-aos="flip-left" className='img_box'><img src={comingsoon} alt='' id='slogan'></img></div>
        <div data-aos="fade-left" className='boxes'>
        In the video below, you can see the work that has been done so far. The code is open-source. 
        You can see the code on this 
        <b> <a href="https://github.com/Asteryx21/projectkapa" target="_blank" rel="noopener noreferrer">GitHub link.</a></b>
        </div>
        <div data-aos="fade-up" className='boxes'>
          <video className='video' src={video} controls></video>
        </div>
        <div data-aos="fade-right" className='boxes'>
        The project is designed to facilitate and optimize the efforts of a team of dedicated volunteers who 
        are committed to cleaning up polluted areas. The app will allow users to register and gain access to a variety of 
        features and resources that will help them stay informed and engaged with the team's ongoing activities.
        </div>
        <div data-aos="fade-up" className='boxes'>
        "ΚαΠα" (KaPa) is a clever word play that combines the first letters of two Greek words: 
        <br></br><br></br>
        "Κα" (Ka) which standsfor "Καθαρή" (Kathari)<br></br><br></br>
        "Πα" (Pa) which standsfor "Πάτρα" (Patra)
        <br></br><br></br>
        In Greek, "Καθαρή" (Kathari) means "clean", and "Πάτρα" (Patra) is a town in Greece.
        <br></br><br></br>
        So, when you combine the first letters "Κα" and "Πα" together, you get "ΚαΠα" (KaPa). But funny enough Καπα in Greek means cape.
        <br></br><br></br>
        Which leads to our slogan: Not all heroes wear cape.
        </div>
        <div data-aos="flip-left" className='img_box'><img src={slogan} alt='' id='slogan'></img></div>
      </div>
    </div>
  );
}