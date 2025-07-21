// src/App.tsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xl">CC</span>
          </div>
          <h1 className="text-2xl font-serif font-bold text-emerald-800">CommunityConnect</h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Programs', 'Impact', 'Get Involved', 'Contact'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={`font-medium hover:text-emerald-600 transition-colors ${item === 'About' ? 'text-emerald-600' : 'text-slate-700'}`}
            >
              {item}
            </a>
          ))}
        </nav>
        
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-md">
          Donate
        </button>
      </div>
    </header>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-48 h-48 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 py-28 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
            Connecting <span className="text-emerald-600">Communities</span>,<br />Transforming <span className="text-amber-500">Lives</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            We bridge gaps, empower individuals, and foster sustainable development through community-driven initiatives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all"
            >
              Discover Our Mission
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-slate-50 text-emerald-600 border border-emerald-600 px-8 py-3 rounded-full font-medium shadow-md transition-all"
            >
              Watch Our Story
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">
            About Our Organization
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-serif font-bold text-slate-800 mb-6">
              Creating Lasting Change Through Community Empowerment
            </h3>
            
            <p className="text-slate-600 mb-4">
              CommunityConnect is a non-governmental outreach and self-help organization dedicated to fostering sustainable development and empowerment in underserved communities. Since our founding in 2010, we've worked tirelessly to bridge gaps and create opportunities for those most in need.
            </p>
            
            <p className="text-slate-600 mb-4">
              We operate in over 15 countries across three continents, with a focus on regions facing significant economic and social challenges. Our approach centers on collaboration, education, and resource mobilization to create lasting positive change.
            </p>
            
            <p className="text-slate-600">
              At CommunityConnect, we believe in the power of human connection. We bring together diverse stakeholders - including community members, volunteers, corporate sponsors, and government agencies - to develop solutions that address local challenges while building capacity for long-term resilience.
            </p>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: "🌍", value: "15+", label: "Countries Reached" },
              { icon: "👥", value: "250K+", label: "Lives Impacted" },
              { icon: "🤝", value: "5,200+", label: "Volunteers" },
              { icon: "📚", value: "780+", label: "Programs" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all border border-slate-200"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-emerald-600 mb-1">{stat.value}</div>
                <div className="text-slate-700">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ImpactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const impacts = [
    {
      icon: "🤝",
      title: "Successful Connections",
      description: "We've facilitated over 15,000 meaningful connections between communities and resources."
    },
    {
      icon: "🎓",
      title: "Educational Programs",
      description: "Our literacy programs have reached 85,000+ learners, with a focus on women and youth."
    },
    {
      icon: "❤️",
      title: "Health Initiatives",
      description: "Provided medical services and health education to 120,000+ community members."
    },
    {
      icon: "🌱",
      title: "Sustainable Development",
      description: "Implemented 320+ sustainable projects in clean water, agriculture, and renewable energy."
    },
    {
      icon: "💰",
      title: "Resource Mobilization",
      description: "$18M+ in donations effectively deployed with 92% going to program services."
    },
    {
      icon: "🏠",
      title: "Community Infrastructure",
      description: "Built 45 community centers, 12 schools, and 8 health clinics serving as development hubs."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Our Impact
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all"
            >
              <div className="text-5xl mb-4">{impact.icon}</div>
              <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
              <p className="text-slate-100">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "CommunityConnect transformed our village. Before their literacy program, only 30% of our women could read. Now, 85% are literate and starting small businesses. They didn't just teach us - they listened and helped us build solutions that actually work for our community.",
      author: "Amina Diallo",
      role: "Program Beneficiary, Senegal",
      type: "beneficiary"
    },
    {
      quote: "As a corporate sponsor for 5 years, I've seen firsthand how CommunityConnect maximizes every dollar. Their transparent reporting and measurable outcomes give us confidence that our investment creates real change. The volunteer opportunities they provide for our employees have been transformative for our company culture too.",
      author: "Robert Chen",
      role: "Corporate Sponsor, Singapore",
      type: "sponsor"
    },
    {
      quote: "Volunteering with CommunityConnect changed my life perspective. Working alongside community members to build their own solutions taught me more than any university course. The organization's respect for local knowledge and their long-term commitment to communities sets them apart.",
      author: "Maria Gonzalez",
      role: "Volunteer, Mexico Program",
      type: "volunteer"
    },
    {
      quote: "After the earthquake destroyed our clinic, CommunityConnect didn't just rebuild it - they worked with us to create a better, more resilient health center. They trained local health workers and established supply chains we maintain ourselves. That's sustainable development.",
      author: "Dr. Sanjay Patel",
      role: "Community Partner, Nepal",
      type: "partner"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">
            Voices of Impact
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`bg-white rounded-xl p-6 shadow-lg border-t-4 ${
                testimonial.type === 'beneficiary' ? 'border-emerald-500' :
                testimonial.type === 'sponsor' ? 'border-amber-500' :
                testimonial.type === 'volunteer' ? 'border-blue-500' : 'border-purple-500'
              }`}
            >
              <div className="text-emerald-500 text-5xl mb-4">“</div>
              <p className="text-slate-600 italic mb-6">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-800">{testimonial.author}</div>
                  <div className="text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">CC</span>
              </div>
              <h2 className="text-xl font-serif font-bold text-white">CommunityConnect</h2>
            </div>
            <p className="mb-4">
              Creating sustainable change through community empowerment, education, and strategic partnerships.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                <a 
                  key={platform} 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                  <div className="text-white">ⓘ</div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Our Mission', 'Programs', 'Success Stories', 'Get Involved', 'Careers', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-emerald-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">123 Unity Plaza, Global City</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
              <p className="mb-2">Email: connect@communityconnect.org</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to receive updates on our initiatives and impact.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-lg bg-slate-800 text-white w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button 
                type="submit" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center">
          <p>&copy; 2023 CommunityConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default App;