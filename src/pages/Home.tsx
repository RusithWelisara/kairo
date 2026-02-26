import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assests/logo.jpg';

const Home = () => {
    return (
        <div className="relative bg-gray-950">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
                {/* Background ambient glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

                <div className="text-center max-w-5xl mx-auto z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-12 relative flex flex-col items-center"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="mb-8"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shadow-soft-lg">
                                <img src={logo} alt="KAIRO Logo" className="w-full h-full object-cover opacity-90" />
                            </div>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tight mb-6 leading-tight">
                            Interactive Worlds,<br />
                            <span className="text-gray-400">Crafted with Precision.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Kairo Games is an independent studio dedicated to building atmospheric, systems-driven experiences with meticulous attention to detail.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            to="/games"
                            className="group relative px-7 py-3.5 bg-white text-gray-950 rounded-xl font-semibold text-sm md:text-base shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            Explore Catalog <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            to="/team"
                            className="px-7 py-3.5 border border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium text-sm md:text-base transition-all duration-300 shadow-sm"
                        >
                            Meet the Team
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Game Section */}
            <section className="py-32 px-6 border-t border-white/5 bg-gray-900/30">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="flex-1 w-full"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-soft-xl border border-white/5 bg-gray-950 flex items-center justify-center p-2 group">
                                <img
                                    src="https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="Floatlands"
                                    className="rounded-xl w-full h-auto object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                            className="flex-1 space-y-8"
                        >
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                    <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Featured Title</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-4 leading-tight">Floatlands</h2>
                                <p className="text-gray-400 text-lg leading-relaxed font-light">
                                    Our dreamlike platformer is now fully released. Journey across drifting ecosystems with Pedro to rescue Sue, uncover the truth behind the fragmentation, and master precise traversal mechanics.
                                </p>
                            </div>

                            <a href="https://team-kairo.itch.io/floatlands" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-medium group hover:text-gray-300 transition-colors">
                                <span className="bg-white/10 rounded-full p-2.5 group-hover:bg-white/20 transition-colors">
                                    <Play size={16} className="fill-current" />
                                </span>
                                Watch the Trailer
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
