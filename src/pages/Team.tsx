

import { motion } from 'framer-motion';

const Team = () => {
    const teamMembers = [
        {
            name: "Janindu Sri Damsara",
            role: "Founder / Sound Designer / Level Designer",
            bio: "Creating the audio landscapes that bring dreams to life.",
            avatar: "src/assests/members/Janidu Damsara.jpg"
        },
        {
            name: "Sasath Ramawikrama",
            role: "Co-Founder / Director",
            bio: "Leading the vision and coordinating our dream team.",
            avatar: "./src/assests/members/Sasath Ramawikrama.jpg"
        },
        {
            name: "Rusith Heshan Welisara",
            role: "Co-Founder / Lead Programmer",
            bio: "Crafting the core mechanics and technical excellence of our games.",
            avatar: "src/assests/members/Rusith Welisara.jpg"
        },
        {
            name: "Thenura Sathmira",
            role: "Project Manager",
            bio: "Ensuring our dream worlds are built on time and with magic.",
            avatar: "src/assests/members/Thenura Sathmira.jpg"
        },
        {
            name: "Lalindu Oshana",
            role: "Story Teller",
            bio: "Weaving the narratives that give soul to our dream realms.",
            avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
            name: "SuperBro",
            role: "Artist",
            bio: "Adding visual flair and character to our pixelated adventures.",
            avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300"
        }
    ];

    return (
        <div className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                    The Dreamers
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    The minds behind KAIRO. Students by day, game developers by night.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="w-full max-w-sm bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 hover:bg-gray-800/60 transition-all hover:scale-105 group"
                    >
                        <div className="relative w-32 h-32 mx-auto mb-6">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="relative w-full h-full rounded-full object-cover border-2 border-gray-600 group-hover:border-cyan-400 transition-colors"
                            />
                        </div>

                        <h3 className="text-xl font-bold text-center text-white mb-1 group-hover:text-cyan-400 transition-colors">{member.name}</h3>
                        <p className="text-purple-400 text-sm text-center font-medium mb-4">{member.role}</p>
                        <p className="text-gray-400 text-center text-sm leading-relaxed">{member.bio}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Team;
