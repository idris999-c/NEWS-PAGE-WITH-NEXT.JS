import React from "react";

const Contact: React.FC = () => {
    return (
        <>
            <head>
                <title>Contact</title>
                <meta
                    name="Contact us to help you"
                    content="Get in touch with us for inquiries, quotes, or support. We're here to help you with your needs." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <article className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <section className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left Section */}
                        <aside className="bg-gradient-to-br from-black to-indigo-600 text-white p-8 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                            <p className="text-lg mb-6">
                                We would love to hear from you! Fill out the form, or reach us directly via email or phone.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <span className="material-icons-outlined mr-3">email</span>
                                    <a href="mailto:info@example.com" className="underline hover:text-gray-200">
                                        info@example.com
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <span className="material-icons-outlined mr-3">phone</span>
                                    <a href="tel:+123456789" className="underline hover:text-gray-200">
                                        +1 (234) 567-89
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <span className="material-icons-outlined mr-3">location_on</span>
                                    <address>123 Main Street, City, Country</address>
                                </li>
                            </ul>
                        </aside>

                        {/* Right Section */}
                        <section className="p-8">
                            <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
                            <form className="space-y-4">
                                {/* name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm p-2"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                {/* email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gary sm:text-sm p-2"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                {/* message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gary-500 sm:text-sm p-2"
                                        placeholder="Your Message"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gray-600 text-white py-2 px-4 rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 from-black to-indigo-600"
                                >
                                    Send Message
                                </button>
                            </form>
                        </section>
                    </section>
                </article>
            </main>
        </>
    );
};

export default Contact;
