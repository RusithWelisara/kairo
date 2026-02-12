

import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

const Games = () => {
    const games = [
        {
            id: 1,
            title: "Floatlands",
            genre: "Dreamlike 2D Pixel Adventure",
            description: "Floatlands is our first completed title — a dreamlike platformer where Pedro journeys across floating worlds to rescue Sue. Originally created for EXE 2025.",
            image: "https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=800",
            status: "Finished",
            platforms: ["PC", "Mobile"],
            link: "https://team-kairo.itch.io/floatlands"
        }
    ];

    return (
        <div className="py-20 px-6 max-w-7xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
                Our Projects
            </motion.h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {games.map((game) => (
                    <motion.div
                        key={game.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 shadow-lg"
                    >
                        <div className="relative h-48 overflow-hidden group">
                            <img src={game.image} alt={game.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute top-4 right-4 bg-blue-500 text-xs font-bold px-2 py-1 rounded shadow">{game.status}</div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
                            <p className="text-purple-400 text-sm font-semibold mb-3">{game.genre}</p>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed bg-gray-900/30 p-3 rounded">
                                {game.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {game.platforms.map(platform => (
                                    <span key={platform} className="px-2 py-1 bg-gray-700 text-xs rounded text-gray-300">{platform}</span>
                                ))}
                            </div>

                            <a
                                href={game.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:from-cyan-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2"
                            >
                                <Play size={18} /> Play Now <ExternalLink size={16} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Games;
