import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="credits" target="_blank">Quotes Provided by <Link to="https://talaikis.com/random_quotes_api/" target="_blank">Tadas Talaikis</Link></footer>
  );
}

export default Footer;
