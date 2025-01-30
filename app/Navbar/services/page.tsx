import React from "react";

// Services array with title, description, icon, and features for each service
const services = [
    {
        title: "Web Development",
        description:
            "Modern, fast, and user-friendly web solutions to strengthen your online presence.",
        icon: "💻",
        features: ["Responsive Design", "Performance Optimization", "SEO Friendly"],
    },
    {
        title: "UI/UX Design",
        description:
            "Aesthetic and user-focused designs to make your brand unforgettable.",
        icon: "🎨",
        features: ["Wireframe & Prototype", "User Testing", "Interactive Design"],
    },
    {
        title: "SEO Optimization",
        description:
            "Boost your website's visibility on search engines and attract more customers.",
        icon: "🚀",
        features: ["Keyword Research", "Technical SEO", "Content Strategy"],
    },
];

const Services: React.FC = () => {
    return (
        <>
            {/* Head section for title and meta tags */}
            <head>
                <title>Services</title>
                <meta
                    name="Contact us to help you"
                    content="Get in touch with us for inquiries, quotes, or support. We're here to help you with your needs." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>

            {/* Services section with background color and padding */}
            <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-20">
                {/* Container for title and description */}
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Our Services
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We provide professional services tailored to your needs.
                    </p>
                </div>

                {/* Grid layout for displaying each service card */}
                <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Loop through each service and display a card */}
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow p-8 text-center"
                        >
                            {/* Service icon */}
                            <div className="text-5xl mb-4">{service.icon}</div>

                            {/* Service title */}
                            <h3 className="text-2xl font-semibold text-gray-800">
                                {service.title}
                            </h3>

                            {/* Service description */}
                            <p className="mt-3 text-gray-600">{service.description}</p>

                            {/* List of service features */}
                            <ul className="mt-4 text-left text-gray-700 space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center space-x-2 text-sm"
                                    >
                                        {/* Feature bullet point */}
                                        <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Button to learn more about the service */}
                            <button className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Services;
