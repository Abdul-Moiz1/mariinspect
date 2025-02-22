"use client";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Fade } from "react-awesome-reveal";

interface CardDataType {
  heading: string;
  subheading: string;
  link: string;
}

const cardData: CardDataType[] = [
  {
    heading: "Boat History Report",
    subheading:
      "Dive into detailed reports covering ownership history, accident records, and performance assessments for a wide range of boats.",
    link: "GET REPORT",
  },
  {
    heading: "Jet Ski History Report",
    subheading:
      "Ensure safe and informed purchases with precise information about prior usage, maintenance, and any reported damages.",
    link: "GET REPORT",
  },
  {
    heading: "Ski-Doo History Report",
    subheading:
      "Access thorough records on maintenance history, past accidents, maintenance, and ownership details for your Ski-Doo.",
    link: "GET REPORT",
  },
  {
    heading: "Yacht History Report",
    subheading:
      "Verify the integrity and history of your luxury vessel with comprehensive insights into previous ownership and condition.",
    link: "GET REPORT",
  },
];

const Work = () => {
  return (
    <div className="py-40 px-6 max-w-7xl mx-auto" id="about-section">
      {/* Section Title */}
      <div className="text-center mb-14">
        <Fade direction="up" delay={300} triggerOnce>
          <h2 className="text-pink text-lg font-medium uppercase tracking-wide">
            Our Marine History Reports
          </h2>
        </Fade>
        <Fade direction="up" delay={600} triggerOnce>
          <p className="text-xl lg:text-2xl font-semibold text-lightgrey leading-relaxed">
            Explore in-depth details for every kind of marine vehicle with our cutting-edge <br /> reporting platform, designed to provide clarity and confidence.
          </p>
        </Fade>
      </div>

      {/* Cards Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5">
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
                  {item.link} <ChevronRightIcon width={20} height={20} />
                </Link>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Work;
