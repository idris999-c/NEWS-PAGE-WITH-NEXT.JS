import { FC } from 'react';

const About: FC = () => {
    return (
        <div className="min-h-screen max-w-full bg-gray-500 rounded-3xl text-white flex items-center justify-center px-6 py-12">
            <div className="text-center max-w-4xl rounded-lg shadow-lg overflow-hidden">
                <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-600 to-white">
                    About Us
                </h1>
                <p className="text-xl mb-8 text-gray-300">We are more than just a team. We are innovators, creators, and dreamers, shaping the future of technology with simplicity and style.</p>

                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:space-x-8">
                        <div className="sm:w-1/3">
                            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
                            <p className="text-lg text-gray-400">
                                At the core of our mission lies simplicity. We aim to create solutions that are not only elegant but also intuitive and impactful.
                            </p>
                        </div>
                        <div className="sm:w-1/3">
                            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                            <p className="text-lg text-gray-400">
                                To empower individuals and businesses by providing cutting-edge tools that make life easier and more productive.
                            </p>
                        </div>
                        <div className="sm:w-1/3">
                            <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-400">
                                <li>Innovation</li>
                                <li>Quality</li>
                                <li>Transparency</li>
                                <li>Respect</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
