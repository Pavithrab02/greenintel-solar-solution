import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/about#team" }
    ],
    services: [
      { name: "Consultancy", path: "/services#consultancy" },
      { name: "Sustainability", path: "/services#sustainability" },
      { name: "Installation", path: "/services#installation" },
      { name: "AI Solutions", path: "/services#ai-solutions" }
    ],
    resources: [
      { name: "Blog", path: "/blog" },
      { name: "FAQs", path: "/faq" }
    ]
  };

  return (
    <footer className="bg-greenintel-dark text-white">
      <div className="container-custom py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Logo and Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo in the Footer */}
              <img
                src="resources\greenintel.png"  // Ensure this path points to the transparent PNG logo
                alt="GreenIntel Logo"
                className="logo max-h-16 w-auto" // Logo styling
              />
              <span className="font-display font-bold text-lg text-white"></span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering a clean & intelligent renewable future through AI-powered solar solutions and sustainability consulting.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-greenintel-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-greenintel-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white hover:text-greenintel-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-greenintel-accent transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-greenintel-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-greenintel-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-greenintel-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {currentYear} GreenIntel Energy Solutions. All rights reserved.</p>
          <div className="mt-3 md:mt-0 flex space-x-4">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
