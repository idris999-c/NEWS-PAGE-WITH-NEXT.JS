export default function AboutPage() {
    return (
        <>
            {/* Head section for meta tags and page title */}
            <head>
                <title>About</title>
                <meta
                    name="Contact us to help you"
                    content="Get in touch with us for inquiries, quotes, or support. We're here to help you with your needs." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>

            {/* Main content container */}
            <main className="max-w-7xl mx-auto py-12 px-6 text-gray-800">

                {/* About Us Section */}
                <header className="mb-12">
                    <h1 className="text-5xl font-extrabold leading-tight mb-4">About Us</h1>
                    <hr />
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Discover who we are, what drives us, and how we aim to make a difference.
                    </p>
                </header>

                {/* Who We Are Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        We are a dedicated team of professionals committed to delivering accurate,
                        engaging, and meaningful content. Our goal is to keep you informed, inspired,
                        and connected to the world around you.
                    </p>
                    <p className="text-lg leading-relaxed">
                        With a passion for excellence and innovation, we strive to provide the highest
                        quality of service to our audience. We believe in the power of stories to bring
                        people together and create lasting impact.
                    </p>
                </section>

                {/* Our Mission Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Our mission is to empower our audience with knowledge and perspectives that
                        drive meaningful conversations. We aim to be a trusted source for news,
                        insights, and stories that matter.
                    </p>
                    <p className="text-lg leading-relaxed">
                        By staying true to our values of integrity, transparency, and innovation, we
                        hope to create a platform where information is accessible, reliable, and
                        impactful.
                    </p>
                </section>

                {/* Join the Conversation Section */}
                <section>
                    <h2 className="text-3xl font-bold mb-6">Join the Conversation</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        We believe in the power of community and dialogue. Follow us on social media,
                        share your thoughts, and be part of the conversation. Your voice matters, and
                        we’re here to listen.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Together, we can build a more informed and connected world. Thank you for
                        being a part of our journey.
                    </p>
                </section>
            </main>

        </>
    );
}
