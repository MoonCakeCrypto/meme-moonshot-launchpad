
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Coins } from "lucide-react";

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tokenomics</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our innovative tokenomics model is designed to reward holders and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-md bg-gradient-to-br from-memeorange/5 to-memepurple/5">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-memeorange/10 rounded-full p-3">
                  <Coins className="h-8 w-8 text-memeorange" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-6">Token Distribution</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">Public Sale</span>
                    <span className="font-medium text-memeorange">40%</span>
                  </div>
                  <Progress value={40} className="h-2 bg-gray-200" indicatorClassName="bg-memeorange" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">Liquidity Pool</span>
                    <span className="font-medium text-memepurple">25%</span>
                  </div>
                  <Progress value={25} className="h-2 bg-gray-200" indicatorClassName="bg-memepurple" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">Team & Development</span>
                    <span className="font-medium text-memeblue">15%</span>
                  </div>
                  <Progress value={15} className="h-2 bg-gray-200" indicatorClassName="bg-memeblue" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">Marketing</span>
                    <span className="font-medium text-memeorange-dark">10%</span>
                  </div>
                  <Progress value={10} className="h-2 bg-gray-200" indicatorClassName="bg-memeorange-dark" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">Partnerships & Ecosystem</span>
                    <span className="font-medium text-memepurple-dark">10%</span>
                  </div>
                  <Progress value={10} className="h-2 bg-gray-200" indicatorClassName="bg-memepurple-dark" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-gradient-to-br from-memepurple/5 to-memeblue/5">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-6">Token Details</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Token Name</span>
                  <span className="font-medium">MEMECOIN</span>
                </div>
                
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Token Symbol</span>
                  <span className="font-medium">MEME</span>
                </div>
                
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Total Supply</span>
                  <span className="font-medium">1,000,000,000</span>
                </div>
                
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Blockchain</span>
                  <span className="font-medium">Ethereum</span>
                </div>
                
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Token Type</span>
                  <span className="font-medium">ERC-20</span>
                </div>
                
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Initial Market Cap</span>
                  <span className="font-medium">$1.2M</span>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 rounded-lg p-4 border border-gray-100">
                <h4 className="font-medium mb-2">Transaction Tax</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Every transaction incurs a 5% tax distributed as follows:
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>2% Redistribution to holders</span>
                  <span className="text-memeorange">2%</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
                  <span>2% Added to liquidity</span>
                  <span className="text-memepurple">2%</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
                  <span>1% Burn</span>
                  <span className="text-memeblue">1%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 md:p-10 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Why Our Tokenomics Stand Out</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2 text-memeorange">Built-in Scarcity</h4>
              <p className="text-gray-600 text-sm">
                The automatic burn mechanism gradually reduces the total supply, making each token potentially more valuable over time.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2 text-memepurple">Holder Rewards</h4>
              <p className="text-gray-600 text-sm">
                Simply by holding MEME tokens, you earn a share of every transaction, increasing your holdings without doing anything.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2 text-memeblue">Auto-Liquidity</h4>
              <p className="text-gray-600 text-sm">
                A portion of all trades is automatically added to the liquidity pool, creating a steadily rising price floor and stability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
