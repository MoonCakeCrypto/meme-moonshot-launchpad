
import React from "react";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section id="community" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Become part of a global movement of crypto enthusiasts, traders, and meme lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-all text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-memeorange/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-memeorange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.542 7.197 4 11-1.766 1.135-3.541 1.504-5 1.5 8.368 4.367 18.882 1.09 17.996-8.756.001-.191.002-.382.004-.574a4.79 4.79 0 0 0 1-1.751">
                </path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Twitter</h3>
            <p className="text-gray-600 mb-6">
              Follow us for the latest news, updates, and memes. Join over 150k followers!
            </p>
            <Button className="w-full bg-memeorange hover:bg-memeorange-dark text-white">
              Follow on Twitter
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-all text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-memepurple/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-memepurple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.2 7.3c.2 1.2.3 2.4.3 3.7 0 8.4-4.9 14.5-13.5 14.5S1 19.4 1 11 5.9 1 14.5 1c1.3 0 2.5.1 3.7.3"></path>
                <path d="M9 11.5h6"></path>
                <path d="M9 15.5h6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Telegram</h3>
            <p className="text-gray-600 mb-6">
              Chat directly with the community and team. Get instant updates and support.
            </p>
            <Button className="w-full bg-memepurple hover:bg-memepurple-dark text-white">
              Join Telegram
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-all text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-memeblue/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-memeblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 9.6v4.8a.6.6 0 0 0 .6.6h4.8a.6.6 0 0 0 .6-.6V9.6a.6.6 0 0 0-.6-.6H9.6a.6.6 0 0 0-.6.6Z"></path>
                <path d="m21 15-5-1-2 5.1L7 22l9-9"></path>
                <path d="M7 17.2a2.2 2.2 0 0 1 0-4.4"></path>
                <path d="M11.9 7H15V4h3v3h-3v3.1"></path>
                <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Discord</h3>
            <p className="text-gray-600 mb-6">
              Join our growing Discord for deeper discussions, events, and community initiatives.
            </p>
            <Button className="w-full bg-memeblue hover:bg-memeblue-dark text-white">
              Join Discord
            </Button>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-memeorange/10 via-memepurple/10 to-memeblue/10 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Community Rewards</h3>
              <p className="text-gray-600 mb-4">
                We love our community! Participate in our regular giveaways, meme contests, and contribution rewards.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-memeorange mr-2"></div>
                  <span>Weekly meme competitions with token prizes</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-memepurple mr-2"></div>
                  <span>Community treasury for holder-voted initiatives</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-memeblue mr-2"></div>
                  <span>Exclusive NFT drops for active members</span>
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-memeorange to-memepurple text-white hover:opacity-90">
                Learn About Rewards
              </Button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-bold mb-4">Community Achievements</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-memeorange/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-memeorange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2l3 6.3 7 1-5 4.8 1.2 6.9-6.2-3.2Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium">250K+ Community Members</h5>
                    <p className="text-sm text-gray-500">Across all platforms</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-memepurple/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-memepurple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium">50+ Community Projects</h5>
                    <p className="text-sm text-gray-500">Created by our amazing members</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-memeblue/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-memeblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8.7 3A14 14 0 0 0 6 14.5c0 3.6 2.2 6.5 5 6.5s5-2.9 5-6.5c0-1.8-.4-3.6-.9-5.1"></path>
                      <path d="M14.8 7a2.5 2.5 0 0 0-4.5-2 2.5 2.5 0 0 0-1.4 2.9"></path>
                      <path d="m3.2 14.3 1.7-1.2a1 1 0 0 0 .2-1.4 1 1 0 0 0-1.4-.1l-1.8 1.2a1 1 0 0 0-.1 1.4 1 1 0 0 0 1.4.1Z"></path>
                      <path d="M9 20.2a1 1 0 0 0 0 1.6 1 1 0 0 0 1.5-.1l1.3-1.7a1 1 0 0 0-.2-1.4 1 1 0 0 0-1.4.2l-1.2 1.4Z"></path>
                      <path d="m19.1 17.2 1.7-1.2a1 1 0 0 0 .2-1.4 1 1 0 0 0-1.4-.1l-1.8 1.2a1 1 0 0 0-.1 1.4 1 1 0 0 0 1.4.1Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium">1M+ Memes Created</h5>
                    <p className="text-sm text-gray-500">Our community is creative!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
