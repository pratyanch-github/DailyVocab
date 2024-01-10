import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-500 p-4 text-center rounded-tr-xl rounded-tl-xl">
      <p className="text-white font-bold">Pratyanch - Connect with me:</p>
      <div className="flex justify-center mt-2">
        {/* Replace these links with your actual social links */}
        <a href="https://www.linkedin.com/in/pratyanch-dongre-56953a205/" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/pratyanch-github" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
