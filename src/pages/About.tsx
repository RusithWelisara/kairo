import { motion } from 'framer-motion';
import groupPhoto from '../assests/members/Group Photo.jpg';

const About = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-[1400px] mx-auto">
            {/* Header */}
            <div className="max-w-3xl mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight font-serif"
                >
                    About Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
                >
                    A Sri Lankan indie studio built on passion, precision, and pixel art.
                </motion.p>
            </div>

            {/* Photo + Story */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-soft-xl border border-white/5 bg-gray-950 p-2 group">
                        <img
                            src={groupPhoto}
                            alt="Team Kairo Group Photo"
                            className="rounded-xl w-full h-auto object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="space-y-6 text-gray-400 text-base leading-relaxed"
                >
                    <p>
                        We are <span className="text-white font-medium">Team Kairo</span>, an indie game studio founded by five passionate students with a shared vision for immersive interactive experiences.
                    </p>
                    <p>
                        Our mission is to create <span className="text-white font-medium">atmospheric pixel art games</span> that transport players to dreamlike worlds. We believe in the power of storytelling through interactive mediums, blending nostalgia with modern mechanics.
                    </p>
                    <p>
                        It all started with our participation in <span className="text-white font-medium">EXE 2025</span>, where we developed our first finished title, <em className="text-gray-300">Floatlands</em>.
                    </p>
                </motion.div>
            </div>

            {/* Philosophy */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-white tracking-tight">Our Philosophy</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Dreamlike Aesthetics", desc: "We focus on creating visually stunning pixel art that feels like a lucid dream." },
                        { title: "Immersive Audio", desc: "Soundscapes that wrap around the player, enhancing the emotional depth." },
                        { title: "Player-Driven Stories", desc: "Narratives that matter, where your choices shape the world." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -4 }}
                            className="bg-gray-900 p-8 rounded-2xl border border-white/5 hover:border-white/10 shadow-soft hover:shadow-soft-lg transition-all duration-300"
                        >
                            <h3 className="text-lg font-semibold text-white mb-3 font-serif">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default About;
