"use client";

import { Shield, Brain, Cloud, Lock, TrendingUp, Code, Mail, Linkedin, Github, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-lg border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">Secure By Faith</div>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#blog" className="hover:text-cyan-400 transition-colors">Blog</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center cyber-grid relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-7xl font-bold mb-6 animate-float">
              <span className="gradient-text">Bonheur Byiringiro</span>
            </h1>
            
            {/* Subtitle with Typing Effect */}
            <div className="text-3xl mb-8 text-cyan-400">
              <TypewriterText texts={[
                "AI Security Researcher",
                "Machine Learning Engineer",
                "Cloud Security Specialist",
                "Penetration Tester"
              ]} />
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Masters student in Artificial Intelligence specializing in{" "}
              <span className="text-cyan-400 font-semibold">AI/ML Security</span>,{" "}
              <span className="text-purple-400 font-semibold">LLM Safety</span>, and{" "}
              <span className="text-pink-400 font-semibold">Cloud Security</span>.
              Building secure, intelligent systems for the future.
            </p>
            
            {/* Faith Statement */}
            <p className="text-lg text-cyan-400/80 max-w-2xl mx-auto mb-12 italic">
              "Using God-given talents to secure technology and protect digital communities."
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-6 justify-center mb-16">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:scale-105 transition-transform glow-on-hover"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors"
              >
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <StatCard icon={<Brain />} value="AI/ML" label="Security Focus" />
              <StatCard icon={<Shield />} value="Cloud" label="Security Expert" />
              <StatCard icon={<Code />} value="10+" label="Projects" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="gradient-text">About Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full aspect-square bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl p-1 glow">
                <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                  <Shield className="w-48 h-48 text-cyan-400" />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-cyan-400">Security Meets Intelligence</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a dual-degree student at <span className="text-purple-400 font-semibold">Oklahoma Christian University</span>, 
                pursuing a B.S. in Computer Science with a focus on Cybersecurity and a Masters in Artificial Intelligence.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                As a <span className="text-cyan-400 font-semibold">child of God</span>, I believe in using technology as a tool for good. 
                My passion lies at the intersection of <span className="text-cyan-400 font-semibold">AI security</span> and
                <span className="text-pink-400 font-semibold"> cloud infrastructure</span>, where I work to protect systems and people 
                from digital threats. I specialize in securing machine learning models, defending against adversarial attacks, 
                and ensuring LLM safety—guided by principles of <span className="text-purple-400 font-semibold">ethical stewardship</span> and 
                <span className="text-pink-400 font-semibold">integrity</span>.
              </p>
              
              <div className="pt-6">
                <h4 className="text-xl font-semibold mb-4 text-purple-400">Current Focus:</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Adversarial Machine Learning & Model Security
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    LLM Safety & Jailbreak Prevention
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    Cloud Security Architecture (AWS, Azure, GCP)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    AI-Powered Threat Detection Systems
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Ethical AI Development & Digital Stewardship
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Tech Stack</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <SkillCategory
              icon={<Brain className="w-8 h-8" />}
              title="AI & Machine Learning"
              skills={[
                "PyTorch & TensorFlow",
                "Hugging Face Transformers",
                "LangChain & LlamaIndex",
                "Scikit-learn & Pandas",
                "OpenAI & Anthropic APIs",
                "Adversarial ML Research"
              ]}
            />
            
            <SkillCategory
              icon={<Shield className="w-8 h-8" />}
              title="Security Tools"
              skills={[
                "Burp Suite & OWASP ZAP",
                "Metasploit & Kali Linux",
                "Wireshark & Nmap",
                "Snort & Suricata",
                "Ghidra & IDA Pro",
                "Container Security"
              ]}
            />
            
            <SkillCategory
              icon={<Cloud className="w-8 h-8" />}
              title="Cloud & DevSecOps"
              skills={[
                "AWS Security Services",
                "Azure Security Center",
                "GCP Cloud Armor",
                "Docker & Kubernetes",
                "Terraform & Ansible",
                "GitLab CI/CD Pipelines"
              ]}
            />
          </div>

          {/* Programming Languages */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-cyan-400">Languages & Frameworks</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Python", "JavaScript/TypeScript", "C/C++", "Bash", "PowerShell", "SQL", "Go", "Rust"].map((lang) => (
                <span 
                  key={lang}
                  className="px-6 py-3 bg-gray-800 border border-cyan-500/30 rounded-lg hover:border-cyan-500 hover:bg-gray-700 transition-all glow-on-hover cursor-default"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Featured Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="LLM Jailbreak Detector"
              description="AI-powered system to detect and prevent jailbreak attempts on Large Language Models using pattern recognition and adversarial training."
              tags={["Python", "PyTorch", "Transformers", "Security"]}
              icon={<Lock />}
            />
            
            <ProjectCard
              title="Cloud Security Scanner"
              description="Automated security assessment tool for AWS, Azure, and GCP environments. Identifies misconfigurations and compliance violations."
              tags={["Python", "AWS", "Azure", "Terraform"]}
              icon={<Cloud />}
            />
            
            <ProjectCard
              title="Adversarial ML Defense"
              description="Research project on defending machine learning models against adversarial attacks using robust training techniques."
              tags={["TensorFlow", "Research", "AI Security"]}
              icon={<Brain />}
            />
            
            <ProjectCard
              title="AI Threat Intelligence"
              description="Machine learning system that analyzes threat data to predict and classify cyber threats in real-time."
              tags={["Python", "ML", "Threat Intel", "APIs"]}
              icon={<TrendingUp />}
            />
            
            <ProjectCard
              title="Secure MLOps Pipeline"
              description="End-to-end MLOps pipeline with integrated security scanning, model validation, and automated deployment."
              tags={["Docker", "Kubernetes", "CI/CD", "ML"]}
              icon={<Code />}
            />
            
            <ProjectCard
              title="Penetration Testing Lab"
              description="Custom vulnerable lab environment for practicing penetration testing techniques and developing security tools."
              tags={["Kali Linux", "Metasploit", "Web Security"]}
              icon={<Shield />}
            />
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://github.com/BonheurByiringiro" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors glow-on-hover"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Latest Insights</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <BlogCard
              title="Securing LLMs: A Practical Guide"
              excerpt="Exploring common vulnerabilities in Large Language Models and practical techniques to secure them in production environments."
              date="Coming Soon"
              readTime="8 min read"
            />
            
            <BlogCard
              title="Adversarial Attacks on ML Models"
              excerpt="Deep dive into adversarial machine learning attacks and defense strategies for robust AI systems."
              date="Coming Soon"
              readTime="12 min read"
            />
            
            <BlogCard
              title="Cloud Security Best Practices"
              excerpt="Comprehensive guide to securing cloud infrastructure across AWS, Azure, and GCP platforms."
              date="Coming Soon"
              readTime="10 min read"
            />
            
            <BlogCard
              title="AI-Powered Threat Detection"
              excerpt="Building intelligent security systems that leverage machine learning for real-time threat detection and response."
              date="Coming Soon"
              readTime="15 min read"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Interested in AI security, cloud architecture, or collaboration? Let's talk!
          </p>

          <div className="flex gap-6 justify-center mb-12">
            <SocialLink 
              href="mailto:byibonheur@gmail.com" 
              icon={<Mail />} 
              label="Email"
            />
            <SocialLink 
              href="https://linkedin.com/in/bonheur-byiringiro-0a65092bb" 
              icon={<Linkedin />} 
              label="LinkedIn"
            />
            <SocialLink 
              href="https://github.com/BonheurByiringiro" 
              icon={<Github />} 
              label="GitHub"
            />
            <SocialLink 
              href="https://instagram.com/b.wayne_official" 
              icon={<Instagram />} 
              label="Instagram | Trust God"
            />
          </div>

          <div className="text-gray-400">
            <p>📍 Based in Edmond, Oklahoma</p>
            <p className="mt-2">🎓 Oklahoma Christian University</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-cyan-400 mb-2 font-semibold">Trust God 🙏</p>
          <p className="text-gray-400">© 2025 Bonheur Byiringiro. Securing the Future with AI.</p>
          <p className="text-gray-500 text-sm mt-2">"Whatever you do, work at it with all your heart, as working for the Lord." - Colossians 3:23</p>
        </div>
      </footer>
    </main>
  );
}

// Components
function TypewriterText({ texts }: { texts: string[] }) {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentText];
      
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentText((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, displayText, isDeleting, texts]);

  return (
    <span className="font-mono">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="p-6 bg-gray-900 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all glow-on-hover">
      <div className="flex justify-center mb-3 text-cyan-400">{icon}</div>
      <div className="text-2xl font-bold text-cyan-400">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
}

function SkillCategory({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) {
  return (
    <div className="p-8 bg-gray-900 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all glow-on-hover">
      <div className="flex items-center gap-3 mb-6 text-purple-400">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-300">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, tags, icon }: { 
  title: string; 
  description: string; 
  tags: string[]; 
  icon: React.ReactNode;
}) {
  return (
    <div className="p-6 bg-gray-900 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all glow-on-hover group">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-gray-800 rounded-lg text-cyan-400 group-hover:text-purple-400 transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-xs bg-gray-800 border border-purple-500/30 rounded-full text-purple-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function BlogCard({ title, excerpt, date, readTime }: { 
  title: string; 
  excerpt: string; 
  date: string; 
  readTime: string;
}) {
  return (
    <div className="p-6 bg-gray-900 rounded-xl border border-pink-500/30 hover:border-pink-500 transition-all glow-on-hover group cursor-pointer">
      <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
        <span>{date}</span>
        <span>{readTime}</span>
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-pink-400 transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{excerpt}</p>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-gray-800 rounded-lg border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all glow-on-hover group"
      aria-label={label}
    >
      <div className="text-cyan-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
    </a>
  );
}
