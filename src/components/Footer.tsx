

import { Gamepad2, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <Gamepad2 className="w-6 h-6 text-cyan-400" />
                            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                KAIRO
                            </span>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Crafting dreamlike pixel worlds and immersive gaming experiences.
                            We are a team of passionate developers pushing the boundaries of indie games.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/games" className="hover:text-cyan-400 transition-colors">Our Games</a></li>
                            <li><a href="/team" className="hover:text-cyan-400 transition-colors">The Team</a></li>
                            <li><a href="/roadmap" className="hover:text-cyan-400 transition-colors">Roadmap</a></li>
                            <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
                            <a href="mailto:hello@kairogames.com" className="text-gray-400 hover:text-red-400 transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} KAIRO Game Development Studio. All rights reserved.</p>
                    <p className="mt-2 text-gray-600">Built with love, pixels, and chaos ☁️</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
