"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

const StatsSection = () => {
    return (
        <div id="stats-section" className='bg-lightblue py-20'>
            <div className="mx-auto max-w-7xl px-6">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {/* Left Section - Text Content */}
                    <div className='col-span-1 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h2 className="text-4xl lg:text-5xl font-semibold mb-5 text-darkblue text-center lg:text-left">
                                Trusted by Marine Enthusiasts <span className="text-pink">Worldwide</span>
                            </h2>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-grey lg:text-lg font-normal mb-10 text-center lg:text-left'>
                                Join thousands of satisfied customers who rely on Certified Marine Check for accurate and detailed reports on their boats, Jet Skis, Yachts, and more. Our dedication to quality ensures you get the information you need to make informed decisions.
                            </p>
                        </Fade>
                    </div>

                    {/* Right Section - Stats */}
                    <div className='col-span-1 flex justify-center lg:justify-end'>
                        <div className='grid grid-cols-2 gap-8'>
                            {/* Stat 1 */}
                            <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                                <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
                                    <h3 className="text-4xl font-bold text-darkblue">23K+</h3>
                                    <p className='text-grey mt-2'>REPORTS GENERATED</p>
                                </div>
                            </Fade>

                            {/* Stat 2 */}
                            <Fade direction={'up'} delay={1200} cascade damping={1e-1} triggerOnce={true}>
                                <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
                                    <h3 className="text-4xl font-bold text-darkblue">99%</h3>
                                    <p className='text-grey mt-2'>CUSTOMER SATISFACTION</p>
                                </div>
                            </Fade>

                            {/* Stat 3 */}
                            <Fade direction={'up'} delay={1400} cascade damping={1e-1} triggerOnce={true}>
                                <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
                                    <h3 className="text-4xl font-bold text-darkblue">24/7</h3>
                                    <p className='text-grey mt-2'>SUPPORT AVAILABLE</p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;