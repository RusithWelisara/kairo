import { motion } from 'framer-motion';
import { Check, Clock } from 'lucide-react';

const Roadmap = () => {
    const steps = [
        {
            quarter: "Q3 2025",
            title: "The Beginning",
            desc: "Kairo Games is formed. Prototyping Floatlands for EXE 2025.",
            status: "completed"
        },
        {
            quarter: "Q4 2025",
            title: "Floatlands Release",
            desc: "Floatlands successfully launched on multiple platforms to positive community reception.",
            status: "completed"
        },
        {
            quarter: "2026",
            title: "Expansion",
            desc: "New game concepts, expanded team, and working towards a full commercial release.",
            status: "upcoming"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-[1000px] mx-auto">
            {/* Header */}
            <div className="max-w-3xl mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight font-serif"
                >
                    Our Journey
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
                >
                    From a game jam entry to a fully-fledged studio — here's how we got here and where we're headed.
                </motion.p>
            </div>

            {/* Timeline */}
            <div className="relative ml-4 md:ml-0 space-y-8">
                {/* Vertical line */}
                <div className="absolute left-[11px] top-4 bottom-4 w-px bg-white/10" />

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                        className="relative pl-12"
                    >
                        {/* Dot */}
                        <div className={`absolute left-0 top-8 w-6 h-6 rounded-full flex items-center justify-center ${step.status === 'completed'
                                ? 'bg-white/10 border border-white/20'
                                : step.status === 'in-progress'
                                    ? 'bg-blue-500/20 border border-blue-400/40'
                                    : 'bg-gray-900 border border-white/10'
                            }`}>
                            {step.status === 'completed' ? (
                                <Check size={12} className="text-white" />
                            ) : (
                                <Clock size={10} className="text-gray-500" />
                            )}
                        </div>

                        <div className="bg-gray-900 p-8 rounded-2xl border border-white/5 hover:border-white/10 shadow-soft hover:shadow-soft-lg transition-all duration-300">
                            <span className={`text-xs font-medium uppercase tracking-wider px-2.5 py-1 rounded-md mb-4 inline-block ${step.status === 'completed'
                                    ? 'bg-white/5 text-gray-300 border border-white/10'
                                    : step.status === 'in-progress'
                                        ? 'bg-blue-500/10 text-blue-300 border border-blue-400/20'
                                        : 'bg-white/5 text-gray-500 border border-white/5'
                                }`}>
                                {step.quarter}
                            </span>
                            <h3 className="text-xl font-semibold text-white mb-2 font-serif tracking-tight">{step.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;
