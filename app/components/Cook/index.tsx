"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { Check } from "lucide-react";


const Cook = () => {
  return (
    <div className="relative" id="cook-section">
      <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">
        {/* Background Image */}
        <div className="absolute right-0 bottom-[-18%] hidden lg:block">
          <Image
            src={"/images/Cook/burger.png"}
            alt="burger-image"
            width={463}
            height={622}
          />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          {/* Left Column - Image */}
          <div className="col-span-6 flex justify-start">
            <Image
              src="/images/Cook/engineer.jpg"
              alt="nothing"
              width={536}
              height={808}
            />
          </div>

          {/* Right Column - Content */}
          <div className="col-span-6 flex flex-col justify-center">
            {/* Who We Are */}
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="text-pink text-lg font-normal mb-3 ls-51 uppercase text-start">
                Who we are
              </h2>
            </Fade>

            {/* Main Heading */}
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start">
                Quick and Precise Boat History Reports.
              </h3>
            </Fade>

            {/* Description */}
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-2">
                After extensive research, we’ve concluded that utilizing trusted
                databases, including industry-leading sources, is the most
                effective way to provide comprehensive insights into pre-owned
                marine vehicles.
              </p>
            </Fade>

            {/* Icon Box Section */}
            <Fade
              direction={"up"}
              delay={1200}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="custom-icon-box">
                {/* Jet Ski History Report */}
                <div className="custom-icon-box-item">
                  <span className="custom-icon">
                  <Check className="w-6 h-6 text-green-500" />
                  </span>
                  <span className="custom-icon-box-title">
                    Jet Ski History Report
                  </span>
                </div>

                {/* Ski-Doo History Report */}
                <div className="custom-icon-box-item">
                  <span className="custom-icon">
                  <Check className="w-6 h-6 text-green-500" />
                  </span>
                  <span className="custom-icon-box-title">
                    Ski-Doo History Report
                  </span>
                </div>

                {/* Yacht History Report */}
                <div className="custom-icon-box-item">
                  <span className="custom-icon">
                  <Check className="w-6 h-6 text-green-500" />
                  </span>
                  <span className="custom-icon-box-title">
                    Yacht History Report
                  </span>
                </div>

                {/* Boat History Report */}
                <div className="custom-icon-box-item">
                  <span className="custom-icon">
                  <Check className="w-6 h-6 text-green-500" />
                  </span>
                  <span className="custom-icon-box-title">
                    Boat History Report
                  </span>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cook;