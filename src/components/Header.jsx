import { useEffect, useState } from 'react';
import { AlignLeft, X } from 'lucide-react';
import Navbar from './Navbar';

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleNavClick = () => {
    setIsClicked(!isClicked);
  };

  // Change header background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolling
          ? 'backdrop-blur-sm bg-gradient-to-r from-neutral-900/50 via-neutral-900/50 to-gray-900/50  duration-500 animate-in'
          : 'bg-transparent duration-500 animate-out'
      } fixed top-0 z-[500] w-full`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="z-10 text-200 font-900">
          <a className="font-bold md:text-lg text-white" href="/">
            Alex{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Carter
            </span>
          </a>
        </div>

        {/* Navbar */}
        <Navbar isClicked={isClicked} toggleNavClick={toggleNavClick} />

        {/* Menu buttons */}
        <div
          className="text-white z-10 flex items-center md:hidden"
          onClick={toggleNavClick}
        >
          {isClicked ? (
            <button>
              <X name="Close Menu" cursor="pointer" size={28} />
            </button>
          ) : (
            <button>
              <AlignLeft name="Open Menu" cursor="pointer" size={28} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
