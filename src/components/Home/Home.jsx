import React from 'react';
import styles from './Home.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  diplay: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 5px;
`;


export default function Home() {
  return (
    <div className={styles.Home}>
      <h1>KALAN PRUDHOMME</h1>
      <h2>fullstack software developer</h2>

      <p>Good Words : Good Thoughts : Good Deeds</p>

      <StyledDiv>
        <h1>Projects</h1>
        <figure>
          <img src="./Web_Wizard.png"/>
          <a href="https://github.com/KAKMAV/web-wizard">Github</a>
          <figcaption>WebWizard</figcaption>
          <p>Description</p>
        </figure>
        <figure>
          <img src="./TuneMatch.png"/>
          <a href="https://github.com/NC2K/tune-match">Github</a>
          <figcaption>Tune Match</figcaption>
          <p>Description</p>
        </figure>
        <figure>
          <img src="./IoSpio.png"/>
          <a href="https://github.com/Gaka-Daka/io-spio">Github</a>
          <figcaption>Io Spio</figcaption>
          <p>Description</p>
        </figure>
      </StyledDiv>
    </div>
  );
}

