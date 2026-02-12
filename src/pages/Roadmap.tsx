

import { motion } from 'framer-motion';

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
        <div className="min-h-screen py-20 px-6 max-w-4xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-6xl font-bold mb-16 text-center text-white"
            >
                Our Journey
            </motion.h1>

            <div className="relative border-l-2 border-gray-700 ml-4 md:ml-0 space-y-12">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="md:pl-12 relative"
                    >
                        {/* Dot */}
                        <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 
              ${step.status === 'completed' ? 'bg-cyan-400 border-cyan-400' :
                                step.status === 'in-progress' ? 'bg-purple-500 border-purple-500 animate-pulse' :
                                    'bg-gray-900 border-gray-500'}`}
                        ></div>

                        <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-colors ml-6 md:ml-0">
                            <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded mb-2 inline-block
                ${step.status === 'completed' ? 'bg-cyan-900/50 text-cyan-300' :
                                    step.status === 'in-progress' ? 'bg-purple-900/50 text-purple-300' :
                                        'bg-gray-700 text-gray-400'}`}>
                                {step.quarter}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-gray-400">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;
