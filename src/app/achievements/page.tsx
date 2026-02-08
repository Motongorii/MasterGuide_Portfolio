'use client';

export default function Achievements() {
  const achievements = [
    {
      category: 'Community Impact',
      items: [
        'Founded mentorship program impacting 500+ individuals',
        'Established safe space initiative with 95% participant satisfaction',
        'Created inclusive community events reaching 1000+ people',
        'Developed comprehensive support system for underrepresented groups',
      ],
    },
    {
      category: 'Personal Development',
      items: [
        'Completed advanced leadership training programs',
        'Obtained multiple professional certifications',
        'Published 8+ thought-leadership articles',
        'Earned advanced degree in Community Development',
      ],
    },
    {
      category: 'Professional Milestones',
      items: [
        'Promoted to Senior Mentor position',
        'Led successful organizational transformation',
        'Mentored 50+ individuals to achieve their goals',
        'Expanded reach to 5 different regions',
      ],
    },
    {
      category: 'Innovation & Growth',
      items: [
        'Developed innovative mentorship framework',
        'Implemented data-driven decision-making systems',
        'Created online learning platform reaching 2000+ users',
        'Pioneered new community engagement strategies',
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-sage-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sage-700 to-sage-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Achievements</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Milestones and accomplishments that define my journey and impact.</p>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-4 border-sage-500 hover:translate-y-[-4px]"
              >
                <div className="h-2 bg-gradient-to-r from-sage-400 to-primary-400"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-sage-800 mb-6">{achievement.category}</h3>
                  <ul className="space-y-4">
                    {achievement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-4">
                        <div className="mt-1.5">
                          <div className="w-2 h-2 rounded-full bg-sage-600"></div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-secondary-800 text-center mb-12">Journey Timeline</h2>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sage-400 to-sage-600 hidden md:block"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  { year: '2018', title: 'Started Journey', desc: 'Began mentorship work and community engagement' },
                  { year: '2019', title: 'First Program', desc: 'Launched initial mentorship program' },
                  { year: '2021', title: 'Growth Phase', desc: 'Expanded reach to multiple regions' },
                  { year: '2023', title: 'Recognition', desc: 'Received major honours and awards' },
                  { year: '2024', title: 'New Initiatives', desc: 'Started innovative community projects' },
                ].map((item, index) => (
                  <div key={index} className={`flex gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 md:text-right">
                      {index % 2 === 0 && (
                        <div className="bg-white p-6 rounded-lg shadow-md border-r-4 border-sage-500">
                          <p className="text-sage-600 font-bold text-lg">{item.year}</p>
                          <h4 className="text-xl font-bold text-secondary-800 mt-2">{item.title}</h4>
                          <p className="text-gray-600 mt-2">{item.desc}</p>
                        </div>
                      )}
                    </div>

                    <div className="w-8 h-8 bg-sage-600 rounded-full border-4 border-white shadow-lg flex-shrink-0 hidden md:block"></div>

                    <div className="flex-1 md:text-left">
                      {index % 2 !== 0 && (
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sage-500">
                          <p className="text-sage-600 font-bold text-lg">{item.year}</p>
                          <h4 className="text-xl font-bold text-secondary-800 mt-2">{item.title}</h4>
                          <p className="text-gray-600 mt-2">{item.desc}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
