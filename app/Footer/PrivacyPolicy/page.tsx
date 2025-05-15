import Head from "next/head";

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy | RİSCK</title>
                <meta name="description" content="Read our Privacy Policy to understand how we handle your data." />
            </Head>

            <main className="bg-gray-100 min-h-screen py-12 px-6">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Privacy Policy</h1>
                    <p className="text-gray-700 text-lg mb-6 text-center">
                        Last Updated: <span className="font-semibold">February 13, 2025</span>
                    </p>

                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">1. Introduction</h2>
                            <p className="text-gray-600">
                                Welcome to <strong>RİSCK</strong>. Your privacy is critically important to us.
                                This Privacy Policy explains how we collect, use, and safeguard your personal information.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">2. Information We Collect</h2>
                            <p className="text-gray-600">We collect the following types of data:</p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-1">
                                <li>Personal Data (e.g., name, email address, etc.).</li>
                                <li>Usage Data (e.g., pages visited, time spent on site).</li>
                                <li>Cookies & Tracking Technologies (e.g., analytics tools).</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">3. How We Use Your Information</h2>
                            <p className="text-gray-600">Your data is used for:</p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-1">
                                <li>Enhancing user experience.</li>
                                <li>Providing customer support.</li>
                                <li>Sending updates and promotional content (if subscribed).</li>
                                <li>Analyzing trends to improve our services.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">4. Data Protection & Security</h2>
                            <p className="text-gray-600">
                                We implement industry-standard security measures to protect your data.
                                However, no online platform is 100% secure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">5. Third-Party Services</h2>
                            <p className="text-gray-600">
                                We may use third-party services such as Google Analytics for website performance tracking.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">6. Your Rights</h2>
                            <p className="text-gray-600">You have the right to:</p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-1">
                                <li>Access, update, or delete your personal data.</li>
                                <li>Opt-out of marketing communications.</li>
                                <li>Restrict or object to data processing.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">7. Changes to This Policy</h2>
                            <p className="text-gray-600">
                                We may update this Privacy Policy periodically. Any changes will be posted on this page.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">8. Contact Us</h2>
                            <p className="text-gray-600">
                                If you have any questions regarding this policy, contact us at:
                                <span className="font-semibold"> contact@risck.com</span>
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
