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
    // SVG color style for teal-700
    const svgTealStyle = {
        filter: 'invert(26%) sepia(89%) saturate(1583%) hue-rotate(158deg) brightness(95%) contrast(101%)'
    };

    return (
        <div className="max-w-7xl mx-auto text-center">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 lg:px-24 py-12 m-4">
                <div className="w-full md:w-1/2 space-y-6 text-center">
                    <h1 className="text-3xl md:text-3xl  text-blue-950 py-4">Accelerate Your Business Growth!</h1>
                    <p className="text-lg md:text-xl text-blue-950">
                        Tap into a network of 200+ investors and get capital infusion rapidly and efficiently
                    </p>
                    <button onClick={() => window.location.href = '/contact'} className="bg-blue-800 text-white py-3 px-8 rounded uppercase font-bold tracking-wider hover:bg-blue-800 transition duration-200 ring-2 ring-blue-800 ring-offset-2 focus:outline-none focus:ring-4">
                        Consult Now
                    </button>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={img} alt="Business growth illustration" style={svgTealStyle} className="w-full h-auto max-w-lg mx-auto" />
                </div>
            </div>

            {/* Stats Section */}
            <div className="flex flex-col md:flex-row items-center justify-between md:px-24 py-8 border-t-4 border-b-4 border-blue-900 m-4">
                <div className="py-4 md:py-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-teal-700">$108MN+ Raised</h2>
                </div>
                <div className="py-4 md:py-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-teal-700">7+ Transactions</h2>
                </div>
                <div className="py-4 md:py-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-teal-700">$564MN+ VALUATION</h2>
                </div>
            </div>

            {/* Investment Section */}
            <div className="bg-blue-900 text-white my-8 mx-4 border-2 p-6 lg:p-12">
                <div className="max-w-5xl mx-auto">
                    <img src={img1} alt="Investment instruments illustration" className="w-full h-64 mb-8 invert" />

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 py-4">
                        Tailored Made Investment Instruments
                    </h2>

                    <div className="space-y-6 text-lg">
                        <p>
                            Our firm specializes in providing tailored financial solutions to support companies at various stages of their growth journey. Whether it's venture debt, private equity, or venture capital, we offer flexible and efficient capital infusion options designed to meet the unique needs of seed-stage, early-stage, and growth-stage companies.
                        </p>

                        <p>
                            What sets us apart is our ability to deliver funding in a quick infusion cycle, typically within three months. This rapid turnaround ensures that businesses can access the capital they need to scale operations, invest in innovation, or seize market opportunities without unnecessary delays.
                        </p>
                    </div>
                </div>
            </div>

            {/* What We Offer Section */}
            <div className="px-4 md:px-12 lg:px-24 py-12 border-t-4 border-b-4 border-blue-900">
                <div className="max-w-7xl mx-auto">
                    {/* Headings */}
                    <div className="mb-10">
                        <h2 className="text-2xl md:text-4xl text-blue-900 mb-2 font-thin ">WHAT WE OFFER</h2>
                        <h3 className="text-xl md:text-3xl text-teal-700">Quick Capital Infusion</h3>
                    </div>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
                        {/* Card 1 - Venture Debt */}
                        <div className="bg-white overflow-hidden">
                            <div className="overflow-hidden">
                                <img
                                    src={img2}
                                    alt="Venture Debt"
                                    style={svgTealStyle}
                                    className="w-full h-32 object-contain"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="text-xl font-bold text-blue-900 mb-3 capitalize py-2">venture debt</h4>
                                <p className="text-blue-900">
                                    Strategic financing tool that provides startups with additional capital to fuel growth while minimizing equity dilution. It is best suited for companies with strong investor support and a clear plan for achieving key milestones.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 - Private Equity */}
                        <div className="bg-white overflow-hidden">
                            <div className="overflow-hidden">
                                <img
                                    src={img3}
                                    alt="Private Equity"
                                    style={svgTealStyle}
                                    className="w-full h-32 object-contain"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="text-xl font-bold text-blue-900 mb-3 capitalize py-2">private equity</h4>
                                <p className="text-blue-900">
                                    Powerful tool for driving growth, improving operations, and creating value in companies. It is best suited for businesses that can benefit from significant capital infusion, strategic expertise, and long-term investment horizons.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 - Venture Capital */}
                        <div className="bg-white overflow-hidden">
                            <div className="overflow-hidden">
                                <img
                                    src={img4}
                                    alt="Venture Capital"
                                    style={svgTealStyle}
                                    className="w-full h-32 object-contain"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="text-xl font-bold text-blue-900 mb-3 capitalize py-2">venture capital</h4>
                                <p className="text-blue-900">
                                    Source of funding for high-potential startups, enabling them to innovate, grow, and disrupt industries. Combination of capital, expertise, and networks provided by VCs can significantly increase a startup's chances of success.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 - Family Off & HNI */}
                        <div className="bg-white overflow-hidden">
                            <div className="overflow-hidden">
                                <img
                                    src={img5}
                                    alt="Family Office & HNI"
                                    style={svgTealStyle}
                                    className="w-full h-32 object-contain"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="text-xl font-bold text-blue-900 mb-3 py-2">Family Off & HNI</h4>
                                <p className="text-blue-900">
                                    Privately held companies that handles investment management generally across $50–100 million in investable assets for a wealthy family or HNIs with the goal being to effectively grow and transfer wealth across generations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Approach */}
            <div className="mt-12 bg-teal-700 p-14">
                <h2 className="text-3xl md:text-4xl text-white font-semibold mb-2 py-4">OUR APPROACH</h2>
                <p className='text-gray-200 my-4'>
                    Designed to support entrepreneurs and founders by minimizing the time spent on fundraising, allowing them to focus on building and growing their businesses. Whether you're a startup looking to accelerate product development or a scaling company aiming to expand into new markets, we provide the financial resources and strategic support.
                </p>
            </div>

            <div className='space-y-6 border-t-4 border-b-4 border-blue-900 m-4 p-8'>
                <h1 className='text-xl md:text-4xl font-thick text-blue-900 py-4'>"Testimonials"</h1>
                <p className='text-blue-900 text-lg'>
                    "We are thrilled to share our experience working with Clutch Capital, whose support has been instrumental in our growth journey. As a growing business, we faced challenges in managing our inventory to meet the increasing demand from our order pipeline. That's when Clutch Capital stepped in with their venture capital funding, which came at just the right time.
                </p>
                <p className='text-blue-900 text-lg'>
                    The $2.8 million investment allowed us to make timely inventory purchases, ensuring we could fulfill customer orders worth $15 million (78 systems) without delays. This not only strengthened our reputation for reliability but also helped us capitalize on new opportunities in the market. The team at Clutch Capital was incredibly supportive throughout the process, offering valuable guidance that went beyond just financial backing.
                </p>
                <p className='text-blue-900 text-lg'>
                    Thanks to Clutch Capital, we've been able to scale our operations, meet customer expectations, and position ourselves for long-term success."
                </p>
                <p className='text-blue-900 text-lg'>
                    Rinku Thomas, COO, Cloudace Technologies
                </p>
            </div>

            {/* Industry Landscape */}
            <div className='px-4 md:px-12 lg:px-24 py-16 bg-gray-50 border-b-4 border-blue-900'>
                <h1 className='text-3xl md:text-3xl font-semibold text-teal-700 py-4 mb-6'>Industry Landscape</h1>
                <ImageGrid />
            </div>
        </div>
    )
}

export default Home