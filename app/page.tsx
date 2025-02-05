'use client';

import { useState, useEffect } from 'react';

// Article interface to define the structure of an article object
interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: { name: string };
}

export default function Home() {
  // State to store the articles and any error message
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch news data from the API
    const fetchData = async () => {
      try {
        const apiKey = '447f980cc404448a844a7e172e249818';
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);

        // If response is not OK, throw an error
        if (!response.ok) {
          throw new Error('Unable to load news');
        }

        // Parse the response data and update the state with articles
        const data = await response.json();
        setArticles(data.articles);
      } catch (err) {
        // Set error message if something goes wrong
        setError('An error occurred while loading the news.');
      }
    };

    // Call the fetchData function when the component is mounted
    fetchData();
  }, []); // Empty dependency array means this effect runs only once after the initial render

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

      <div className="min-h-screen bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-8">

          {/* Header section */}
          <header className="border-b pb-4 mb-6">
            <h1 className="text-4xl font-bold text-center">News</h1>
          </header>

          {/* Display error message if there was an issue fetching the news */}
          {error && <p className="text-red-600 text-center">{error}</p>}

          {/* Featured News Section */}
          {articles.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* Featured article with large image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src={articles[0].urlToImage || '/placeholder.jpg'} // Fallback to placeholder image if no image available
                  alt={articles[0].title}
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute bottom-0 p-6 bg-black/60 text-white w-full">
                  <h2 className="text-2xl font-bold">{articles[0].title}</h2>
                  <a
                    href={articles[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline mt-2 inline-block"
                  >
                    Read Article → {/* Link to the full article */}
                  </a>
                </div>
              </div>

              {/* Side news articles */}
              <div className="space-y-4">
                {articles.slice(1, 4).map((article, index) => (
                  <div key={index} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <img
                      src={article.urlToImage || '/placeholder.jpg'}
                      alt={article.title}
                      className="w-32 h-24 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{article.title}</h3>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        Read Article → {/* Link to the full article */}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other News Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(4, 10).map((article, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <img
                  src={article.urlToImage || '/placeholder.jpg'} // Fallback to placeholder image if no image available
                  alt={article.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-2">{article.title}</h3>
                <p className="text-gray-600 text-sm">{article.description?.slice(0, 100)}...</p> {/* Truncated description */}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  Read Article → {/* Link to the full article */}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
