

import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen py-20 px-6 max-w-7xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
                About Us
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <img
                        src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Team Kairo working"
                        className="rounded-xl shadow-2xl border border-gray-700"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6 text-gray-300 text-lg leading-relaxed"
                >
                    <p>
                        We are <span className="text-cyan-400 font-bold">Team Kairo</span>, a Sri Lankan indie game studio founded by 5 passionate students.
                    </p>
                    <p>
                        Our mission is to create <span className="text-purple-400 font-semibold">surreal pixel art games</span> that transport players to dreamlike worlds. We believe in the power of storytelling through interactive mediums, blending nostalgia with modern mechanics.
                    </p>
                    <p>
                        It all started with our participation in <span className="text-yellow-400 font-bold">EXE 2025</span>, where we developed our first finished title, <em>Floatlands</em>.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm"
            >
                <h2 className="text-3xl font-bold mb-6 text-white">Our Philosophy</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Dreamlike Aesthetics", desc: "We focus on creating visually stunning pixel art that feels like a lucid dream." },
                        { title: "Immersive Audio", desc: "Soundscapes that wrap around the player, enhancing the emotional depth." },
                        { title: "Player-Driven Stories", desc: "Narratives that matter, where your choices shape the world." }
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-900/50 p-6 rounded-xl hover:bg-gray-800 transition-colors">
                            <h3 className="text-xl font-bold text-cyan-400 mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default About;
