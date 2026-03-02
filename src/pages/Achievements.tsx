import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';

const Achievements = () => {
    const awards = [
        {
            id: 1,
            title: "EXE 2025 — Entry",
            description: "Successfully submitted Floatlands to the EXE 2025 Game Jam and got awarded for 'Best Audio & Visuals' and received 'Overall 2nd Place'.",
            icon: <Trophy className="w-5 h-5 text-gray-300" />,
            date: "2025"
        },
        {
            id: 2,
            title: "Top 10 Indie Newcomers",
            description: "Recognized as one of the top up-and-coming student indie teams in Sri Lanka.",
            icon: <Star className="w-5 h-5 text-gray-300" />,
            date: "2025"
        },
        {
            id: 3,
            title: "First Meetup — Concluded",
            description: "Successfully concluded our first team meetup, strengthening collaboration and team spirit.",
            icon: <Trophy className="w-5 h-5 text-gray-300" />,
            date: "2026"
        },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="max-w-3xl mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight font-serif"
                >
                    Achievements
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
                >
                    Milestones and recognitions along our journey.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                    <motion.div
                        key={award.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                        whileHover={{ y: -6 }}
                        className="bg-gray-900 p-8 rounded-2xl border border-white/5 hover:border-white/10 shadow-soft hover:shadow-soft-xl transition-all duration-300 group"
                    >
                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-white/20 transition-colors">
                                {award.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1.5 font-serif tracking-tight">{award.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-3">{award.description}</p>
                                <span className="text-xs font-medium text-gray-500 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md inline-block">
                                    {award.date}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
