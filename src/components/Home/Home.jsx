/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Title.css';
import bodystyles from './Body.css';
import PublicIcon from '@material-ui/icons/Public';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Home() {
  return (
    <>
      <div className={bodystyles.body}>
        <div className={styles.title}>
          <h1><span>"KALAN</span><span>PRUDHOMME"</span></h1>
        </div>

        <article>
          <img src="funny picture"/>
          <p>A kid who never grew up, 
            always excited to learn something new, 
            Kalan is a fullstack software developer who 
            loves coming up with build ideas and 
            solving problems that come his way.
          </p>
        </article>
        <div>
          <ul>
            <h2>Projects</h2>
          
         
            <li>
              <img src="./Chordial.png"/>
              <div>
                <h3>Chordial</h3>
                <a href="https://github.com/Chordial-Music/Chordial-FE" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
                <a href="https://chordial.netlify.app/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
               
              </div>
              <p>Chordial lets users create songs by offering chord patterns based on harmony and chordal theory. Enjoy the soothing visuals as you effortlessly write music!</p>
            </li>
    
            <li>
              <img src="./Web_Wizard.png"/>
              <h3>WebWizard</h3>
              <a href="https://github.com/KAKMAV/web-wizard" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
              <a href="https://addons.mozilla.org/en-US/firefox/addon/web-wizard/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
              
              <p>Design the web your way with Web Wizard! A Firefox extension that puts CSS design in the user's hands.</p>
            </li>
            <li>
              <img src="./TuneMatch.png"/>
              <h3>Tune Match</h3>
              <a href="https://github.com/NC2K/tune-match" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
              <a href="https://elated-brattain-3eaa48.netlify.app/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
              
              <p>Tune Match utilizes the iTunes API to output randomized top hits to test your music knowledge throughout the decades! Users have control on when the timer starts and can playback collections previous played.</p>
            </li>
            <li>
              <img src="./IoSpio.png"/>
              <h3>Io Spio</h3>
              <a href="https://github.com/Gaka-Daka/io-spio" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
              <a href="https://gaka-daka.github.io/io-spio/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
              
              <p>A modern version of "I-Spy", a hidden object game application. Created in HTML, CSS, and vanilla JavaScript within a 4-day sprint. </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

