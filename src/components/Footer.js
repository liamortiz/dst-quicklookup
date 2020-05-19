import React from 'react';
import github_icon from '../images/github_icon.png';

function Footer () {
  return (
    <footer>
      <p>All Welcome to Contribute</p>
      <a href = "https://github.com/liamortiz/dst-quicklookup" target = "_blank" rel="noopener noreferrer">
        <img src = {github_icon} alt = "github"/>
      </a>
    </footer>
  );
}
export default Footer;
