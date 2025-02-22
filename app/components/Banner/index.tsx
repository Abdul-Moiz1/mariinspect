"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  const [email, setEmail] = useState("");
  const [hin, setHin] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, hin }),
      });

      if (response.ok) {
        router.push("/#pricing");
      } else {
        alert("Error sending email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="home-section" className="bg-lightpink py-20">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* TEXT & FORM SECTION */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
            <h1 className="text-4xl lg:text-5xl font-semibold mb-5 text-lightgrey">
              Reliable Marine Insights
            </h1>
          </Fade>
          <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce>
            <p className="text-grey lg:text-lg font-normal mb-10">
              Get a comprehensive HIN check and detailed boat history report instantly! Our accurate and up-to-date database covers boats, Jet Skis, Ski-Doos, Yachts, and more. Ensure a secure purchase with our reliable vessel history reports—trusted by buyers and sellers alike.
            </p>
          </Fade>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="hin"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter HIN"
              required
              value={hin}
              onChange={(e) => setHin(e.target.value)}
            />
            <button
              type="submit"
              className="w-full rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
              disabled={loading}
            >
              {loading ? "Sending..." : "Get Report"}
            </button>
          </form>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex justify-center lg:justify-end relative">
          <Image
            src="/images/Banner/banner-image.png"
            alt="Banner Image"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
