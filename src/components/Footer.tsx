import { Gamepad2, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-white/5 py-16 px-6 bg-gray-950">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                <Gamepad2 className="w-4 h-4 text-gray-300" />
                            </div>
                            <span className="text-base font-bold text-white font-serif tracking-tight">
                                KAIRO
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                            Crafting atmospheric pixel worlds and immersive gaming experiences.
                            A team of passionate developers pushing the boundaries of indie games.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">Navigate</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><a href="/games" className="text-gray-500 hover:text-white transition-colors duration-300">Games</a></li>
                            <li><a href="/team" className="text-gray-500 hover:text-white transition-colors duration-300">Team</a></li>
                            <li><a href="/roadmap" className="text-gray-500 hover:text-white transition-colors duration-300">Roadmap</a></li>
                            <li><a href="/contact" className="text-gray-500 hover:text-white transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">Connect</h4>
                        <div className="flex space-x-3">
                            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"><Github size={16} /></a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"><Twitter size={16} /></a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"><Linkedin size={16} /></a>
                            <a href="mailto:developers.kairo@gmail.com" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"><Mail size={16} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-xs">© {new Date().getFullYear()} KAIRO Game Development Studio. All rights reserved.</p>
                    <p className="text-gray-700 text-xs">Built with pixels and precision.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
