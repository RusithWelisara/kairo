


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

    const GameCard = ({ game, index }: { game: typeof games[0], index: number }) => {
        const [currentSlide, setCurrentSlide] = useState(0);
        const [isPaused, setIsPaused] = useState(false);

        useEffect(() => {
            if (isPaused) return;
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % game.screenshots.length);
            }, 4000);
            return () => clearInterval(interval);
        }, [currentSlide, isPaused, game.screenshots.length]);

        const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % game.screenshots.length);
        const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + game.screenshots.length) % game.screenshots.length);

        return (
            <motion.div
                layoutId={`game-card-${game.id}`}
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }} // smooth spring
                className="bg-gray-900 border border-white/5 hover:border-white/10 shadow-soft hover:shadow-soft-xl rounded-2xl overflow-hidden flex flex-col group/card relative"
            >
                {/* Screenshot Slideshow */}
                <div
                    className="relative h-56 overflow-hidden bg-gray-950"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentSlide}
                            src={game.screenshots[currentSlide]}
                            alt={`${game.title} screenshot ${currentSlide + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        />
                    </AnimatePresence>

                    {/* Overlay gradient for readability */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-900 to-transparent opacity-80 z-10" />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-semibold px-2.5 py-1 rounded-full z-20 shadow-soft">
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            {game.status}
                        </span>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover/card:opacity-100 transition-all duration-300 z-20 border border-white/5 hover:border-white/20 select-none"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover/card:opacity-100 transition-all duration-300 z-20 border border-white/5 hover:border-white/20 select-none"
                    >
                        <ChevronRight size={18} />
                    </button>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                        {game.screenshots.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white w-5' : 'bg-white/40 hover:bg-white/70 w-1.5'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="p-7 flex flex-col flex-grow relative">
                    <h3 className="text-2xl font-bold text-white mb-1 font-serif tracking-tight">{game.title}</h3>
                    <p className="text-gray-400 text-sm font-medium mb-4">{game.genre}</p>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                        {game.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {game.platforms.map(platform => (
                            <span key={platform} className="px-2.5 py-1 bg-white/5 border border-white/5 text-xs font-medium rounded-md text-gray-300 shadow-sm">{platform}</span>
                        ))}
                    </div>

                    <div className={`grid ${game.github ? 'grid-cols-2' : 'grid-cols-1'} gap-3 mt-auto`}>
                        <a
                            href={game.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-2.5 bg-white text-gray-950 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5"
                        >
                            <Play size={16} className="fill-current" /> Play Now
                        </a>
                        {game.github && (
                            <a
                                href={game.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-2.5 bg-transparent border border-white/10 text-white rounded-lg font-semibold hover:bg-white/5 transition-all text-sm"
                            >
                                <Github size={16} /> Source Code
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-[1400px] mx-auto">
            <div className="max-w-3xl mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight font-serif"
                >
                    Our Catalog
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
                >
                    Discover the immersive worlds we've built. Each title represents our commitment to pixel perfection, precise mechanics, and atmospheric storytelling.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {games.map((game, index) => (
                    <GameCard key={game.id} game={game} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Games;
