'use client';

export default function Honours() {
  const honours = [
    {
      title: 'Master Guide Investiture',
      organization: 'Seventh-day Adventist Church',
      year: '2022',
      description: 'Received the highest level of youth leadership recognition in the Adventist Church for completing the Master Guide curriculum and demonstrating commitment to service, leadership, and spiritual growth.',
      icon: '🎖️',
    },
    {
      title: 'Pathfinder Leadership Award',
      organization: 'East-Central Africa Division',
      year: '2023',
      description: 'Honored for outstanding leadership and mentorship within the Pathfinder Club, guiding youth in spiritual and personal development.',
      icon: '🏅',
    },
    {
      title: 'Community Service Recognition',
      organization: 'Adventist Youth Ministries',
      year: '2023',
      description: 'Recognized for impactful community outreach and service projects as a Master Guide, fostering positive change and support.',
      icon: '🌟',
    },
    {
      title: 'Adventurer Club Mentor Award',
      organization: 'Local SDA Conference',
      year: '2022',
      description: 'Awarded for dedicated mentorship and support to Adventurer Club members, nurturing faith and character in young children.',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      title: 'Spiritual Leadership Distinction',
      organization: 'SDA Church Board',
      year: '2021',
      description: 'Recognized for exemplary spiritual leadership, organizing devotionals, and fostering a Christ-centered environment for youth.',
      icon: '⛪',
    },
    {
      title: 'Pathfinder Instructor Badge',
      organization: 'Pathfinder Club',
      year: '2021',
      description: 'Earned for teaching Pathfinder honors and skills, equipping youth with practical knowledge and spiritual values.',
      icon: '📘',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-accent-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary-700 to-secondary-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Honours & Recognition</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Celebrating achievements and recognition received throughout my professional journey.</p>
        </div>
      </section>

      {/* Honours Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {honours.map((honour, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 border-accent-500 hover:translate-y-[-4px]"
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl">{honour.icon}</span>
                    <div className="flex-1">
                      <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {honour.year}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-secondary-800 mb-2 group-hover:text-accent-600 transition-colors">
                    {honour.title}
                  </h3>
                  <p className="text-accent-600 font-semibold mb-4">{honour.organization}</p>
                  <p className="text-gray-600 leading-relaxed">{honour.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Box */}
          <div className="bg-gradient-to-r from-secondary-50 to-accent-50 rounded-2xl p-8 border-2 border-secondary-200">
            <h2 className="text-2xl font-bold text-secondary-800 mb-4">Recognition Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-4xl font-bold text-secondary-600">15+</p>
                <p className="text-gray-600 mt-2">Major Honours</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent-600">8</p>
                <p className="text-gray-600 mt-2">Certifications</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-sage-600">10+</p>
                <p className="text-gray-600 mt-2">Awards</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600">50+</p>
                <p className="text-gray-600 mt-2">Recognitions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
