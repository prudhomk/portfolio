/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Title.css';
import bodystyles from './Body.css';
import animatestyles from './Animate.css';
import buttonstyles from './Button.css';
import socialstyles from './Social.css';
import PublicIcon from '@material-ui/icons/Public';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {

  const history = useHistory();

  const handleContact = () => {
    history.push('/contact');
  };

  return (
    <>
      <div className={bodystyles.body}>
        <div className={styles.title}>
          <h1><span>KALAN</span><span>PRUDHOMME</span></h1>
        </div>

        <div className={socialstyles.social}>
          <div className={socialstyles.wrapper}>
            <h1>Follow Me:</h1>
            <div className={`${socialstyles.icon} ${socialstyles.twitter}`}>
              <div className={socialstyles.tooltip}>Twitter</div>
              <span> <a className={socialstyles.twitter} href="https://twitter.com/kalanrp" target="_blank" rel="noreferrer"><TwitterIcon className={socialstyles.twitter} /></a></span>
            </div>
            <div className={`${socialstyles.icon} ${socialstyles.github}`}>
              <div className={socialstyles.tooltip}>Github</div>
              <span><a className={socialstyles.github} href="https://github.com/prudhomk" target="_blank" rel="noreferrer"><GitHubIcon className={socialstyles.github} /></a></span>
            </div>
            <div className={`${socialstyles.icon} ${socialstyles.linkedin}`}>
              <div className={socialstyles.tooltip}>LinkedIn</div>
              <span><a className={socialstyles.linkedin} href="https://www.linkedin.com/in/kalanprudhomme/" target="_blank" rel="noreferrer"><LinkedInIcon className={socialstyles.linkedin} /></a></span>
            </div>
          </div>
        </div>

        <div className={bodystyles.spacer}></div>

        <div className={bodystyles.bio}>
          <div className={animatestyles.slide}>
            <img src="/profile.jpg"/>
            <p>
            Hello there!  I'm a Fullstack Developer who loves learning new technologies and novel code implementation.
            Always eager to try out a new method or solve a bug, I love the endless creativity coding allows me.  Away from the computer
            I enjoy playing Piano, drawing and baking pastries.
            </p>
          </div>
        </div>

        <div className={bodystyles.spacer}></div>

        <div className={bodystyles.tech}>
          <h1>Tech Stack:</h1>
          <div>
            <span><img src="./html5.png"></img></span>
            <span><img src="./css3.png"></img></span>
            <span><img src="./javascript.png"></img></span>
            <span><img src="./node.png"></img></span>
            <span><img src="./react.png"></img></span>
            <span><img src ="./jest.png"></img></span>
            <span><img src="./postgre.png"></img></span>
            <span><img src="./heroku.png"></img></span>
            <span><img src="./netlify.png"></img></span>
          </div>
        </div>

        <div className={bodystyles.spacer}></div>

        <div>
          <ul>
            <h2>Projects</h2>
            <li className={animatestyles.shadowpop}>
              <img src="./PokeTori.png"/>
              <div>
                <h3>PokeTori</h3>
                <div className={bodystyles.links}>
                  <a href="https://github.com/prudhomk/poketori" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
                  <a href="https://poketori.netlify.app/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
                </div>
              </div>
              <p>Poketori is a web version of the game しりとり (shiritori), also known as word-chain in other parts of the world. Chain together as many Pokemon names as you can, in 5 different languages!</p>
            </li>
            <li className={animatestyles.shadowpop}>
              <img src="./Chordial.png"/>
              <div>
                <h3>Chordial</h3>
                <div className={bodystyles.links}>
                  <a href="https://github.com/Chordial-Music/Chordial-FE" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
                  <a href="https://chordial.netlify.app/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
                </div>
              </div>
              <p>Chordial lets users create songs by offering chord patterns based on harmony and chordal theory. Enjoy the soothing visuals as you effortlessly write music!</p>
            </li>
            <li className={animatestyles.shadowpop}>
              <img src="./jojostar.png"/>
              <div>
                <h3>Jojo's Bizarre API</h3>
                <div className={bodystyles.links}>
                  <a href="https://github.com/prudhomk/jojoApi" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
                  <a href="https://jojos-bizarre-api.netlify.app/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
                </div>
              </div>
              <p>A RESTful API featuring dynamic SQL queries and a feature-rich frontend, centered around the charactes from Jojo's Bizarre Adventure.  Watch out for enemy stands!</p>
            </li>
            <li className={animatestyles.shadowpop}>
              <img src="./Web_Wizard.png"/>
              <div>
                <h3>WebWizard</h3>
                <div className={bodystyles.links}>
                  <a href="https://github.com/KAKMAV/web-wizard" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
                  <a href="https://addons.mozilla.org/en-US/firefox/addon/web-wizard/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
                </div>
              </div>
              <p>A Firefox extension that allows users to customize any webpage by targeting the HTML and CSS.  Change the background color, font color, font size, or even change text content using a JSON dictionary.</p>
            </li>
            <li className={animatestyles.shadowpop}>
              <img src="./TuneMatch.png"/>
              <div>
                <h3>Tune Match</h3>
                <div className={bodystyles.links}>
                  <a href="https://github.com/NC2K/tune-match" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
                  <a href="https://elated-brattain-3eaa48.netlify.app/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
                </div>
              </div>
              <p>Tune Match utilizes the iTunes API to output randomized top hits to test your music knowledge throughout the decades! Users have control on when the timer starts and can playback collections previous played.</p>
            </li>
            <li className={animatestyles.shadowpop}>
              <img src="./IoSpio.png"/>
              <div>
                <h3>Io Spio</h3>
                <div className={bodystyles.links}>
                  <a href="https://github.com/Gaka-Daka/io-spio" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
                  <a href="https://gaka-daka.github.io/io-spio/" target="_blank" rel="noreferrer"><PublicIcon className="icon" /></a>
                </div>
              </div>
              <p>A modern version of "I-Spy", a hidden object game application. Users can play a variety of maps, and compete with other players on the leaderboard for the best score and fastest time!</p>
            </li>
          </ul>
        </div>

        <div className={buttonstyles.button}>
          <ul>
            <a>
              <li onClick={handleContact}>
                Get in Touch
                <span></span><span></span><span></span><span></span>
              </li>
            </a>
            <a href="./Resume.pdf">
              <li>
                Resume
                <span></span><span></span><span></span><span></span>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

