import React from 'react'
import img from '../assets/home1.svg'
import img1 from '../assets/home2.svg'
import img2 from '../assets/home2.svg'
import img3 from '../assets/home3.svg'
import img4 from '../assets/home4.svg'
import img5 from '../assets/home5.svg'
import grid1 from '../assets/grid1.jpg'
import grid2 from '../assets/grid2.jpg'
import grid3 from '../assets/grid3.jpg'
import grid4 from '../assets/grid4.jpg'
import grid5 from '../assets/grid5.jpg'
import grid6 from '../assets/grid6.jpg'

const ImageGrid = () => {
    const images = [grid1, grid2, grid3, grid4, grid5, grid6]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-4 gap-x-2 mx-auto">

            {images.map((img, index) => (
                <div key={index} className="flex justify-center">
                    <img
                        src={img}
                        alt={`Grid item ${index + 1}`}
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                </div>
            ))}
        </div>
    )
}
const Home = () => {


    return (
        <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div
                className="flex flex-col md:flex-row items-center justify-between gap-8  px-6 lg:px-24 py-12  m-4"

            >
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-3xl md:text-3xl font-semibold text-blue-900 text-center">Accelerate Your Business Growth!</h1>
                    <p className="text-lg md:text-xl text-gray-700 text-center">
                        Tap into a network of 200+ investors and get capital infusion rapidly and efficiently
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition duration-300 shadow-md">
                        Consult Now
                    </button>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={img} alt="Business growth illustration" className="w-full h-auto max-w-lg mx-auto" />
                </div>
            </div>

            {/* Stats Section */}
            <div className="flex flex-col md:flex-row items-center justify-between md:px-24 py-8 border-t-2 border-b-2 border-gray-900 m-4">
                <div className="py-4 md:py-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-900 text-center">$108MN+ Raised</h2>
                </div>
                <div className="py-4 md:py-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-900 text-center">7+ Transactions</h2>
                </div>
                <div className="py-4 md:py-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-900 text-center">$564MN+ VALUATION</h2>
                </div>
            </div>

            {/* Investment Section */}
            <div
                className="bg-blue-900 text-white my-8 mx-4 border-2 p-6 lg:p-12"

            >
                <div className="max-w-5xl mx-auto">
                    <img src={img1} alt="Investment instruments illustration" className="w-full h-72 mb-8" />

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                        Tailored Made Investment Instruments
                    </h2>

                    <div className="space-y-6 text-lg text-center">
                        <p>
                            Our firm specializes in providing tailored financial solutions to support companies at various
                            stages of their growth journey. Whether it's venture debt, private equity, or venture capital,
                            we offer flexible and efficient capital infusion options designed to meet the unique needs of
                            seed-stage, early-stage, and growth-stage companies.
                        </p>

                        <p>
                            What sets us apart is our ability to deliver funding in a quick infusion cycle, typically
                            within three months. This rapid turnaround ensures that businesses can access the capital
                            they need to scale operations, invest in innovation, or seize market opportunities without
                            unnecessary delays.
                        </p>
                    </div>
                </div>
            </div>

            {/* What We Offer Section */}
            <div className="px-4 md:px-12 lg:px-24 py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    {/* Headings */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl  text-blue-600 mb-2">WHAT WE OFFER</h2>
                        <h3 className="text-2xl md:text-3xl text-green-900">Quick Capital Infusion</h3>
                    </div>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-2 p-4"
                    >
                        {/* Card 1 - Venture Debt */}
                        <div className="bg-white  overflow-hidden ">
                            <div className="overflow-hidden">
                                <img
                                    src={img2}
                                    alt="Venture Debt"
                                    className="w-full h-32 object-contain "
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-blue-900 mb-3 capitalize">venture debt</h4>
                                <p className="text-gray-700 text-center">
                                    Strategic financing tool that provides startups with additional capital to fuel growth while minimizing equity dilution. It is best suited for companies with strong investor support and a clear plan for achieving key milestones.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 - Private Equity */}
                        <div className="bg-white  overflow-hidden ">
                            <div className="overflow-hidden">
                                <img
                                    src={img3}
                                    alt="Private Equity"
                                    className="w-full h-32 object-contain "
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-blue-900 mb-3 capitalize">private equity</h4>
                                <p className="text-gray-700 text-center">
                                    Powerful tool for driving growth, improving operations, and creating value in companies. It is best suited for businesses that can benefit from significant capital infusion, strategic expertise, and long-term investment horizons.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 - Venture Capital */}
                        <div className="bg-white  overflow-hidden ">
                            <div className="overflow-hidden">
                                <img
                                    src={img4}
                                    alt="Venture Capital"
                                    className="w-full h-32 object-contain "
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-blue-900 mb-3 capitalize">venture capital</h4>
                                <p className="text-gray-700 text-center">
                                    Source of funding for high-potential startups, enabling them to innovate, grow, and disrupt industries. Combination of capital, expertise, and networks provided by VCs can significantly increase a startup's chances of success.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 - Family Off & HNI */}
                        <div className="bg-white  overflow-hidden ">
                            <div className="overflow-hidden">
                                <img
                                    src={img5}
                                    alt="Family Office & HNI"
                                    className="w-full h-32 object-contain "
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-blue-900 mb-3">Family Off & HNI</h4>
                                <p className="text-gray-700 text-center">
                                    Privately held companies that handles investment management generally across $50–100 million in investable assets for a wealthy family or HNIs with the goal being to effectively grow and transfer wealth across generations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industry Landscope */}
            <div className='px-4 md:px-12 lg:px-24 py-16 bg-gray-50  border-b-4 border-t-4 border-gray-900'>
                <h1 className='text-3xl md:text-3xl font-semibold text-green-900 text-center'>Industry Landscape </h1>
                <ImageGrid />
            </div>

        </div>
    )
}

export default Home
