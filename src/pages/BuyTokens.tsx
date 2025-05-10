
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BuyTokens = () => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  
  const tokenPackages = [
    { amount: 1000, price: 100, popular: false },
    { amount: 5000, price: 450, popular: true },
    { amount: 10000, price: 850, popular: false },
  ];

  const handlePurchase = () => {
    if (!selectedAmount) return;
    
    // In a real application, this would connect to a payment gateway
    alert(`Thank you for purchasing ${selectedAmount} MEMECOIN tokens!`);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Buy MEMECOIN Tokens</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select a package below to purchase MEMECOIN tokens. Join our community and be part of the meme revolution!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tokenPackages.map((pkg) => (
            <div
              key={pkg.amount}
              className={`border rounded-xl p-6 text-center cursor-pointer transition-all ${
                selectedAmount === pkg.amount
                  ? "border-memeorange shadow-lg scale-105"
                  : "border-gray-200 hover:border-memeorange"
              } ${pkg.popular ? "relative" : ""}`}
              onClick={() => setSelectedAmount(pkg.amount)}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-24 bg-memepurple text-white py-1 px-2 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{pkg.amount.toLocaleString()} Tokens</h3>
              <div className="text-3xl font-bold text-memeorange mb-4">${pkg.price}</div>
              <div className="mb-6 text-gray-600">
                <p>{(pkg.price / pkg.amount * 1000).toFixed(2)} USD per 1000 tokens</p>
              </div>
              <Button
                className={`w-full ${selectedAmount === pkg.amount ? "bg-memeorange" : "bg-gray-200 text-gray-800"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedAmount(pkg.amount);
                }}
              >
                Select Package
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button
            onClick={handlePurchase}
            disabled={!selectedAmount}
            className="bg-memeorange hover:bg-memeorange-dark text-white text-lg px-8 py-6 disabled:opacity-50"
          >
            Complete Purchase <ArrowRight className="ml-2" />
          </Button>
          
          <p className="mt-4 text-sm text-gray-500">
            By purchasing tokens, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BuyTokens;
