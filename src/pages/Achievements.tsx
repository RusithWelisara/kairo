

import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';

const Achievements = () => {
    const awards = [
        {
            id: 1,
            title: "EXE 2025 - Entry",
            description: "Successfully submitted Floatlands to the EXE 2025 Game Jam.",
            icon: <Trophy className="w-12 h-12 text-yellow-400" />,
            date: "2025"
        },
        {
            id: 2,
            title: "Top 10 Indie Newcomers",
            description: "Recognized as one of the top up-and-coming student indie teams in Sri Lanka.",
            icon: <Star className="w-12 h-12 text-purple-400" />,
            date: "2025"
        },
        // Add more achievements here as they come
    ];

    return (
        <div className="py-20 px-6 max-w-5xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            >
                Hall of Fame
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-8">
                {awards.map((award, index) => (
                    <motion.div
                        key={award.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700 flex items-start gap-6 hover:bg-gray-800/60 transition-colors"
                    >
                        <div className="p-4 bg-gray-900 rounded-full shadow-lg border border-gray-700/50">
                            {award.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{award.title}</h3>
                            <p className="text-gray-400 mb-2">{award.description}</p>
                            <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded inline-block">
                                {award.date}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
