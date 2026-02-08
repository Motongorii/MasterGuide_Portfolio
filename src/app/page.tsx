'use client';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-sage-50 py-20 lg:py-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fadeInUp"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fadeInUp" style={{ animationDelay: '0.2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slideInLeft">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary-800 leading-tight mb-6">
                Welcome to My <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-sage-600">Master Guide</span> Portfolio
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover my journey, achievements, and the impact I'm making as a Master Guide. Explore my honours, read my thoughts, and join me in creating a safe space for growth and learning.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/profile" className="px-8 py-3 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  View My Profile
                </a>
                <a href="/contact" className="px-8 py-3 border-2 border-secondary-600 text-secondary-600 rounded-lg font-semibold hover:bg-secondary-50 transition-all duration-200">
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-secondary-400 to-sage-400 rounded-2xl shadow-2xl flex items-center justify-center text-white text-center p-8">
                <div>
                  <p className="text-lg font-semibold mb-4">Your Professional Photo</p>
                  <p className="text-sm opacity-90">Replace this with your profile image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white border-t-4 border-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-primary-50 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-secondary-600 mb-2">50+</div>
              <p className="text-gray-600 font-semibold">Members Guided</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-secondary-50 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-sage-600 mb-2">15+</div>
              <p className="text-gray-600 font-semibold">Honours & Awards</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-accent-50 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-accent-600 mb-2">8</div>
              <p className="text-gray-600 font-semibold">Blog Articles</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-sage-50 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
              <p className="text-gray-600 font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 text-center mb-16">Featured Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Honours Card */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-800 mb-2 group-hover:text-secondary-600">Honours</h3>
                <p className="text-gray-600 text-sm mb-4">Recognition and accolades earned throughout my journey</p>
                <a href="/honours" className="inline-block text-secondary-600 hover:text-secondary-800 font-semibold text-sm">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-sage-800 mb-2 group-hover:text-sage-600">Achievements</h3>
                <p className="text-gray-600 text-sm mb-4">Milestones and accomplishments that define my path</p>
                <a href="/achievements" className="inline-block text-sage-600 hover:text-sage-800 font-semibold text-sm">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Blog Card */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.001c0 5.999 4.5 10.744 10 10.744s10-4.745 10-10.744C22 11 17.5 6.253 12 6.253z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-accent-800 mb-2 group-hover:text-accent-600">Blog</h3>
                <p className="text-gray-600 text-sm mb-4">Insights, thoughts, and wisdom shared with the community</p>
                <a href="/blog" className="inline-block text-accent-600 hover:text-accent-800 font-semibold text-sm">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Safe Space Card */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-2 group-hover:text-primary-600">Safe Space</h3>
                <p className="text-gray-600 text-sm mb-4">A welcoming environment for growth and support</p>
                <a href="/safe-space" className="inline-block text-primary-600 hover:text-primary-800 font-semibold text-sm">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-secondary-50 to-sage-50 rounded-2xl p-12 border-2 border-secondary-200">
            <h2 className="text-3xl font-bold text-secondary-800 mb-6">My Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              To empower individuals through guidance, mentorship, and authentic support. I am committed to creating an inclusive and nurturing environment where everyone can discover their potential and achieve meaningful growth.
            </p>
            <a href="/mission" className="inline-block px-8 py-3 bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-700 transition-colors duration-200">
              Read Full Mission Statement
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
