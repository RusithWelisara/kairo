import { motion, AnimatePresence } from 'framer-motion';
import { Play, Github, ChevronLeft, ChevronRight, ChevronDown, ChevronRight as ChevronArrowRight } from 'lucide-react';
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

// Import Liar screenshots
import liar1 from '../assests/games/liar/1.png';
import liar2 from '../assests/games/liar/2.png';
import liar3 from '../assests/games/liar/3.png';
import liar4 from '../assests/games/liar/4.png';
import liar5 from '../assests/games/liar/5.png';
import liar6 from '../assests/games/liar/6.png';
import liar7 from '../assests/games/liar/7.png';

const Games = () => {
    const games = [
        {
            id: 1,
            title: "Liar",
            genre: "Horror",
            description: "A horror game built around guilt, memory, and betrayal inside a game that doesn't exist.",
            screenshots: [liar1, liar2, liar3, liar4, liar5, liar6, liar7],
            status: "Game Jam Product",
            platforms: ["PC"],
            playLink: "https://team-kairo.itch.io/liar"
        },
        {
            id: 2,
            title: "Floatlands",
            genre: "Adventure",
            description: "Floatlands is our first completed title — a dreamlike platformer where Pedro journeys across floating worlds to rescue Sue. Originally created for EXE 2025.",
            screenshots: [floatlands1, floatlands2, floatlands3, floatlands4],
            status: "Game Jam Product",
            platforms: ["PC"],
            playLink: "https://team-kairo.itch.io/floatlands",
            github: "https://github.com/KingSalagoya/floatlands"
        },
        {
            id: 3,
            title: "Cursed Adventure",
            genre: "Action-Adventure",
            description: "A mysterious and challenging journey through cursed dungeon. Uncover secrets and survive the dangers that lurk in the shadows.",
            screenshots: [cursed1, cursed2, cursed3, cursed4],
            status: "Game Jam Product",
            platforms: ["PC"],
            playLink: "https://team-kairo.itch.io/the-cursed-adventure",
            github: "https://github.com/KingSalagoya/The-Cursed-Adventure"
        },
        {
            id: 4,
            title: "Runes n Dungeons",
            genre: "Dungeon Crawler RPG",
            description: "A new KAIRO project where players explore rune-powered dungeons, battle dangerous enemies, and evolve their build as they descend deeper.",
            screenshots: [cursed1],
            status: "In Development",
            platforms: ["PC"],
            milestone: "Current milestone: core combat and dungeon loop prototype",
            github: "https://github.com/KingSalagoya/Runes-n-Dungeons"
        },
    ];

    // Multi-select filter state
    const [statusFilter, setStatusFilter] = useState<string[]>([]);
    const [platformFilter, setPlatformFilter] = useState<string[]>([]);
    const [genreFilter, setGenreFilter] = useState<string[]>([]);

    // Unique values for filters
    const statuses = Array.from(new Set(games.map(g => g.status)));
    const platforms = Array.from(new Set(games.flatMap(g => g.platforms)));
    const genres = Array.from(new Set(games.map(g => g.genre)));

    // Filtering logic
    const filteredGames = games.filter(game => {
        const statusMatch = statusFilter.length === 0 || statusFilter.includes(game.status);
        const platformMatch = platformFilter.length === 0 || game.platforms.some(p => platformFilter.includes(p));
        const genreMatch = genreFilter.length === 0 || genreFilter.includes(game.genre);
        return statusMatch && platformMatch && genreMatch;
    });

    // Reset filters
    const resetFilters = () => {
        setStatusFilter([]);
        setPlatformFilter([]);
        setGenreFilter([]);
    };

    // Toggle filter value
    const toggleFilter = (filterArr: string[], setFilter: (v: string[]) => void, value: string) => {
        setFilter(filterArr.includes(value)
            ? filterArr.filter(v => v !== value)
            : [...filterArr, value]);
    };

    // Collapsible state
    const [open, setOpen] = useState({ status: true, platform: true, genre: true });

    const GameCard = ({ game }: { game: typeof games[0] }) => {
        const [currentSlide, setCurrentSlide] = useState(0);
        const [isPaused, setIsPaused] = useState(false);
        const hasPlayableBuild = Boolean(game.playLink);
        const isInDevelopment = game.status === "In Development";
        const primaryLink = game.playLink ?? game.github;
        const statusDotClass = game.status === "In Development" ? "bg-amber-400" : "bg-green-400";

        useEffect(() => {
            if (isPaused || !hasPlayableBuild) return;
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % game.screenshots.length);
            }, 4000);
            return () => clearInterval(interval);
        }, [currentSlide, isPaused, game.screenshots.length, hasPlayableBuild]);

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
                className="relative flex flex-col overflow-hidden bg-gray-900 border border-white/5 hover:border-white/10 shadow-soft hover:shadow-soft-xl rounded-2xl group/card"
            >
                {/* Hero media */}
                {hasPlayableBuild ? (
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
                                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover/card:scale-105"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            />
                        </AnimatePresence>

                        <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />

                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-semibold px-2.5 py-1 rounded-full z-20 shadow-soft">
                            <span className="flex items-center gap-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${statusDotClass}`} />
                                {game.status}
                            </span>
                        </div>

                        <button
                            onClick={prevSlide}
                            className="absolute z-20 p-2 text-white transition-all duration-300 -translate-y-1/2 border rounded-full opacity-0 select-none left-3 top-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-md group-hover/card:opacity-100 border-white/5 hover:border-white/20"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute z-20 p-2 text-white transition-all duration-300 -translate-y-1/2 border rounded-full opacity-0 select-none right-3 top-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-md group-hover/card:opacity-100 border-white/5 hover:border-white/20"
                        >
                            <ChevronRight size={18} />
                        </button>

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
                ) : (
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#20132e] via-[#10213b] to-[#0f172a]">
                        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#8b5cf6_0%,transparent_40%),radial-gradient(circle_at_80%_30%,#3b82f6_0%,transparent_35%)]" />
                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-semibold px-2.5 py-1 rounded-full z-20 shadow-soft">
                            <span className="flex items-center gap-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${statusDotClass}`} />
                                {game.status}
                            </span>
                        </div>
                        <div className="relative z-10 flex flex-col justify-end h-full px-6 py-5">
                            <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">Development Preview</p>
                            <h4 className="font-serif text-xl font-semibold text-white">Runes n Dungeons</h4>
                            <p className="mt-1 text-sm text-white/70">Visual assets are in production. Follow development on GitHub.</p>
                        </div>
                    </div>
                )}

                <div className="relative flex flex-col flex-grow p-7">
                    <h3 className="mb-1 font-serif text-2xl font-bold tracking-tight text-white">{game.title}</h3>
                    <p className="mb-4 text-sm font-medium text-gray-400">{game.genre}</p>
                    <p className="flex-grow mb-6 text-sm leading-relaxed text-gray-400">
                        {game.description}
                    </p>
                    {isInDevelopment && game.milestone && (
                        <p className="mb-5 text-xs font-medium text-amber-300/90">
                            {game.milestone}
                        </p>
                    )}

                    <div className="flex flex-wrap gap-2 mb-8">
                        {game.platforms.map(platform => (
                            <span key={platform} className="px-2.5 py-1 bg-white/5 border border-white/5 text-xs font-medium rounded-md text-gray-300 shadow-sm">{platform}</span>
                        ))}
                    </div>

                    <div className={`grid ${game.github ? 'grid-cols-2' : 'grid-cols-1'} gap-3 mt-auto`}>
                        <a
                            href={primaryLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-2.5 bg-white text-gray-950 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5"
                        >
                            {hasPlayableBuild ? (
                                <>
                                    <Play size={16} className="fill-current" /> Play Now
                                </>
                            ) : (
                                <>
                                    <Github size={16} /> View Project
                                </>
                            )}
                        </a>
                        {game.github && hasPlayableBuild && (
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
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-[1400px] mx-auto flex gap-10">
            {/* Sidebar Filters */}
            <aside className="sticky flex flex-col w-full max-w-xs gap-6 p-6 border bg-gray-900/80 rounded-2xl border-white/5 h-fit top-32">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-white">Filters</span>
                    <button onClick={resetFilters} className="text-sm text-blue-400 hover:underline">Reset filters</button>
                </div>
                {/* Status Filter */}
                <div>
                    <button className="flex items-center justify-between w-full py-2 font-medium text-gray-200" onClick={() => setOpen(o => ({ ...o, status: !o.status }))}>
                        Status
                        <span>{open.status ? <ChevronDown size={18} /> : <ChevronArrowRight size={18} />}</span>
                    </button>
                    <div
                        className={`transition-all duration-300 overflow-hidden ${open.status ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="flex flex-col gap-2 pl-2">
                            {statuses.map(status => (
                                <label key={status} className="flex items-center gap-2 text-gray-300 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={statusFilter.includes(status)}
                                        onChange={() => toggleFilter(statusFilter, setStatusFilter, status)}
                                        className="w-4 h-4 rounded accent-blue-500"
                                    />
                                    {status}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Platform Filter */}
                <div>
                    <button className="flex items-center justify-between w-full py-2 font-medium text-gray-200" onClick={() => setOpen(o => ({ ...o, platform: !o.platform }))}>
                        Platform
                        <span>{open.platform ? <ChevronDown size={18} /> : <ChevronArrowRight size={18} />}</span>
                    </button>
                    <div
                        className={`transition-all duration-300 overflow-hidden ${open.platform ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="flex flex-col gap-2 pl-2">
                            {platforms.map(platform => (
                                <label key={platform} className="flex items-center gap-2 text-gray-300 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={platformFilter.includes(platform)}
                                        onChange={() => toggleFilter(platformFilter, setPlatformFilter, platform)}
                                        className="w-4 h-4 rounded accent-blue-500"
                                    />
                                    {platform}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Genre Filter */}
                <div>
                    <button className="flex items-center justify-between w-full py-2 font-medium text-gray-200" onClick={() => setOpen(o => ({ ...o, genre: !o.genre }))}>
                        Genre
                        <span>{open.genre ? <ChevronDown size={18} /> : <ChevronArrowRight size={18} />}</span>
                    </button>
                    <div
                        className={`transition-all duration-300 overflow-hidden ${open.genre ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="flex flex-col gap-2 pl-2">
                            {genres.map(genre => (
                                <label key={genre} className="flex items-center gap-2 text-gray-300 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={genreFilter.includes(genre)}
                                        onChange={() => toggleFilter(genreFilter, setGenreFilter, genre)}
                                        className="w-4 h-4 rounded accent-blue-500"
                                    />
                                    {genre}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                <div className="max-w-3xl mb-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 font-serif text-5xl font-bold tracking-tight text-white md:text-7xl"
                    >
                        Our Catalog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg font-light leading-relaxed text-gray-400 md:text-xl"
                    >
                        Discover the immersive worlds we've built. Each title represents our commitment to pixel perfection, precise mechanics, and atmospheric storytelling.
                    </motion.p>
                </div>
                <div className="mb-6 text-sm font-medium text-gray-300">
                    Showing {filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'}
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredGames.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Games;
