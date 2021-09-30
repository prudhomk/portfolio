/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import PublicIcon from '@material-ui/icons/Public';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './Home.css';



export default function Home() {
  return (
    <>
      <div className={styles.Home}>
        <div>
          <h1>Projects</h1>
          <figure>
            
            <figcaption>Chordial</figcaption>
            <a href="https://github.com/Chordial-Music/Chordial-FE" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
            <a href="https://chordial.netlify.app/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
            <img src="Chordial.png"/>
            <p>Chordial lets users create songs by offering chord patterns based on harmony and chordal theory. Enjoy the soothing visuals as you effortlessly write music!</p>
          </figure>
          <figure>
            <figcaption>WebWizard</figcaption>
            <a href="https://github.com/KAKMAV/web-wizard" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
            <a href="https://addons.mozilla.org/en-US/firefox/addon/web-wizard/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
            <p>Design the web your way with Web Wizard! A Firefox extension that puts CSS design in the user's hands.</p>
          </figure>
          <figure>
            <figcaption>Tune Match</figcaption>
            <a href="https://github.com/NC2K/tune-match" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
            <a href="https://elated-brattain-3eaa48.netlify.app/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
            <p>Tune Match utilizes the iTunes API to output randomized top hits to test your music knowledge throughout the decades! Users have control on when the timer starts and can playback collections previous played.</p>
          </figure>
          <figure>
            <figcaption>Io Spio</figcaption>
            <a href="https://github.com/Gaka-Daka/io-spio" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
            <a href="https://gaka-daka.github.io/io-spio/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
            <p>A modern version of "I-Spy", a hidden object game application. Created in HTML, CSS, and vanilla JavaScript within a 4-day sprint. </p>
          </figure>
        </div>

        <div className={styles.About}>
          <h1>Who the hell is Kalan Prudhomme?</h1>
          <div>
            <p>
                
            </p>
          </div>
          <br/>
          <div className={styles.Resume}>
            <Link to="/resume">HIRE NOW, SUPPLIES LIMITED!</Link>
          </div>
          
          
        </div>
      </div>
    </>
  );
}

