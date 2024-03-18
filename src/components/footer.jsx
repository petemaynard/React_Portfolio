import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-black text-center p-2">
      <div className="container mx-auto">
        <p>© 2024 Pete Maynard All rights reserved.</p>
        <p>Find me on </p>
        <a href="https://github.com/petemaynard">
          <img src="../../github.png" alt="Github link"></img>
        </a>
        <a href="https://www.linkedin.com/in/pete-maynard/">
         <img src="../../linkedin.png" alt="LinkedIn link"></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;