import React, { useEffect } from 'react';

const ScrollToSection = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash; // get the current hash (e.g., #features)
      if (id) {
        const element = document.querySelector(id); // get the element by id (e.g., #features)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // smooth scroll to the element
        }
      }
    };

    // Run on first mount to handle hash when the page loads
    handleHashChange();

    // Listen for hash changes in the URL
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Empty dependency array means this effect runs only on mount

  return null; // No UI, just side-effects
};

export default ScrollToSection;
