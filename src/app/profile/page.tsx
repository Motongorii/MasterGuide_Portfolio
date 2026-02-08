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
              <div className="w-80 h-96 bg-gradient-to-br from-secondary-400 to-sage-400 rounded-2xl shadow-2xl flex items-center justify-center text-white text-center p-8 sticky top-24">
                <div>
                  <p className="text-xl font-semibold mb-4">Your Professional Photo</p>
                  <p className="opacity-90">High-quality portrait photo</p>
                </div>
              </div>
            </div>

            {/* Profile Information */}
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold text-secondary-800 mb-6">Your Name</h2>
                <h2 className="text-4xl font-bold text-secondary-800 mb-6">Anthony Motongori</h2>
              <p className="text-xl text-secondary-600 font-semibold mb-8">Master Guide | Mentor | Community Leader</p>
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
                    Welcome to my profile. I am a dedicated Master Guide with a passion for empowering others through mentorship and authentic support. With years of experience in community building and personal development, I've had the privilege of guiding individuals towards their goals and potential.
                  </p>
                  {/* Q&A Section */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-secondary-800 mb-4">Master Guide Q&A</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-secondary-700 mb-2">What is the meaning of Master Guide?</h4>
                        <p className="text-gray-700">A Master Guide is a leader in the Pathfinder ministry, trained to mentor, guide, and serve youth and the church community. The title represents commitment to spiritual growth, leadership, and service, embodying the values of Christian character and dedication.</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-secondary-700 mb-2">Why do you want to become a Master Guide?</h4>
                        <p className="text-gray-700">I aspire to become a Master Guide to deepen my spiritual journey, develop leadership skills, and positively impact the lives of young people. It is a calling to serve, inspire, and nurture faith, helping others grow in their relationship with God.</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-secondary-700 mb-2">How would you use your training for God and the church after investiture?</h4>
                        <p className="text-gray-700">After investiture, I will use my training to support church programs, mentor youth, and lead by example. My goal is to foster spiritual growth, organize meaningful activities, and serve the church and community with dedication and love, reflecting Christ's teachings in all I do.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    My approach combines practical wisdom, compassionate listening, and a deep commitment to creating safe, inclusive spaces where growth can flourish.
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
