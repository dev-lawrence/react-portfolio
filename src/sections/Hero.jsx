import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  return (
    <section id="home">
      <div className="relative z-40">
        <div className="container flex h-screen items-center justify-center text-center">
          <div className="z-40 max-w-[800px]">
            <div className="mb-6">
              <img
                className="mx-auto size-[100px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 object-cover"
                src={HeroImage}
                alt="hero image"
              />
            </div>

            <h1 className="mb-2 text-3xl font-extrabold capitalize leading-[1.2] md:text-5xl">
              Crafting{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Smooth
              </span>{' '}
              Web Experiences
            </h1>
            <p className="mb-4 md:text-lg">
              I craft beautiful and functional web experiences that engage users
              and bring ideas to life. Let’s build something amazing together!
            </p>
            <a
              href="#projects"
              className="px-6 py-3 inline-block capitalize font-semibold bg-gradient-to-r from-blue-600 to-purple-600  text-white rounded-md"
            >
              view my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
