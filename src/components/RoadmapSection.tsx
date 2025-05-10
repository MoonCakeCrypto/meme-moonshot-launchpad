
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const RoadmapSection = () => {
  const roadmapPhases = [
    {
      title: "Phase 1: Launch",
      complete: true,
      items: [
        "Website launch",
        "Smart contract deployment",
        "Community building",
        "Initial marketing push",
        "Token presale event"
      ]
    },
    {
      title: "Phase 2: Growth",
      complete: false,
      items: [
        "Major exchange listings",
        "Strategic partnerships",
        "Enhanced marketing campaigns",
        "Community expansion initiatives",
        "Development of community governance tools"
      ]
    },
    {
      title: "Phase 3: Utility",
      complete: false,
      items: [
        "Launch of staking platform",
        "NFT marketplace integration",
        "Mobile wallet release",
        "Ecosystem expansion",
        "Cross-chain compatibility"
      ]
    },
    {
      title: "Phase 4: Expansion",
      complete: false,
      items: [
        "Metaverse integration",
        "Launch of MEMECOIN-powered dApps",
        "Global marketing campaigns",
        "Enterprise partnerships",
        "Community-led development initiatives"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Roadmap</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We have a clear vision for the future of MEMECOIN. Here's our strategic roadmap for growth and development.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-memeorange via-memepurple to-memeblue"></div>

          <div className="space-y-8">
            {roadmapPhases.map((phase, index) => (
              <div key={phase.title} className="relative">
                <div className={`md:grid md:grid-cols-2 md:gap-8 items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  {/* Phase marker */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white shadow-lg z-10" 
                    style={{ 
                      background: `linear-gradient(135deg, ${index === 0 ? "#F97316" : index === 1 ? "#8B5CF6" : index === 2 ? "#0EA5E9" : "#10B981"} 0%, ${index === 0 ? "#FB923C" : index === 1 ? "#A78BFA" : index === 2 ? "#38BDF8" : "#34D399"} 100%)`,
                      top: "50%" 
                    }}>
                    {phase.complete && (
                      <svg className="absolute inset-0 m-auto h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`md:col-span-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                    <Collapsible className="border rounded-lg overflow-hidden shadow-sm">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-gray-50">
                        <span className="font-medium">View Details</span>
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="px-4 pb-4 pt-1 bg-gray-50">
                          <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                            {phase.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className={`inline-block h-5 w-5 rounded-full ${phase.complete ? "bg-green-500" : "bg-gray-300"} mt-0.5 flex-shrink-0 ${index % 2 === 0 ? "md:order-last md:ml-2" : "md:mr-2"}`}></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:col-span-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
