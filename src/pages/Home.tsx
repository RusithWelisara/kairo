

import { Link } from 'react-router-dom';
import { Zap, Play, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
                <div className="text-center max-w-5xl mx-auto z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 relative"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Zap className="w-24 h-24 text-cyan-400 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                        </motion.div>
                        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
                            KAIRO
                        </h1>
                        <p className="text-xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                            Crafting <span className="text-cyan-400 font-semibold">Dreamlike Pixel Worlds</span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            to="/games"
                            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-lg overflow-hidden shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 skew-x-12 -translate-x-full"></div>
                            <span className="relative flex items-center gap-2">
                                Explore Games <ArrowRight size={20} />
                            </span>
                        </Link>
                        <Link
                            to="/team"
                            className="px-8 py-4 border-2 border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-white rounded-full font-bold text-lg transition-all duration-300 hover:bg-purple-500/10 hover:scale-105"
                        >
                            Meet the Team
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Game Section (Mini) */}
            <section className="py-20 px-6 bg-black/20 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <motion.img
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                src="https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Floatlands"
                                className="rounded-2xl shadow-2xl border border-cyan-500/20 transform hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                        <div className="flex-1 space-y-6">
                            <h2 className="text-4xl font-bold text-white">Our First Hit: <span className="text-cyan-400">Floatlands</span></h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Our dreamlike platformer is now fully released! Journey across floating worlds with Pedro to rescue Sue and uncover the truth.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group">
                                    <Play size={20} className="fill-current group-hover:scale-110 transition-transform" />
                                    Watch Trailer
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
