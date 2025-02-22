"use client"
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';

const Banner = () => {
    return (
        <div id="home-section" className='bg-lightpink'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                    {/* Left Side - Text Content */}
                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h1 className="text-4xl lg:text-5xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                                WHY CHOOSE US
                            </h1>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                                Discover the Most Reliable Partner for Marine Vehicle Insights
                            </h2>
                        </Fade>
                        <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-grey lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                Get unparalleled expertise and comprehensive reports to ensure every decision you make about your marine vehicle is backed by accurate and detailed information.
                            </p>
                        </Fade>
                    </div>

                    {/* Right Side - Feature Boxes */}
                    <div className='col-span-6 flex flex-col justify-center space-y-6'>
                        <Fade direction={'up'} delay={1200} cascade damping={1e-1} triggerOnce={true}>
                            <div className='bg-white p-6 rounded-lg shadow-md'>
                                <h3 className="text-xl font-semibold mb-2">Precision-Driven Reports You Can Rely On</h3>
                                <p className='text-grey'>Our reports utilize trusted databases to provide the most accurate and reliable details, leaving no room for guesswork.</p>
                            </div>
                        </Fade>
                        <Fade direction={'up'} delay={1400} cascade damping={1e-1} triggerOnce={true}>
                            <div className='bg-white p-6 rounded-lg shadow-md'>
                                <h3 className="text-xl font-semibold mb-2">All-Encompassing Vehicle History at Your Fingertips</h3>
                                <p className='text-grey'>Access complete records, including ownership history, accident details, and performance insights, for total peace of mind.</p>
                            </div>
                        </Fade>
                        <Fade direction={'up'} delay={1600} cascade damping={1e-1} triggerOnce={true}>
                            <div className='bg-white p-6 rounded-lg shadow-md'>
                                <h3 className="text-xl font-semibold mb-2">Round-the-Clock Support Tailored to Your Needs</h3>
                                <p className='text-grey'>Our expert team is available 24/7 to guide you through the process and answer your queries with care.</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;