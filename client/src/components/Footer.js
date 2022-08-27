import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>Spotify Stats © 2022</small>
          <div className='social-icons'>
            <a className='social-icon-link github' href='https://github.com/gonzk' target='_blank'>
              <i className='fab fa-github' /></a>
              </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;