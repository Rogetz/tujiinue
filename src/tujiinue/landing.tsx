import React ,{ useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMoon, FaSun, FaArrowRight, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { useNotification } from './notificationContext';
import tujiinueMashinani from "./TUJIINUE MASHINANI.jpg"
// changed them to uppercase .PNG for the sake of linux compilation in vercel
import healthEducation from "./health-education.PNG"
import happyChild from "./happy-children.PNG"
import communityHealth from "./community-outreach.PNG"
import menstrualHealth from "./menstrual-health-education.PNG"
import youthEmpowerement from "./youth-empowerement.PNG"
import tujiinueVideo from "./tujiinueVideo.mp4"

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const notification = useNotification()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    notification.success("thank you for subscribing to our newsletter")
  };

  let messageHanlder = function(e:any){
    e.preventDefault()
    notification.success("thank you for your feedback we appreciate you")
  }

  return (
      <div className={`select-none min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 flex items-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex gap-2 items-center text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"
                >
                  <img src={tujiinueMashinani} className='w-12 h-12 rounded-full object-cover overflow-hidden' />
                  Tujiinue Mashinani
                </motion.div>
              </div>
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Programs', 'Contact'].map((item) => (
                  <motion.a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ scale: 1.05, color: '#3B82F6' }}
                    className="font-medium"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full focus:outline-none"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <FaSun className="w-5 h-5 text-yellow-300" />
                  ) : (
                    <FaMoon className="w-5 h-5 text-gray-700" />
                  )}
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:block px-4 py-2 bg-blue-600 text-white rounded-md font-medium"
                >
                  Join Us
                </motion.button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={tujiinueVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          

          <div className="relative z-20 px-4 text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Empowering <span className="text-yellow-400">Kenyan</span> Communities
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white mb-8"
            >
              Education • Awareness • Sustainable Development
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium"
              >
                Our Programs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium"
              >
                Join us
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <SectionWrapper id="about" title="Who We Are" subtitle="Making a difference in Kenyan communities">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-blue-600">Our Mission</h3>
              <p className="text-lg">
                Tujiinue Mashinani is an outreach grassroots movement dedicated to empowering local communities across Kenya through education, awareness campaigns, and sustainable development initiatives.
              </p>
              <p className="text-lg">
                Founded in 2020, we've reached over 50,000 people in 12 counties, focusing on health education, environmental conservation, and economic empowerment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '50K+', label: 'People Reached' },
                  { value: '12', label: 'Counties' },
                  { value: '200+', label: 'Workshops' },
                  { value: '15', label: 'Local Partners' } 
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
                  >
                    <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={communityHealth} 
                  alt="Community workshop" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-48 h-48 border-4 border-white dark:border-gray-800 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={happyChild} 
                    alt="Happy children" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Programs Gallery */}
        <SectionWrapper id="programs" title="Our Programs" subtitle="Creating impact where it matters most">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Health Education",
                description: "Workshops on hygiene, disease prevention, and nutrition",
                image: healthEducation
              },
              {
                title: "community outreach",
                description: "pads donation as a way of communal menstral health management",
                image: menstrualHealth
              },
              {
                title: "Youth Empowerment",
                description: "appreciating talent and empoowering youths through prizes in tournaments",
                image: youthEmpowerement
              }
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{program.title}</h3>
                  <p className="text-white/90">{program.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* FAQ Section */}
        <SectionWrapper id="faq" title="Frequently Asked Questions" subtitle="Get answers to common questions">
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How can I get involved with Tujiinue mashinani?",
                answer: "We welcome volunteers! You can join our programs, help organize events, or contribute your skills. Visit our 'Get Involved' page to learn more."
              },
              {
                question: "Where does Tujiinue mashinani operate?",
                answer: "We currently work in 12 counties across Kenya, with plans to expand. Our focus is on underserved rural and urban communities."
              },
              {
                question: "How is our organization funded?",
                answer: "We rely on grants, donations, and partnerships with local businesses and international NGOs. All donations go directly to our programs."
              },
              {
                question: "Can I request a workshop for my community?",
                answer: "Absolutely! We prioritize communities that reach out to us. Contact our team with details about your community's needs."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                >
                  <span className="font-medium">{item.question}</span>
                  {activeFAQ === index ? (
                    <HiChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <HiChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                <AnimatePresence>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 text-gray-600 dark:text-gray-300">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Contact Section */}
        <SectionWrapper id="contact" title="Get In Touch" subtitle="We'd love to hear from you">
          <div className="grid md:grid-cols-2 gap-12 text-black dark:text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 text-black dark:text-white"
            >
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Our Office</h4>
                    <p className="text-gray-600 dark:text-gray-400">Pioneer House, 3rd Floor<br />Kimathi Street, Nairobi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">+254 700 123 456<br />+254 733 987 654</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">info@tujiinuemashinani.org<br />support@tujiinuemashinani.org</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: FaFacebook, color: 'text-blue-600',link:"https://facebook.com/tujiinue.mashinani" },
                    { icon: FaTwitter, color: 'text-blue-400',link:"https://x.com/tujiinue_m" },
                    { icon: FaInstagram, color: 'text-pink-600',link:"https://instagram.com/p/DMAU5yUMjwr/" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      whileHover={{ y: -3 }}
                      className={`w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow flex items-center justify-center ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={messageHanlder} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium w-full"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Newsletter Section */}
        <div className="bg-blue-600 text-black dark:text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Stay Updated
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Subscribe to our newsletter for updates on our programs and community impact.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-900"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={`px-6 py-3 rounded-md font-medium flex items-center justify-center ${submitted ? 'bg-green-500' : 'bg-yellow-400 text-gray-900'}`}
              >
                {submitted ? 'Thank You!' : (
                  <>
                    Subscribe <FaArrowRight className="ml-2" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-black dark:text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Tujiinue Mashinani</h3>
                <p className="text-gray-400">
                  Empowering Kenyan communities through education and awareness since 2020.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['Home', 'About', 'Programs', 'Gallery', 'FAQ', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Programs</h4>
                <ul className="space-y-2">
                  {['Health Education', 'Environmental Conservation', 'Youth Empowerment', 'Women Initiatives', 'Community Development'].map((program) => (
                    <li key={program}>
                      <a href="#" className="text-gray-400 hover:text-white transition">
                        {program}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © {new Date().getFullYear()} Tujiinue Mashinani. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-white transition">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
};

// Reusable Section Wrapper Component
const SectionWrapper = ({ id, title, subtitle, children }: { id: string, title: string, subtitle: string, children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id={id} ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
};





export default App;