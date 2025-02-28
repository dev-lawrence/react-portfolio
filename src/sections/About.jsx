import AboutImg from '../assets/about-img.jpg';
import Title from '../components/Title';

const About = () => {
  return (
    <section id="about" className="pt-32">
      <div className="container">
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <div className="mb-8 md:mb-0">
            <img
              className="object-cover rounded-2xl"
              src={AboutImg}
              alt="Alex Carter"
            />
          </div>

          <div>
            <Title
              title="about"
              highlight="me"
              isCenter={false}
              subtitle="Get to know me better"
            />
            <p className="leading-7">
              Hey there! I'm Alex Carter, a passionate frontend developer and
              UI/UX designer with a keen eye for detail and a love for creating
              smooth, user-friendly experiences. With 4 years of experience, I
              specialize in React, Next.js, and TailwindCSS, bringing modern and
              scalable solutions to life. I'm a detail-oriented and organized
              individual with a strong passion for creating visually appealing
              and user-friendly experiences. I'm always eager to learn about new
              technologies and best practices, and I'm excited about the
              opportunity to share my knowledge and skills with others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
