
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HowToBuySection = () => {
  return (
    <section id="howto" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How To Buy MEMECOIN</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow these simple steps to become part of our community and own your first MEMECOIN tokens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-memeorange/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-memeorange">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">Create a Wallet</h3>
              <p className="text-gray-600 text-center text-sm">
                Download and set up MetaMask or Trust Wallet on your device. These are secure wallets for managing your crypto.
              </p>
              <div className="mt-6 text-center">
                <Button variant="outline" className="text-memeorange border-memeorange hover:bg-memeorange hover:text-white">
                  Download MetaMask
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-memepurple/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-memepurple">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">Get ETH/BNB</h3>
              <p className="text-gray-600 text-center text-sm">
                Purchase Ethereum (ETH) or Binance Coin (BNB) from an exchange and send it to your wallet address.
              </p>
              <div className="mt-6 text-center">
                <Button variant="outline" className="text-memepurple border-memepurple hover:bg-memepurple hover:text-white">
                  Buy ETH/BNB
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-memeblue/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-memeblue">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">Connect to DEX</h3>
              <p className="text-gray-600 text-center text-sm">
                Visit Uniswap or PancakeSwap and connect your wallet to the decentralized exchange platform.
              </p>
              <div className="mt-6 text-center">
                <Button variant="outline" className="text-memeblue border-memeblue hover:bg-memeblue hover:text-white">
                  Launch Exchange
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-memeorange-dark/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-memeorange-dark">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">Swap for MEMECOIN</h3>
              <p className="text-gray-600 text-center text-sm">
                Enter our contract address, select the amount you want to buy, and confirm the swap to get your MEMECOIN.
              </p>
              <div className="mt-6 text-center">
                <Button className="bg-memeorange hover:bg-memeorange-dark text-white">
                  Buy MEMECOIN
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contract Address</h3>
              <p className="text-gray-600 mb-6">
                Always double check the contract address when making transactions to ensure you're buying the authentic MEMECOIN.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg break-all font-mono text-sm border border-gray-200">
                0x1234567890AbCdEf1234567890AbCdEf12345678
              </div>
              <Button variant="outline" className="mt-4 border-memepurple text-memepurple hover:bg-memepurple hover:text-white">
                Copy Address
              </Button>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold mb-4 text-xl">Important Tips:</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-memeorange mt-1 mr-2"></div>
                  <span>Set slippage tolerance to 6-7% to account for the transaction tax.</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-memepurple mt-1 mr-2"></div>
                  <span>Keep some ETH/BNB in your wallet to cover gas fees.</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-memeblue mt-1 mr-2"></div>
                  <span>Never share your wallet seed phrase with anyone.</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-memeorange-dark mt-1 mr-2"></div>
                  <span>Join our community for help if you encounter any issues.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;
