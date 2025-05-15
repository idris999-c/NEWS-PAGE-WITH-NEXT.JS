import React from "react";

// Articles array with title, description, date, image, category, and author
const articles = [
    {
        title: "Breaking: Major Political Change in Europe",
        description:
            "In a surprising turn of events, the political landscape of Europe has shifted dramatically after the recent elections. Experts weigh in on the potential.",
        date: "February 13, 2025",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7eK0oHVv8hpNeWoU-qO54YVhTe7zo58zJgw&s",
        category: "Politics",
        author: "John Doe",
    },
    {
        title: "2025 Tech Trends: AI, IoT, and Quantum Leap",
        description:
            "As 2025 unfolds, technology experts predict significant breakthroughs in AI, IoT, and quantum computing. Here's what to expect.",
        date: "February 12, 2025",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWGI7D2NNKuv__diwpjqnikFtmwkZTvk3zg&s",
        category: "Technology",
        author: "Jane Smith",
    },
    {
        title: "Climate Crisis: Time to Act Now",
        description:
            "Global warming continues to accelerate, and scientists are calling for immediate action to mitigate the impact on our planet's ecosystems.",
        date: "February 10, 2025",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXTQSmluQgrCGcQlJEWx0pSKiP6TgMovvjYQ&s",
        category: "Environment",
        author: "Alex Johnson",
    },
];

const News: React.FC = () => {
    return (
        <>
            {/* Head section for title and meta tags */}
            <head>
                <title>Breaking News</title>
                <meta
                    name="description"
                    content="Stay informed with the latest news in politics, technology, environment, and more." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>

            {/* News section with background color and padding */}
            <section className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-20">
                {/* Container for title and description */}
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Latest News and Headlines
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Read the latest updates from around the world, from politics to technology.
                    </p>
                </div>

                {/* News grid layout */}
                <div className="mt-12 grid gap-10 lg:grid-cols-3 sm:grid-cols-1">
                    {/* Loop through each article and display a card */}
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                        >
                            {/* Article Image */}
                            <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />

                            <div className="p-6">
                                {/* Article Header: Category, Title, Date */}
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>{article.category}</span>
                                    <span>{article.date}</span>
                                </div>

                                <h3 className="text-2xl font-semibold mt-4 text-gray-900">{article.title}</h3>

                                {/* Article Description */}
                                <p className="mt-3 text-gray-600">{article.description}</p>

                                {/* Author Info */}
                                <p className="mt-3 text-sm text-gray-500">By {article.author}</p>

                                {/* Read More Button */}
                                <a
                                    href="#"
                                    className="mt-6 inline-block  py-2 before:content-['—>']  transition"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default News;
