

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="py-20 px-6 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
                >
                    Get In Touch
                </motion.h1>
                <p className="text-xl text-gray-400">
                    Have a question, feedback, or just want to say hi? We'd love to hear from you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gray-800 rounded-lg text-cyan-400">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Email Us</h3>
                            <p className="text-gray-400 mb-1">For general inquiries and support</p>
                            <a href="mailto:hello@kairogames.com" className="text-cyan-400 hover:text-cyan-300">hello@kairogames.com</a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gray-800 rounded-lg text-purple-400">
                            <MessageSquare size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Community</h3>
                            <p className="text-gray-400 mb-1">Join the conversation on Discord</p>
                            <a href="#" className="text-purple-400 hover:text-purple-300">Join Server</a>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4 bg-gray-800/30 p-6 rounded-xl border border-gray-700"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                        <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input type="email" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                        <textarea rows={4} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="What's on your mind?"></textarea>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                        <Send size={18} /> Send Message
                    </button>
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;
