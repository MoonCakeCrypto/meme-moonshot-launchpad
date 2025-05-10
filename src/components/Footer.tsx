
import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-meme-gradient mr-3"></div>
              <span className="text-2xl font-bold">MEMECOIN</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A community-driven meme cryptocurrency with real utility and long-term growth potential. Join us on the journey to the moon!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-memeorange transition-colors">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.542 7.197 4 11-1.766 1.135-3.541 1.504-5 1.5 8.368 4.367 18.882 1.09 17.996-8.756.001-.191.002-.382.004-.574a4.79 4.79 0 0 0 1-1.751"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-memeorange transition-colors">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.2 7.3c.2 1.2.3 2.4.3 3.7 0 8.4-4.9 14.5-13.5 14.5S1 19.4 1 11 5.9 1 14.5 1c1.3 0 2.5.1 3.7.3"></path>
                  <path d="M9 11.5h6"></path>
                  <path d="M9 15.5h6"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-memeorange transition-colors">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.3 6.1L9 13l-6.7 7h13.4L22 13l-6.7-6.9H2.3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-memeorange transition-colors">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#tokenomics" className="text-gray-400 hover:text-white transition-colors">Tokenomics</a></li>
              <li><a href="#howto" className="text-gray-400 hover:text-white transition-colors">How to Buy</a></li>
              <li><a href="#community" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Audit Report</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Token Contract</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Media Kit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MEMECOIN. All rights reserved.
            </div>
            <div className="md:text-right text-gray-400 text-sm">
              <span className="block md:inline">Not financial advice. </span>
              <span>DYOR - Do your own research.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
