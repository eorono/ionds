
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-ion-blue text-2xl font-bold font-heading">ION DATA</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-ion-dark hover:text-ion-teal transition-colors font-medium">Home</Link>
            <Link to="#services" className="text-ion-dark hover:text-ion-teal transition-colors font-medium">Services</Link>
            <Link to="#about" className="text-ion-dark hover:text-ion-teal transition-colors font-medium">About</Link>
            <Button className="bg-ion-teal hover:bg-ion-blue text-white transition-colors">
              Schedule Consultation
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-ion-dark hover:bg-ion-light">Home</Link>
            <Link to="#services" className="block px-3 py-2 rounded-md text-base font-medium text-ion-dark hover:bg-ion-light">Services</Link>
            <Link to="#about" className="block px-3 py-2 rounded-md text-base font-medium text-ion-dark hover:bg-ion-light">About</Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-ion-teal hover:bg-ion-blue text-white transition-colors">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
