import { Facebook, Instagram, Twitter, Phone, Mail } from 'lucide-react';
import Form from '../components/Form';
import Title from '../components/Title';

const Contact = () => {
  return (
    <section id="contact" className="pt-32">
      <div className="container">
        <Title
          title="contact"
          highlight="me"
          isCenter={false}
          subtitle="Get in touch with me."
        />
        <div className="md:grid md:grid-cols-2 md:gap-16">
          <Form />

          <div className="mb-16 mt-8">
            <div className="mb-2 flex flex-wrap items-center justify-start gap-2">
              <Phone className="size-5" />
              <a
                className="text-lg font-semibold transition-colors duration-300 hover:text-blue-600"
                href="tel: 08167397621"
              >
                08167397621
              </a>
            </div>

            <div className="mb-4 flex flex-wrap items-center justify-start gap-2">
              <Mail className="size-5" />
              <a
                className="text-lg transition-colors duration-300 hover:text-blue-600"
                href="mailto: alexcarter@gmail.com"
              >
                alexcarter@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-4">
              <a
                href="#"
                className="hover:-translate-y-2 hover:text-blue-600 transition-transform duration-500 ease-in-out"
              >
                <Facebook className="size-6" />
              </a>
              <a
                href="#"
                className="hover:-translate-y-2 hover:text-blue-600 transition-transform duration-500 ease-in-out"
              >
                <Instagram className="size-6" />
              </a>
              <a
                href="#"
                className="hover:-translate-y-2 hover:text-blue-600 transition-transform duration-500 ease-in-out"
              >
                <Twitter className="size-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
