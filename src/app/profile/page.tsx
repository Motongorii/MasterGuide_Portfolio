'use client';

export default function Profile() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary-800 mb-4 animate-slideInLeft">
            About Me
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary-600 to-sage-600 mb-8"></div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-80 h-96 rounded-2xl shadow-2xl flex items-center justify-center bg-gradient-to-br from-secondary-400 to-sage-400 p-0 sticky top-24 overflow-hidden">
                <img src="/profile.jpeg" alt="Anthony Motongori" className="w-full h-full object-contain p-4 bg-white" />
              </div>
            </div>

            {/* Profile Information */}
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold text-secondary-800 mb-6">Anthony Motongori</h2>
              <p className="text-xl text-secondary-600 font-semibold mb-8">Master Guide | Mentor | Community Leader</p>
              <div className="mb-8">
                <p className="text-gray-700"><strong>Email:</strong> antomotongori@gmail.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +254119397068</p>
                <p className="text-gray-700"><strong>Location:</strong> Nairobi, Kenya</p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary-800 mb-4">About Me</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I am a dedicated Master Guide in the Seventh-day Adventist Church, passionate about empowering youth and building strong, faith-based communities. As a Master Guide, I am committed to mentoring, guiding, and serving young people, helping them grow spiritually, socially, and practically. My journey is rooted in the values of Christian leadership, service, and personal development.
                  </p>
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-secondary-800 mb-4">What is a Master Guide?</h3>
                    <p className="text-gray-700 mb-4">
                      The Master Guide is the highest level of leadership within the Adventist youth ministries, especially Pathfinders and Adventurers. Master Guides are trained to mentor, organize activities, and model Christian values, supporting the spiritual and personal growth of young people. This role is about service, leadership, and being a positive example in the church and community.
                    </p>
                    <h3 className="text-2xl font-bold text-secondary-800 mb-4">My Mission as a Master Guide</h3>
                    <p className="text-gray-700 mb-4">
                      My mission is to inspire and nurture faith, develop leadership skills, and create safe, inclusive spaces for growth. I strive to support church programs, mentor youth, and lead by example—fostering spiritual growth and organizing meaningful activities that reflect Christ’s teachings.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    My approach combines practical wisdom, compassionate listening, and a deep commitment to the values of the Master Guide ministry: integrity, compassion, growth, and inclusivity. I am dedicated to making a lasting impact in the lives of those I serve.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary-800 mb-4">Professional Background</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-sage-600 font-bold">•</span>
                      <span className="text-gray-700"><strong>Experience:</strong> 5+ years in mentorship and community leadership</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sage-600 font-bold">•</span>
                      <span className="text-gray-700"><strong>Education:</strong> Advanced certification in leadership and development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sage-600 font-bold">•</span>
                      <span className="text-gray-700"><strong>Focus:</strong> Personal growth, career development, and community support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sage-600 font-bold">•</span>
                      <span className="text-gray-700"><strong>Passion:</strong> Creating inclusive spaces and fostering meaningful relationships</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary-800 mb-4">Core Values</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Integrity', 'Compassion', 'Growth', 'Inclusivity'].map((value) => (
                      <div key={value} className="bg-primary-50 border-l-4 border-secondary-600 p-4 rounded">
                        <p className="font-bold text-secondary-800">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary-800 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-accent-300 mb-2">50+</p>
              <p className="text-gray-300">Members Guided</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-accent-300 mb-2">1000+</p>
              <p className="text-gray-300">Lives Impacted</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-accent-300 mb-2">5+</p>
              <p className="text-gray-300">Years Active</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-accent-300 mb-2">100%</p>
              <p className="text-gray-300">Dedication</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
