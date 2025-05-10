
import React from "react";
import { TrendingUp, Rocket, BitcoinIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Meme Coin?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            More than just another meme coin - we're building a community-driven ecosystem with real utility and long-term growth potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-memeorange transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="bg-memeorange/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-memeorange h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Powered</h3>
              <p className="text-gray-600">
                100% community owned and driven. Our holders make the decisions on future development and partnerships.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-memepurple transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="bg-memepurple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Rocket className="text-memepurple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Deflationary Model</h3>
              <p className="text-gray-600">
                With our unique tokenomics, a percentage of every transaction is burned, reducing supply and potentially increasing value over time.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-memeblue transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="bg-memeblue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BitcoinIcon className="text-memeblue h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                Built on a proof-of-stake blockchain, our token has a minimal carbon footprint compared to older cryptocurrencies.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 md:mt-24 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                We're not just creating another meme coin, but building an entire ecosystem where fun meets functionality. Our roadmap includes NFT integrations, gaming applications, and real-world partnerships.
              </p>
              <p className="text-gray-600">
                With a dedicated team of developers and a passionate community, we're positioned to become one of the most recognized names in crypto.
              </p>
            </div>
            <div className="bg-gradient-conic from-memeorange via-memepurple to-memeblue rounded-xl p-1">
              <div className="bg-white rounded-lg p-6 h-full">
                <h4 className="font-bold text-xl mb-4">Core Principles</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-memeorange mr-2"></div>
                    <span>Community Governance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-memepurple mr-2"></div>
                    <span>Long-term Sustainability</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-memeblue mr-2"></div>
                    <span>Transparent Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-memeorange mr-2"></div>
                    <span>Real Utility & Adoption</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
