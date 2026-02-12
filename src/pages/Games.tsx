


import { motion, AnimatePresence } from 'framer-motion';
import { Play, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Import Floatlands screenshots
import floatlands1 from '../assests/games/floatlands/0S0uGA.png';
import floatlands2 from '../assests/games/floatlands/LhpMwD.png';
import floatlands3 from '../assests/games/floatlands/P1gzOM.png';
import floatlands4 from '../assests/games/floatlands/PILjGi.png';

// Import Cursed Adventure screenshots
import cursed1 from '../assests/games/cursed adventure/DBk5g9.png';
import cursed2 from '../assests/games/cursed adventure/fnEX_O.png';
import cursed3 from '../assests/games/cursed adventure/q9gVRx.png';
import cursed4 from '../assests/games/cursed adventure/uV2izH.png';

const Games = () => {
    const games = [
        {
            id: 1,
            title: "Floatlands",
            genre: "Dreamlike 2D Pixel Adventure",
            description: "Floatlands is our first completed title — a dreamlike platformer where Pedro journeys across floating worlds to rescue Sue. Originally created for EXE 2025.",
            screenshots: [floatlands1, floatlands2, floatlands3, floatlands4],
            status: "Finished",
            platforms: ["PC", "Mobile"],
            link: "https://team-kairo.itch.io/floatlands",
            github: "https://github.com/KingSalagoya/floatlands"
        },
        {
            id: 2,
            title: "Cursed Adventure",
            genre: "Action-Adventure",
            description: "A mysterious and challenging journey through cursed lands. Uncover secrets and survive the dangers that lurk in the shadows.",
            screenshots: [cursed1, cursed2, cursed3, cursed4],
            status: "Finished",
            platforms: ["PC"],
            link: "https://team-kairo.itch.io/the-cursed-adventure",
            github: "https://github.com/KingSalagoya/The-Cursed-Adventure"
        }
    ];

    // GameCard component with slideshow
    const GameCard = ({ game, index }: { game: typeof games[0], index: number }) => {
        const [currentSlide, setCurrentSlide] = useState(0);
        const [isPaused, setIsPaused] = useState(false);

        // Auto-advance slideshow
        useEffect(() => {
            if (isPaused) return;

            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % game.screenshots.length);
            }, 3000); // Change slide every 3 seconds

            return () => clearInterval(interval);
        }, [currentSlide, isPaused, game.screenshots.length]);

        const nextSlide = () => {
            setCurrentSlide((prev) => (prev + 1) % game.screenshots.length);
        };

        const prevSlide = () => {
            setCurrentSlide((prev) => (prev - 1 + game.screenshots.length) % game.screenshots.length);
        };

        return (
            <motion.div
                key={game.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 shadow-lg flex flex-col"
            >
                {/* Screenshot Slideshow */}
                <div
                    className="relative h-48 overflow-hidden group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentSlide}
                            src={game.screenshots[currentSlide]}
                            alt={`${game.title} screenshot ${currentSlide + 1}`}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                        />
                    </AnimatePresence>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 bg-blue-500 text-xs font-bold px-2 py-1 rounded shadow z-10">
                        {game.status}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {game.screenshots.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-cyan-400 w-6' : 'bg-white/50 hover:bg-white/70'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
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

                    <div className={`grid ${game.github ? 'grid-cols-2' : 'grid-cols-1'} gap-3 mt-auto`}>
                        <a
                            href={game.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:from-cyan-500 hover:to-purple-500 transition-all text-sm"
                        >
                            <Play size={16} /> Play
                        </a>
                        {game.github && (
                            <a
                                href={game.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-3 bg-gray-700 rounded-lg font-bold hover:bg-gray-600 transition-all text-sm border border-gray-600"
                            >
                                <Github size={16} /> GitHub
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen py-20 px-6 max-w-7xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
                Our Projects
            </motion.h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {games.map((game, index) => (
                    <GameCard key={game.id} game={game} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Games;
