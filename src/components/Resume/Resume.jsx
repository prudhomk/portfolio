/* eslint-disable max-len */
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import styles from '../Resume/Resume.css';



export default function Resume() {

  return (
    <>
      <div className={styles.resume} >
        <Document file="./editResume.pdf">
          <br/>
          <br/>
          <br/>
          <Page pageNumber={1}/>
        </Document>
        <a href="./Resume.pdf">Download Resume</a>
      </div>
    </>
  );
}

