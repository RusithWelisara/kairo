import { motion } from 'framer-motion';

// Import team member photos
import janinduPhoto from '../assests/members/Janidu Damsara.jpg';
import sasathPhoto from '../assests/members/Sasath Ramawikrama.jpg';
import rusithPhoto from '../assests/members/Rusith Welisara.jpg';
import thenuraPhoto from '../assests/members/Thenura Sathmira.jpg';
import superbroPhoto from '../assests/members/SuperBro.jpg';

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
            avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
            name: "SuperBroooo",
            role: "Artist",
            bio: "Adding visual flair and character to our pixelated adventures.",
            avatar: superbroPhoto
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-[1400px] mx-auto">
            {/* Header */}
            <div className="max-w-3xl mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight font-serif"
                >
                    The Team
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
                >
                    The minds behind KAIRO. Students by day, game developers by night — united by a shared passion for crafting immersive worlds.
                </motion.p>
            </div>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        whileHover={{ y: -6 }}
                        className="bg-gray-900 rounded-2xl p-8 border border-white/5 hover:border-white/10 shadow-soft hover:shadow-soft-xl transition-all duration-300 group"
                    >
                        <div className="flex items-start gap-5 mb-5">
                            <div className="relative w-16 h-16 flex-shrink-0">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-full h-full rounded-xl object-cover border border-white/10 group-hover:border-white/20 transition-colors"
                                />
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-lg font-semibold text-white mb-0.5 tracking-tight font-serif">{member.name}</h3>
                                <p className="text-gray-400 text-sm font-medium">{member.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Team;

