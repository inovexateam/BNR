/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  Trophy, 
  User, 
  Briefcase, 
  Mail, 
  ChevronRight, 
  ExternalLink, 
  Award, 
  GraduationCap, 
  Github, 
  Linkedin, 
  Twitter 
} from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Political Journey", href: "#journey" },
  { name: "Philanthropy", href: "#philanthropy" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const ACHIEVEMENTS = [
  {
    title: "Infrastructural Transformation",
    organization: "Chandanagar Division",
    date: "2016-2021",
    description: "Spearheaded infrastructure projects valued at Rs. 151 Crore, focusing on CC/BT roads and the NH9 widening project.",
    icon: <Briefcase className="w-6 h-6" />,
    tags: ["Development", "Infrastructure"]
  },
  {
    title: "COVID-19 Humanitarian Relief",
    organization: "Bobba Charitable Trust",
    date: "2020",
    description: "Distributed survival kits to 4,000 families with a relief investment of Rs. 45 Lakhs during the pandemic.",
    icon: <Trophy className="w-6 h-6" />,
    tags: ["Philanthropy", "Crisis Response"]
  },
  {
    title: "Clean Water Initiative",
    organization: "Community Wellness",
    date: "2018",
    description: "Established free mineral water plants in rural villages to combat waterborne diseases and poverty.",
    icon: <Award className="w-6 h-6" />,
    tags: ["Health", "Sustainability"]
  },
  {
    title: "Environmental Biodiversity Action",
    organization: "Haritha Haram Program",
    date: "2019",
    description: "Participated in the planting of 1,000 trees near Gangaram Cheruvu to improve local biodiversity and air quality.",
    icon: <ExternalLink className="w-6 h-6" />,
    tags: ["Environment", "Sustainability"]
  }
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <header className="fixed top-0 w-full z-40 px-6 py-10 md:px-12 pointer-events-none">
        <nav className="max-w-7xl mx-auto flex justify-between items-center bg-brand-dark/80 backdrop-blur-sm px-0 py-3 pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter text-brand-accent uppercase"
          >
            Bobba Navatha Reddy
          </motion.div>
          <ul className="hidden md:flex gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-[12px] tracking-[0.1em] uppercase font-medium transition-colors hover:text-brand-accent ${
                    activeSection === link.href.slice(1) ? "text-brand-accent underline underline-offset-4" : "text-brand-muted"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <a href="#contact" className="text-brand-gold text-[12px] font-bold uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">
              Connect
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-end justify-between pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[60px] md:text-[80px] lg:text-[120px] font-black leading-[0.82] tracking-[-0.05em] uppercase mb-0 text-left">
              Bobba Navatha<br /><span className="text-brand-gold">Reddy.</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-[400px] text-brand-muted text-[16px] leading-[1.6] mb-4 text-left font-serif italic"
          >
            "A genuine leader is self-assured enough to stand alone, courageous enough to make difficult decisions, and compassionate enough to listen to the concerns of others."
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-20">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold block mb-10">Academic Excellence</span>
            <div className="flex flex-col gap-4">
              <div className="border border-[#1A1A1A] p-4 rounded-xl">
                <span className="text-[10px] uppercase font-bold text-brand-gold">LL.M. & LLB</span>
                <p className="text-[12px] text-brand-accent mt-1">Osmania & Vinayaka Law College</p>
              </div>
              <div className="border border-[#1A1A1A] p-4 rounded-xl">
                <span className="text-[10px] uppercase font-bold text-brand-gold">M.Sc in Clinical Research</span>
                <p className="text-[12px] text-brand-accent mt-1">Sikkim Manipal University</p>
              </div>
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif italic font-normal mb-10 leading-tight">
                Dedicated to public service since childhood, rooted in heritage and driven by <span className="text-brand-gold">patriotism</span>.
              </h2>
              <div className="space-y-6 text-brand-muted text-[16px] leading-[1.8] max-w-2xl">
                <p>
                  Born on September 16, 1984, in Chandanagar, Telangana, to Bobba Vijay Reddy—a prominent trade union leader—and Bobba Alivela. My life has been a journey of commitment to the people and society.
                </p>
                <p>
                  I believe that every individual is indebted to society and should work collectively to build a sense of unity through dedicated service.
                </p>
              </div>

              <div className="flex gap-20 mt-16 pt-16 border-t border-[#1A1A1A]">
                <div className="flex flex-col">
                  <span className="text-[32px] font-bold text-brand-accent leading-none">151 Cr</span>
                  <span className="text-[10px] uppercase tracking-[0.1em] text-brand-muted font-bold mt-2">Dev Investment</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[32px] font-bold text-brand-accent leading-none">1000+</span>
                  <span className="text-[10px] uppercase tracking-[0.1em] text-brand-muted font-bold mt-2">Trees Planted</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Political Journey */}
      <section id="journey" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-[#1A1A1A]">
         <div className="grid md:grid-cols-[1fr_2fr] gap-20">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold block mb-10">Political Career</span>
              <div className="space-y-8">
                 <div className="relative pl-6 border-l border-brand-gold/30">
                    <span className="absolute left-0 top-0 w-1 h-3 bg-brand-gold -ml-[1px]" />
                    <span className="text-[10px] font-bold text-brand-gold block uppercase tracking-widest">2025 - Present</span>
                    <h4 className="text-xl font-serif italic mt-1">BRS Homecoming</h4>
                    <p className="text-xs text-brand-muted mt-2">Returning to "own nest" to emphasize vision for development.</p>
                 </div>
                 <div className="relative pl-6 border-l border-brand-gold/10">
                    <span className="text-[10px] font-bold text-brand-muted block uppercase tracking-widest">2022 - 2024</span>
                    <h4 className="text-xl font-serif italic mt-1">BJP Leadership</h4>
                    <p className="text-xs text-brand-muted mt-2">District Secretary of Rangareddy, focusing on community mobilization.</p>
                 </div>
                 <div className="relative pl-6 border-l border-brand-gold/10">
                    <span className="text-[10px] font-bold text-brand-muted block uppercase tracking-widest">2010 - 2021</span>
                    <h4 className="text-xl font-serif italic mt-1">BRS / TRS Tenure</h4>
                    <p className="text-xs text-brand-muted mt-2">TRS Women President (2011-15) & Corporator (2016-21).</p>
                 </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
               <h2 className="text-4xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter">
                  A career of <br /><span className="text-brand-gold">Commitment</span>
               </h2>
               <p className="text-brand-muted mt-10 max-w-xl text-lg italic font-serif">
                  "While I was physically elsewhere for a time, my heart always remained with the party and its vision for development."
               </p>
            </div>
         </div>
      </section>

      {/* Philanthropy */}
      <section id="philanthropy" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-[#1A1A1A]">
         <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
               <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold block mb-10">Philanthropy</span>
               <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Bobba Charitable Trust</h2>
               <div className="space-y-4 text-brand-muted leading-relaxed">
                  <p>Founded in 2007, the trust leads initiatives for the poor and weaker sections, focusing on Education, Health, and Women's Empowerment.</p>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                       <span className="text-brand-gold font-bold">01.</span>
                       <div>
                          <p className="text-brand-accent font-bold text-sm uppercase">Education Support</p>
                          <p className="text-xs">Financial assistance for underprivileged students in Chandanagar and Mulugu.</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <span className="text-brand-gold font-bold">02.</span>
                       <div>
                          <p className="text-brand-accent font-bold text-sm uppercase">Clean Water</p>
                          <p className="text-xs">Established free mineral water plants to combat waterborne diseases.</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <span className="text-brand-gold font-bold">03.</span>
                       <div>
                          <p className="text-brand-accent font-bold text-sm uppercase">Women's Empowerment</p>
                          <p className="text-xs">Legal support and security advocacy for women facing domestic challenges.</p>
                       </div>
                    </li>
                  </ul>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/seed/relief/500/700" alt="Relief" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
               <img src="https://picsum.photos/seed/service/500/700" alt="Service" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-[3/4] object-cover mt-20" referrerPolicy="no-referrer" />
            </div>
         </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-[#1A1A1A]">
         <div className="mb-20">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold block mb-10">Community Impact</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif italic"
            >
              Development Highlights
            </motion.h2>
         </div>

         <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {ACHIEVEMENTS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="pt-8 border-t border-[#222]"
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-[28px] font-serif italic text-brand-accent">{item.title}</h3>
                  <span className="text-[12px] font-bold text-brand-gold tracking-widest">{item.date}</span>
                </div>
                <p className="text-brand-muted text-[14px] leading-[1.6] mb-6">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-brand-muted">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 px-6 relative max-w-7xl mx-auto border-t border-[#1A1A1A]">
        <div className="flex justify-between items-end">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold block mb-10">Contact</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-[-0.03em] leading-[0.9] mb-0">
              Build the <br /><span className="text-brand-gold">Future</span> Together.
            </h2>
            <div className="mt-10 space-y-4">
              <p className="text-brand-muted uppercase text-xs tracking-[0.3em] font-bold">H.No: 1-36/4/6, Road No: 05, Jawahar Colony, Chandanagar</p>
              <div className="flex gap-10">
                <a href="mailto:bobbanavathareddy@gmail.com" className="text-brand-accent hover:text-brand-gold transition-colors text-sm font-bold border-b border-brand-accent pb-1">bobbanavathareddy@gmail.com</a>
                <span className="text-brand-muted text-sm font-bold">78939 69999</span>
              </div>
            </div>
          </div>
          
          <motion.a
            href="mailto:bobbanavathareddy@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[160px] h-[160px] rounded-full border border-brand-gold flex items-center justify-center text-center text-[12px] uppercase tracking-[0.1em] text-brand-gold font-bold hover:bg-brand-gold hover:text-brand-dark transition-all"
          >
            Get in<br />Touch
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-brand-primary/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-lg font-display font-bold tracking-tight text-brand-accent italic">
            Portfolio.
          </div>
          <div className="text-sm text-brand-primary/40 font-medium">
            &copy; {new Date().getFullYear()} All Rights Reserved. Built with Precision.
          </div>
          <div className="flex gap-6">
            <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

