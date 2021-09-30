/* eslint-disable max-len */
import React from 'react';
import styles from './Projects.css';
import PublicIcon from '@material-ui/icons/Public';
import GitHubIcon from '@material-ui/icons/GitHub';


export default function Projects() {

  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <ul>
        <li>
          <figure>
            <img src="Chordial.png"/>
           
            <h2>
            Chordial
              <a href="https://github.com/Chordial-Music/Chordial-FE" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
              <a href="https://chordial.netlify.app/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
            </h2>
            <div>
              <p>Chordial lets users create songs by offering chord patterns based on harmony and chordal theory. Enjoy the soothing visuals as you effortlessly write music!</p>
            </div>
          </figure>
        </li>
        <li>
        
        </li>
        <li>

        </li>
        <li>

        </li>
      </ul>
    </div>
  );
}
