import { FaGithub, FaTwitter, FaLinkedin, FaRocket } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 mt-20 pt-16 pb-8 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
            <FaRocket className="text-orange-500" />
            <span className="text-brand-gradient">Dev Stack</span>
          </div>
          <p className="text-gray-400 max-w-sm">
            Empowering developers to choose, design, and manage their perfect development stack efficiently.
          </p>
          <div className="flex gap-4 text-gray-300 text-lg pt-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaGithub /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaLinkedin /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2.5">
            <li><a href="#technologies" className="hover:text-white transition">Technologies</a></li>
            <li><a href="#home" className="hover:text-white transition">Stack Builder</a></li>
            <li><a href="#about" className="hover:text-white transition">Integrations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2.5">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-white transition">Careers</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2.5">
            <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-white transition">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#terms" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
};