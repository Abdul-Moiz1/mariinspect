"use client";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Fade } from "react-awesome-reveal";

interface CardDataType {
  heading: string;
  subheading: string;
}

const cardData: CardDataType[] = [
  {
    heading: "Comprehensive History Reports",
    subheading:
      "Get a clear view of your marine vehicle's background, including previous ownership and usage details.",
    
  },
  {
    heading: "Accident & Damage Reports",
    subheading:
      "Understand the full picture with records of past incidents, repairs, and structural integrity.",
  },
  {
    heading: "Performance Assessments",
    subheading:
      "Access advanced diagnostics to evaluate mechanical condition and reliability.",
  },
  {
    heading: "Registration and Title Verification",
    subheading:
      "Ensure your boat or marine craft is legally compliant with accurate document checks.",
  },
  {
    heading: "Fleet and Commercial Vessel Insights",
    subheading:
      "Detailed reports tailored for commercial and fleet marine vehicles.",
  },
  {
    heading: "Global Records Access",
    subheading:
      "Leverage international databases to verify marine vehicles across borders.",
  },
];

const MarineIntelligence = () => {
  return (
    <div className="py-40 px-6 max-w-7xl mx-auto" id="about-section">
      {/* Section Title */}
      <div className="text-center mb-14">
        <Fade direction="up" delay={300} triggerOnce>
          <h2 className="text-pink text-lg font-medium uppercase tracking-wide">
            Marine Intelligence You Can Trust
          </h2>
        </Fade>
        <Fade direction="up" delay={600} triggerOnce>
          {/* <p className="text-xl lg:text-2xl font-semibold text-lightgrey leading-relaxed">
            Gain valuable insights into your marine vehicle's history and performance with our expert-driven reports.
          </p> */}
        </Fade>
      </div>

      {/* Cards Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5">
        <Fade direction="up" delay={800} cascade damping={0.15} triggerOnce>
          {cardData.map((item, i) => (
            <div
              key={i}
              className="min-h-[250px] p-8 rounded-3xl shadow-lg bg-white flex flex-col justify-between transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl text-black font-semibold text-center">{item.heading}</h3>
              <p className="text-lg text-black text-opacity-70 text-center">{item.subheading}</p>
              <div className="flex justify-center mt-4">
                <Link href="/" className="flex items-center gap-1 text-lg font-medium text-pink hover:underline">
                  <ChevronRightIcon width={20} height={20} />
                </Link>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default MarineIntelligence;
