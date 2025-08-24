import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Users, Mail, Github, Twitter, Linkedin, ExternalLink, Gamepad2, Zap, Trophy, Star } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGame, setActiveGame] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const games = [
    {
      id: 1,
      title: "Floatlands",
      genre: "Dreamlike 2D Pixel Adventure",
      description: "Floatlands is a dreamlike platformer where Pedro journeys across floating worlds to rescue Sue — and uncover whether his reality is real… or just a dream.",
      image: "https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "In Development",
      platforms: ["PC", "Mobile"],
      developmentLink: "#"
    }
  ];

  const teamMembers = [
    {
      name: "Sasath Ramawikrama",
      role: "Project Manager / Jack of all Trades",
      bio: "Leading the vision and coordinating our dream team.",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Rusith Heshan Welisara",
      role: "Co Project Manager / Jack of all Trades",
      bio: "Co-leading development and bringing ideas to life.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Thenura Sathmira",
      role: "Artist / Level Designer",
      bio: "Crafting the visual magic of our floating worlds.",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Janindu Sri Damsara",
      role: "Sound Designer / Level Designer / Trailer",
      bio: "Creating the audio landscapes that bring dreams to life.",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Wenusha Sri Kawithma",
      role: "Artist",
      bio: "Painting the pixel worlds where dreams come alive.",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const ParticleBackground = () => (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite alternate`
          }}
        ></div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <ParticleBackground />
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes slideInUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 3s ease-in-out infinite; }
        .animate-slide-in-up { animation: slideInUp 0.8s ease-out forwards; }
        
        .neon-glow {
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.2);
        }
        
        .neon-border {
          border: 2px solid transparent;
          background: linear-gradient(45deg, #00D4FF, #A855F7) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: exclude;
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                KAIRO
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'Games', 'Team', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-b border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'Games', 'Team', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div 
          className="text-center max-w-5xl mx-auto transform"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="mb-8 relative">
            <Zap className="w-20 h-20 text-cyan-400 mx-auto mb-6 animate-float" />
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-in-up">
              KAIRO
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-in-up max-w-3xl mx-auto">
              Crafting Immersive Gaming Experiences That Push the Boundaries of Interactive Entertainment
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 neon-glow">
              Explore Our Games
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Meet the Team
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse-slow"></div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Games
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Dive into worlds where innovation meets imagination. Each game is crafted with passion and precision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <div
                key={game.id}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group cursor-pointer"
                onMouseEnter={() => setActiveGame(game.id)}
                onMouseLeave={() => setActiveGame(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      game.status === 'Released' ? 'bg-green-500' :
                      game.status === 'Coming Soon' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}>
                      {game.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {game.title}
                  </h3>
                  <p className="text-purple-400 font-medium mb-3">{game.genre}</p>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{game.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.platforms.map((platform) => (
                      <span key={platform} className="bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-300">
                        {platform}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                    <Play size={16} />
                    <span>Learn More</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our passionate creators who bring virtual worlds to life with their expertise and creativity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-cyan-400 to-purple-600 p-1">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-400 text-sm">Games Shipped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">2M+</div>
                <div className="text-gray-400 text-sm">Active Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                <div className="text-gray-400 text-sm">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Join Our Universe
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to embark on an epic gaming journey? Get in touch with us or follow our latest updates.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
              <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-400">hello@kairogames.com</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-400">Join our Discord server</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-400/50 transition-all duration-300">
              <Trophy className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Careers</h3>
              <p className="text-gray-400">careers@kairogames.com</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: '#', color: 'hover:text-gray-400' },
              { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
              { icon: Linkedin, href: '#', color: 'hover:text-blue-600' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`text-gray-500 ${social.color} transition-colors duration-300 transform hover:scale-110`}
              >
                <social.icon size={32} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Gamepad2 className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              KAIRO
            </span>
          </div>
          <p className="text-gray-500">
            © 2025 KAIRO Game Development Studio. Crafting the future of gaming.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;