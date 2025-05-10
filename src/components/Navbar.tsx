
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="flex items-center">
              <div className="animate-spin-slow animation-delay-2000">
                <div className="h-8 w-8 rounded-full bg-meme-gradient"></div>
              </div>
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-meme-gradient">
                MEMECOIN
              </span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#about" className="text-gray-700 hover:text-memeorange px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#tokenomics" className="text-gray-700 hover:text-memeorange px-3 py-2 rounded-md text-sm font-medium">
                Tokenomics
              </a>
              <a href="#community" className="text-gray-700 hover:text-memeorange px-3 py-2 rounded-md text-sm font-medium">
                Community
              </a>
              <a href="#howto" className="text-gray-700 hover:text-memeorange px-3 py-2 rounded-md text-sm font-medium">
                How To Buy
              </a>
              <a href="#roadmap" className="text-gray-700 hover:text-memeorange px-3 py-2 rounded-md text-sm font-medium">
                Roadmap
              </a>
              <Button className="bg-memeorange hover:bg-memeorange-dark text-white">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-memeorange"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#tokenomics"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Tokenomics
            </a>
            <a
              href="#community"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <a
              href="#howto"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              How To Buy
            </a>
            <a
              href="#roadmap"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
            </a>
            <Button className="w-full mt-2 bg-memeorange hover:bg-memeorange-dark text-white">
              Buy Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
