import React from 'react';
import profilePic from '../assets/pfp4.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
    return (
      <section style={{  marginTop: '2rem',display: 'flex', alignItems: 'center', gap: '2rem', paddingBottom: '2rem' }} id="home" className="home-section">
        <img
          src={profilePic}
          alt="Izaac"
          style={{
            width: '250px',
            aspectRatio: '1 / 1',       // keeps it square without distortion
            borderRadius: '50%',
            objectFit: 'cover',         // ensures natural crop without squish
          }}
        />
        
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Izaac Laundry Mottiar</h1>
          <p className="intro-bullet2" style={{ marginBottom: '0rem' }}>Mechatronics Engineering</p>
          <p className="intro-bullet2" style={{ marginBottom: '0.5rem' }}>Tennis & Golf Enthusiast</p>
          <p className="intro-bullet3" style={{ fontSize: '0.9rem' , marginBottom: '1.5rem' }}>📍 Waterloo, ON. Cananda</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <a href="https://www.linkedin.com/in/izaac-mottiar" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/izaac08" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://izaac08.github.io/resume/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='cv-link'
          >
            CV
          </a>
        </div>
        </div>
      </section>
    );
  }