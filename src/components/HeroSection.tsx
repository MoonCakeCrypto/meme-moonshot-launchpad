
import React from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative pt-16 overflow-hidden">
      {/* Background with animated dots */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-center md:text-left">
              <span className="bg-clip-text text-transparent bg-meme-gradient">
                The Next Big
              </span>
              <br />
              <span>Meme Revolution</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 text-center md:text-left">
              Join the community-driven phenomenon that's taking the crypto world by storm. Not just a meme, but a movement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/buy">
                <Button className="bg-memeorange hover:bg-memeorange-dark text-white flex items-center gap-2 text-lg py-6">
                  <Rocket size={20} /> Buy Tokens
                </Button>
              </Link>
              <Button variant="outline" className="border-memepurple text-memepurple hover:bg-memepurple hover:text-white text-lg py-6">
                Join Community
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12 text-center">
              <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm border border-gray-100">
                <p className="text-2xl md:text-3xl font-bold text-memeorange">120K+</p>
                <p className="text-gray-500">Holders</p>
              </div>
              <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm border border-gray-100">
                <p className="text-2xl md:text-3xl font-bold text-memepurple">$15M</p>
                <p className="text-gray-500">Market Cap</p>
              </div>
              <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm border border-gray-100">
                <p className="text-2xl md:text-3xl font-bold text-memeblue">250K+</p>
                <p className="text-gray-500">Community</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-memeorange/20 rounded-full absolute -top-4 -left-4 animate-pulse"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-memepurple/20 rounded-full absolute -bottom-4 -right-4 animate-pulse"></div>
              <div className="relative z-10 animate-float">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-memeorange via-memepurple to-memeblue p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-memeorange to-memepurple animate-spin" style={{ animationDuration: '10s' }}>
                      <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center text-6xl font-bold">
                        M
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
