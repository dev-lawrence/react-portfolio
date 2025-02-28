import { useEffect, useState } from 'react';

const navigation = [
  { title: 'home', url: '#home' },
  { title: 'projects', url: '#projects' },
  { title: 'about', url: '#about' },
  { title: 'skills', url: '#skills' },
  { title: 'contact', url: '#contact' },
];

const Navbar = ({ isClicked, toggleNavClick }) => {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section[id]');

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveLink(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Nav */}
      <nav
        className={`${
          isClicked ? 'translate-x-0' : '-translate-x-[190.25rem]'
        } fixed left-0 top-0 flex h-screen w-full items-center justify-start transition-all duration-500 lg:hidden`}
      >
        <ul className="h-full w-[60%]  bg-gray-900 pl-4 pt-36">
          {navigation?.map((item) => (
            <li
              key={item.title}
              className="mb-4 text-lg font-medium capitalize"
            >
              <a
                className={`transition-colors duration-300 hover:text-blue-600 ${
                  activeLink === item.title ? 'text-blue-600' : 'text-white'
                }`}
                href={item.url}
                onClick={() => {
                  toggleNavClick();
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Nav */}
      <nav className="hidden md:inline-flex">
        <ul className="flex gap-10 capitalize">
          {navigation?.map((item) => (
            <li key={item.title} className="inline-block font-medium">
              <a
                className={`relative transition-colors duration-300 after:absolute after:bottom-[-0.2rem] after:left-0 after:h-[3px] after:w-[20px] after:rounded-xl after:transition-all after:duration-300 after:ease-in hover:text-blue-600 hover:after:w-full hover:after:bg-blue-600 ${
                  activeLink === item.title
                    ? 'relative text-blue-600 font-semibold after:absolute after:bottom-[-0.2rem] after:left-0 after:h-[3px] after:w-full after:rounded-xl after:bg-blue-600 after:transition-all after:duration-500 after:ease-in'
                    : 'text-white'
                }`}
                href={item.url}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
