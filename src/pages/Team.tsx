import { motion } from 'framer-motion';

// Import team member photos
import janinduPhoto from '../assests/members/Janidu Damsara.jpg';
import sasathPhoto from '../assests/members/Sasath Ramawikrama.jpg';
import rusithPhoto from '../assests/members/Rusith Welisara.jpg';
import thenuraPhoto from '../assests/members/Thenura Sathmira.jpg';
import superbroPhoto from '../assests/members/SuperBro.jpg';
import lalinduPhoto from '../assests/members/Lalindu Oshana.png';

const Team = () => {
    const teamMembers = [
        {
            name: "Janindu Sri Damsara",
            role: "Founder / Sound Designer / Level Designer",
            bio: "Creating the audio landscapes that bring dreams to life.",
            avatar: janinduPhoto
        },
        {
            name: "Sasath Ramawikrama",
            role: "Co-Founder / Director",
            bio: "Leading the vision and coordinating our dream team.",
            avatar: sasathPhoto
        },
        {
            name: "Rusith Heshan Welisara",
            role: "Co-Founder / Lead Programmer",
            bio: "Crafting the core mechanics and technical excellence of our games.",
            avatar: rusithPhoto
        },
        {
            name: "Thenura Sathmira",
            role: "Project Manager",
            bio: "Ensuring our dream worlds are built on time and with magic.",
            avatar: thenuraPhoto
        },
        {
            name: "Lalindu Oshana",
            role: "Story Teller",
            bio: "Weaving the narratives that give soul to our dream realms.",
            avatar: lalinduPhoto
        },
        {
            name: "SuperBroooo",
            role: "Artist",
            bio: "Adding visual flair and character to our pixelated font.",
            avatar: superbroPhoto
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-[1400px] mx-auto">
            {/* Header */}
            <div className="mb-20 max-w-3xl">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 font-serif text-5xl font-bold tracking-tight text-white md:text-7xl"
                >
                    The Team
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg font-light leading-relaxed text-gray-400 md:text-xl"
                >
                    The minds behind KAIRO. Students by day, game developers by night — united by a shared passion for crafting immersive worlds.
                </motion.p>
            </div>

            {/* Team Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        whileHover={{ y: -6 }}
                        className="p-8 bg-gray-900 rounded-2xl border transition-all duration-300 border-white/5 hover:border-white/10 shadow-soft hover:shadow-soft-xl group"
                    >
                        <div className="flex gap-5 items-start mb-5">
                            <div className="relative flex-shrink-0 w-16 h-16">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="object-cover w-full h-full rounded-xl border transition-colors border-white/10 group-hover:border-white/20"
                                />
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-lg font-semibold text-white mb-0.5 tracking-tight font-serif">{member.name}</h3>
                                <p className="text-sm font-medium text-gray-400">{member.role}</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-500">{member.bio}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Team;

