'use client';

import { useState } from 'react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Role of a Master Guide in the SDA Church',
      category: 'Leadership',
      date: 'February 7, 2026',
      excerpt: 'Discover the responsibilities, mission, and impact of a Master Guide in the Seventh-day Adventist Church.',
      image: '/masterguide-thumbnail.jpg',
      readTime: '5 min read',
    },
  ];

  const categories = ['all', 'Leadership', 'Community', 'Development', 'Mindset', 'Skills'];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-gradient-to-b from-white to-primary-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Insights, wisdom, and reflections on leadership, growth, and community.</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-primary-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 capitalize ${
                  selectedCategory === category
                    ? 'bg-secondary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:translate-y-[-8px]"
              >
                {/* Featured Image */}
                <div className="h-48 w-full overflow-hidden bg-gray-100">
                  <img src={post.image} alt={post.title} className="object-cover h-full w-full" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-block bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-secondary-800 mb-3 group-hover:text-secondary-600 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <a href={`/blog/${post.id}`} className="text-secondary-600 hover:text-secondary-800 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary-50 to-sage-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">Subscribe to receive new articles and insights directly in your inbox.</p>
          <form className="flex gap-3 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-secondary-200 focus:border-secondary-600 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-700 transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
