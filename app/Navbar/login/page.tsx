"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiEye, HiEyeOff } from "react-icons/hi";

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState(""); // State to store the email input
    const [password, setPassword] = useState(""); // State to store the password input
    const [error, setError] = useState(""); // State to store error messages
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    // Function to handle login submission
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check if email or password is empty
        if (!email || !password) {
            setError("Please fill in all fields"); // Set error message
            return;
        }

        // Check if the email and password match a predefined user
        if (email === "test@example.com" && password === "password123") {
            router.push("/dashboard"); // Redirect to dashboard if credentials are correct
        } else {
            setError("Invalid email or password"); // Set error message if credentials are incorrect
        }
    };

    return (
        <>
            <head>
                <title>Login</title>
                <meta
                    name="Contact us to help you"
                    content="Get in touch with us for inquiries, quotes, or support. We're here to help you with your needs." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <div className="flex items-center justify-center min-h-screen">
                <div className="relative bg-transparent p-8 rounded-3xl shadow-xl w-96 max-w-md z-10 backdrop-blur-md">
                    <h2 className="text-4xl font-bold text-center text-black mb-8">
                        Login to Your News Hub
                    </h2>

                    {error && <p className="text-red-400 text-sm text-center">{error}</p>} {/* Display error message if exists */}

                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email input field */}
                        <div>
                            <label className="block text-sm font-medium text-black">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update email state on input change
                                className="w-full p-4 bg-transparent border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-700 transition-all"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Password input field with show/hide functionality */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-black">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"} // Toggle between text and password input type
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Update password state on input change
                                className="w-full p-4 bg-transparent border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-700 transition-all"
                                placeholder="Enter your password"
                                required
                            />
                            {/* Show/hide password icon */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                                className="absolute right-4 bottom-3 transform -translate-y-1/2 text-black"
                            >
                                {showPassword ? (
                                    <HiEyeOff size={20} /> // Show "eye off" icon when password is visible
                                ) : (
                                    <HiEye size={20} /> // Show "eye" icon when password is hidden
                                )}
                            </button>
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="flex w-3/4 py-2 border-2 justify-center border-black bg-black text-white rounded-xl transition-all duration-100 transform hover:scale-105 mx-auto"
                        >
                            Login
                        </button>
                    </form>

                    {/* Sign up link */}
                    <p className="text-sm text-center mt-4 text-black">
                        Don't have an account?{" "}
                        <a href="/Navbar/login/signup" className="text-blue-700 hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
