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
            <img src="./Chordial.png"/>
            <br/>
            <a href="https://github.com/Chordial-Music/Chordial-FE" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
            <a href="https://chordial.netlify.app/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
            <figcaption>Chordial</figcaption>
            <p>Chordial lets users create songs by offering chord patterns based on harmony and chordal theory. Enjoy the soothing visuals as you effortlessly write music!</p>
          </figure>
          <figure>
            <img src="./Web_Wizard.png"/>
            <br/>
            <a href="https://github.com/KAKMAV/web-wizard" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
            <a href="https://addons.mozilla.org/en-US/firefox/addon/web-wizard/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
            <figcaption>WebWizard</figcaption>
            <p>Design the web your way with Web Wizard! A Firefox extension that puts CSS design in the user's hands.</p>
          </figure>
          <figure>
            <img src="./TuneMatch.png"/>
            <br/>
            <a href="https://github.com/NC2K/tune-match" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
            <a href="https://elated-brattain-3eaa48.netlify.app/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
            <figcaption>Tune Match</figcaption>
            <p>Tune Match utilizes the iTunes API to output randomized top hits to test your music knowledge throughout the decades! Users have control on when the timer starts and can playback collections previous played.</p>
          </figure>
          <figure>
            <img src="./IoSpio.png"/>
            <br/>
            <a href="https://github.com/Gaka-Daka/io-spio" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
            <a href="https://gaka-daka.github.io/io-spio/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
            <figcaption>Io Spio</figcaption>
            <p>A modern version of "I-Spy", a hidden object game application. Created in HTML, CSS, and vanilla JavaScript within a 4-day sprint. </p>
          </figure>
        </div>

        <div className={styles.About}>
          <h1>Who the hell is Kalan Prudhomme?</h1>
          <div>
            <p>
              Hello There!  
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

