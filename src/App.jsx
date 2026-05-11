
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import logo from './assets/logo.png'
import prajnaImage from './assets/prajna.jpg'

export default function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  const services = [
    {
      title: 'Website Development',
      image:
        'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',

      desc:
        'Professional responsive websites and business portals with modern UI/UX.',

      details:
        'WIN Research Centre develops modern responsive websites for startups, enterprises and institutions.\n\nWe provide admin dashboards, business portals, dynamic websites, responsive UI/UX and SEO optimized solutions.\n\nOur web development services focus on performance, security, scalability and modern technologies.\n\nWe also provide maintenance, hosting and optimization support.',
    },

    {
      title: 'Mobile App Development',

      image:
        'https://cdn-icons-png.flaticon.com/512/888/888879.png',

      desc:
        'Custom Android and iOS mobile applications for startups and enterprises.',

      details:
        'We develop premium Android and iOS mobile applications with scalable backend systems.\n\nOur applications include business apps, educational apps, enterprise systems and startup products.\n\nWe focus on smooth UI/UX, security and cloud integration.\n\nWe also provide app maintenance and deployment support.',
    },

    {
      title: 'Custom ERP Solutions',

      image:
        'https://cdn-icons-png.flaticon.com/512/2620/2620971.png',

      desc:
        'ERP systems for SMEs, institutes and business workflow automation.',

      details:
        'Our ERP systems automate HR, finance, attendance, inventory and workflow processes.\n\nWIN Research Centre develops customized ERP platforms for institutions and businesses.\n\nThe systems improve management efficiency and reporting.\n\nWe provide scalable and secure ERP solutions.',
    },

    {
      title: 'Cloud Computing',

      image:
        'https://cdn-icons-png.flaticon.com/512/4144/4144783.png',

      desc:
        'Scalable cloud deployment and infrastructure management services.',

      details:
        'We provide AWS deployment, cloud migration and infrastructure optimization.\n\nOur cloud services ensure high availability, scalability and security.\n\nWe help businesses modernize their infrastructure.\n\nCloud deployment improves performance and reliability.',
    },

    {
      title: 'AI Solutions',

      image:
        'https://cdn-icons-png.flaticon.com/512/2103/2103633.png',

      desc:
        'AI-powered automation systems and intelligent business applications.',

      details:
        'WIN Research Centre develops AI automation systems using machine learning and deep learning technologies.\n\nWe create predictive systems, AI chatbots and intelligent analytics platforms.\n\nAI solutions improve automation and decision making.\n\nOur systems are scalable and research-oriented.',
    },

    {
      title: 'Big Data Analytics',

      image:
        'https://cdn-icons-png.flaticon.com/512/2933/2933245.png',

      desc:
        'Data analysis and business intelligence solutions using modern technologies.',

      details:
        'We provide advanced data analytics and business intelligence systems.\n\nOur platforms help organizations process and analyze large-scale data.\n\nWe develop dashboards, analytics reports and data visualization systems.\n\nThese systems improve business insights and decision-making.',
    },
  ]

  const projects = [
    {
      title: 'AI Based Automation System',

      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop',

      desc:
        'Advanced intelligent automation system using AI and machine learning.',
    },

    {
      title: 'Business ERP Management',

      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop',

      desc:
        'Custom ERP platform for workflow, HR and business management.',
    },

    {
      title: 'Survey Data Analytics Platform',

      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',

      desc:
        'Research and survey platform with analytics dashboard.',
    },

    {
      title: 'Cloud Based Mobile Application',

      image:
        'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1400&auto=format&fit=crop',

      desc:
        'Cross-platform mobile application integrated with cloud services.',
    },

    {
      title: 'Research Management System',

      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop',

      desc:
        'Digital platform for academic and industrial research workflow management.',
    },

    {
      title: 'Internship Management Portal',

      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop',

      desc:
        'Student internship management and performance tracking portal.',
    },
  ]

  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-blue-900">

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3 md:gap-4">

            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/30">

              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-cover"
              />

            </div>

            <div>

              <h1 className="text-lg md:text-3xl font-bold">
                WIN Research Centre
              </h1>

              <p className="text-gray-400 text-[10px] md:text-sm">
                Research • Innovation • Technology
              </p>

            </div>

          </div>

          {/* DESKTOP MENU */}

          <ul className="hidden lg:flex gap-8 text-gray-300 font-medium">

            <li>
              <a href="#home" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-blue-400 transition">
                Services
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="#prajna" className="hover:text-blue-400 transition">
                Prajna
              </a>
            </li>

            <li>
              <a href="#careers" className="hover:text-blue-400 transition">
                Careers
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>

          </ul>

          {/* CONTACT BUTTON */}

          <a
            href="#contact"
            className="hidden lg:block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30"
          >
            Get In Touch
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        {/* MOBILE MENU */}

        {menuOpen && (

          <div className="lg:hidden bg-black border-t border-blue-900 px-6 py-6 space-y-5">

            <a
              href="#home"
              className="block text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#services"
              className="block text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>

            <a
              href="#projects"
              className="block text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#prajna"
              className="block text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Prajna
            </a>

            <a
              href="#careers"
              className="block text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Careers
            </a>

            <a
              href="#contact"
              className="block text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

          </div>

        )}

      </nav>

      {/* HERO */}

      <section
        id="home"
        className="relative min-h-screen flex items-center bg-black overflow-hidden pt-24"
      >

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.25),transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[4px] text-blue-400 mb-5 text-xs md:text-sm">
              Innovative Solutions For A Better Tomorrow
            </p>

            <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
              Research. Innovation.
              <span className="text-blue-500 block">
                Technology.
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-10">
              WIN Research Centre is a leading software,
              AI, research, internship and digital solutions
              company delivering innovative and impactful
              solutions worldwide.
            </p>

            <div className="flex flex-wrap gap-5">

              <a
                href="#services"
                className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-xl shadow-blue-500/30 hover:scale-105"
              >
                Explore Our Services
              </a>

              <a
                href="#projects"
                className="border border-gray-600 hover:border-blue-500 px-6 md:px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
              >
                View Our Projects
              </a>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop"
              alt="AI"
              className="rounded-[40px] border border-blue-900 shadow-2xl shadow-blue-500/20 relative z-10"
            />

          </motion.div>

        </div>

      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="py-32 bg-white text-black"
      >

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <p className="text-blue-600 font-semibold tracking-wide mb-3">
            WHAT WE DO
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-[30px] p-10 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
              >

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 mb-8"
                />

                <h3 className="text-2xl font-bold mb-5">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <button
                  onClick={() => alert(service.details)}
                  className="text-blue-600 font-semibold"
                >
                  Learn More →
                </button>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="py-32 bg-[#050b18]"
      >

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <p className="text-blue-500 font-semibold tracking-wide mb-3">
            OUR PROJECTS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (

              <div
                key={index}
                className="bg-black border border-blue-900 rounded-[28px] p-10 hover:border-blue-500 transition-all duration-300"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover rounded-2xl mb-8"
                />

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PRAJNA */}

      <section
        id="prajna"
        className="py-32 bg-black"
      >

        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <img
              src={prajnaImage}
              alt="Prajna"
              className="rounded-[35px] shadow-2xl border border-blue-900"
            />

          </div>

          <div>

            <p className="text-blue-500 font-semibold tracking-wide mb-4">
              Prajna
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Prajna Research &
              Innovation Platform
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Prajna is one of the innovative initiatives associated
              with WIN Research Centre focused on research,
              innovation and technology-driven solutions.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              The platform supports academic projects, startup
              innovation, AI-based systems and modern digital
              transformation solutions.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Prajna aims to bridge the gap between technology,
              innovation and real-world implementation.
            </p>

          </div>

        </div>

      </section>

      {/* CAREERS */}

      <section
        id="careers"
        className="py-32 bg-[#050b18]"
      >

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center mb-20">

            <p className="text-blue-500 font-semibold tracking-wide mb-4">
              CAREERS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Build Your Career With Us
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              WIN Research Centre provides opportunities
              for students, developers, researchers and
              innovators to work on real-time projects.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-black border border-blue-900 rounded-[30px] p-10 hover:border-blue-500 transition-all duration-300">

              <h3 className="text-2xl font-bold mb-5">
                Full Stack Developer
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Work on modern web applications using React,
                Node.js and cloud technologies.
              </p>

            </div>

            <div className="bg-black border border-blue-900 rounded-[30px] p-10 hover:border-blue-500 transition-all duration-300">

              <h3 className="text-2xl font-bold mb-5">
                AI/ML Engineer
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Build AI solutions, machine learning models
                and intelligent automation systems.
              </p>

            </div>

            <div className="bg-black border border-blue-900 rounded-[30px] p-10 hover:border-blue-500 transition-all duration-300">

              <h3 className="text-2xl font-bold mb-5">
                Research Intern
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Participate in live research projects,
                analytics and innovation programs.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="py-32 bg-black"
      >

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="bg-[#050b18] border border-blue-900 rounded-[40px] p-14">

            <p className="text-blue-500 font-semibold tracking-wide mb-4">
              CONTACT US
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              Get In Touch With Us
            </h2>

            <div className="grid md:grid-cols-2 gap-12 text-lg">

              <div>

                <h3 className="text-2xl font-bold mb-5 text-blue-400">
                  Contact Details
                </h3>

                <p className="text-gray-400 mb-4">
                  📞 +91 8123784727
                </p>

                <p className="text-gray-400 mb-4">
                  📞 +91 7204946172
                </p>

                <p className="text-gray-400 mb-4">
                  ✉️ ceo@winresearchcentre.in
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold mb-5 text-blue-400">
                  Office Location
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  WIN Research Centre (WRC)
                  <br />
                  Mysore & Bangalore
                  <br />
                  Karnataka, India
                </p>

              </div>

            </div>

            <div className="mt-16">

              <form className="grid gap-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-black border border-blue-900 rounded-xl px-6 py-4 text-white"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-black border border-blue-900 rounded-xl px-6 py-4 text-white"
                />

                <select
                  className="bg-black border border-blue-900 rounded-xl px-6 py-4 text-white"
                >

                  <option>Internship</option>
                  <option>Career</option>
                  <option>Project Development</option>
                  <option>Website Development</option>
                  <option>Mobile App Development</option>
                  <option>AI Solutions</option>
                  <option>Research</option>

                </select>

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="bg-black border border-blue-900 rounded-xl px-6 py-4 text-white"
                ></textarea>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 w-fit"
                >
                  Submit Inquiry
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

