import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="max-w-3xl mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight font-serif"
                >
                    Get in Touch
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
                >
                    Have a question, feedback, or just want to say hi? We'd love to hear from you.
                </motion.p>
            </div>

            <div className="grid lg:grid-cols-5 gap-16">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-2 space-y-6"
                >
                    <div className="bg-gray-900 rounded-2xl p-6 border border-white/5 hover:border-white/10 shadow-soft transition-all duration-300 group">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                                <Mail size={18} className="text-gray-300" />
                            </div>
                            <h3 className="text-base font-semibold text-white font-serif">Email Us</h3>
                        </div>
                        <p className="text-gray-500 text-sm mb-3">For general inquiries and support</p>
                        <a href="mailto:developers.kairo@gmail.com" className="inline-flex items-center gap-1 text-sm text-white hover:text-gray-300 transition-colors font-medium group/link">
                            developers.kairo@gmail.com
                            <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                    </div>

                    <div className="bg-gray-900 rounded-2xl p-6 border border-white/5 hover:border-white/10 shadow-soft transition-all duration-300 group">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                                <MessageSquare size={18} className="text-gray-300" />
                            </div>
                            <h3 className="text-base font-semibold text-white font-serif">Community</h3>
                        </div>
                        <p className="text-gray-500 text-sm mb-3">Join the conversation on Discord</p>
                        <a href="#" className="inline-flex items-center gap-1 text-sm text-white hover:text-gray-300 transition-colors font-medium group/link">
                            Join Server
                            <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="lg:col-span-3 bg-gray-900 rounded-2xl p-8 border border-white/5 shadow-soft space-y-5"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">Name</label>
                        <input
                            type="text"
                            className="w-full bg-gray-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-gray-900 transition-all duration-300"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">Email</label>
                        <input
                            type="email"
                            className="w-full bg-gray-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-gray-900 transition-all duration-300"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                        <textarea
                            rows={5}
                            className="w-full bg-gray-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-gray-900 transition-all duration-300 resize-none"
                            placeholder="What's on your mind?"
                        ></textarea>
                    </div>
                    <button className="w-full bg-white text-gray-950 font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5 hover:bg-gray-100">
                        <Send size={16} /> Send Message
                    </button>
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;
