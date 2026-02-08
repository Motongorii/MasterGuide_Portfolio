'use client';

export default function Mission() {
  return (
    <div className="bg-gradient-to-b from-secondary-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary-700 to-secondary-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">My Mission</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Guiding, empowering, and supporting individuals on their journey to achieve meaningful growth.</p>
        </div>
      </section>

      {/* Main Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-secondary-50 to-sage-50 rounded-2xl p-12 border-4 border-secondary-300 mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-8 text-center">Purpose & Vision</h2>
            
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary-600 mb-4">Mission Statement</p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  To empower individuals through authentic mentorship, compassionate guidance, and unwavering support—creating inclusive communities where everyone can discover their potential and achieve meaningful growth while maintaining integrity and fostering lasting positive change.
                </p>
              </div>

              <div className="border-t-2 border-secondary-300 pt-8 mt-8">
                <p className="text-2xl font-bold text-secondary-600 mb-4">Vision</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A world where individuals are empowered to become the best versions of themselves, where communities thrive on mutual support and respect, and where every person has access to authentic mentorship and guidance needed to achieve their dreams and make a positive impact.
                </p>
              </div>
            </div>
          </div>

          {/* Core Pillars */}
          <div>
            <h2 className="text-4xl font-bold text-secondary-800 text-center mb-12">Core Pillars</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-secondary-600 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-secondary-800 mb-4">Authentic Connection</h3>
                <p className="text-gray-700 leading-relaxed">
                  Building genuine relationships based on trust, transparency, and mutual respect. Creating meaningful connections that inspire and support personal growth.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-sage-600 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-sage-800 mb-4">Continuous Growth</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fostering an environment where learning, development, and self-improvement are celebrated. Encouraging individuals to embrace change and reach their full potential.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-primary-600 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤗</div>
                <h3 className="text-2xl font-bold text-primary-800 mb-4">Inclusive Community</h3>
                <p className="text-gray-700 leading-relaxed">
                  Creating safe, welcoming spaces where every individual feels valued, respected, and heard. Celebrating diversity and supporting all paths to success.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-accent-600 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-2xl font-bold text-accent-800 mb-4">Empowerment</h3>
                <p className="text-gray-700 leading-relaxed">
                  Equipping individuals with tools, knowledge, and confidence to take charge of their lives. Supporting their journey toward independence and success.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 text-center mb-12">Core Values</h2>
            
            <div className="space-y-4">
              {[
                { title: 'Integrity', desc: 'Operating with honesty, transparency, and strong ethical principles in all interactions and decisions.' },
                { title: 'Compassion', desc: 'Approaching every individual with empathy, understanding, and genuine care for their wellbeing.' },
                { title: 'Excellence', desc: 'Striving for the highest standards in everything we do, from guidance to community support.' },
                { title: 'Inclusivity', desc: 'Ensuring that all voices are heard and all individuals are welcomed and valued.' },
                { title: 'Accountability', desc: 'Taking responsibility for our actions and commitments, following through with dedication.' },
                { title: 'Courage', desc: 'Having the boldness to challenge norms and create meaningful change in communities.' },
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-secondary-600 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-secondary-800 mb-2">{value.title}</h4>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-gradient-to-r from-secondary-600 to-sage-600 rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">My Commitment to You</h2>
            <p className="text-lg leading-relaxed mb-8">
              I am committed to providing authentic, compassionate, and empowering guidance. I will listen without judgment, support without limits, and guide with integrity. Together, we'll create opportunities for meaningful growth and lasting positive change.
            </p>
            <p className="text-xl font-semibold">Your success is my mission. Your growth is my purpose.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
