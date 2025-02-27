const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold">KunStore</h2>
            <p className="mt-2 text-gray-400">Your one-stop shop for quality products.</p>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold text-gray-200 border-b border-gray-700 pb-2">Solutions</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gray-300">E-commerce</a></li>
              <li><a href="#" className="hover:text-gray-300">Retail</a></li>
              <li><a href="#" className="hover:text-gray-300">Wholesale</a></li>
            </ul>
          </div>
          
          {/* Documentation */}
          <div>
            <h3 className="text-lg font-bold text-gray-200 border-b border-gray-700 pb-2">Documentation</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gray-300">API Docs</a></li>
              <li><a href="#" className="hover:text-gray-300">User Guides</a></li>
              <li><a href="#" className="hover:text-gray-300">Support</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-gray-200 border-b border-gray-700 pb-2">Legal</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-300">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} KunStore. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  