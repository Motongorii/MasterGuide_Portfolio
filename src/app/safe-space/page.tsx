'use client';

export default function SafeSpace() {
  const features = [
    {
      icon: '🛡️',
      title: 'Confidentiality',
      description: 'Your privacy is sacred. Everything shared here is confidential and protected.',
    },
    {
      icon: '🤐',
      title: 'Non-Judgment',
      description: 'Share without fear of judgment. This is a space of acceptance and understanding.',
    },
    {
      icon: '💚',
      title: 'Support',
      description: 'Experience genuine support and empathy from someone who truly cares.',
    },
    {
      icon: '🌈',
      title: 'Inclusivity',
      description: 'All backgrounds, beliefs, and experiences are welcomed and celebrated here.',
    },
    {
      icon: '🎯',
      title: 'Empowerment',
      description: 'Leave feeling empowered, heard, and ready to take positive action.',
    },
    {
      icon: '🕊️',
      title: 'Peace',
      description: 'Find peace and clarity as you navigate your personal journey with support.',
    },
  ];

  const resources = [
    {
      category: 'Mental Wellness',
      items: ['Meditation guides', 'Stress management', 'Self-care practices', 'Mindfulness exercises'],
    },
    {
      category: 'Personal Growth',
      items: ['Goal setting tools', 'Habit building', 'Confidence building', 'Self-discovery'],
    },
    {
      category: 'Community Support',
      items: ['Support groups', 'Peer networks', 'Community events', 'Mentorship'],
    },
    {
      category: 'Professional Resources',
      items: ['Career guidance', 'Skills development', 'Networking', 'Opportunities'],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-sage-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sage-700 to-primary-700 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">The Safe Space</h1>
          <p className="text-xl text-gray-200 max-w-2xl">A welcoming, judgment-free environment dedicated to your wellbeing, growth, and personal development.</p>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-sage-50 to-primary-50 rounded-2xl p-12 border-2 border-sage-300 mb-12">
            <h2 className="text-3xl font-bold text-sage-800 mb-6">Welcome Home</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              This is more than a space—it's a sanctuary. A place where you can be authentically yourself without fear or hesitation. Whether you're navigating challenges, seeking guidance, or celebrating victories, you belong here. You are safe, you are valued, and you are heard.
            </p>
          </div>

          {/* Features Grid */}
          <h2 className="text-3xl font-bold text-sage-800 mb-12">What You'll Find Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300 border-t-4 border-sage-500"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-sage-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y-4 border-sage-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Our Commitment to You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-sage-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-sage-800 mb-4">Always Available</h3>
              <p className="text-gray-700 leading-relaxed">
                I am here for you when you need support, guidance, or someone to listen. Your wellbeing is my priority, and I'm committed to being available and responsive.
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Completely Confidential</h3>
              <p className="text-gray-700 leading-relaxed">
                Everything you share is held in strict confidence. Your privacy is protected, and your trust is honored above all else.
              </p>
            </div>

            <div className="bg-accent-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-accent-800 mb-4">Judgment-Free Zone</h3>
              <p className="text-gray-700 leading-relaxed">
                This is a space without judgment. Share your struggles, fears, and doubts freely. You will be met with understanding and compassion.
              </p>
            </div>

            <div className="bg-secondary-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">Your Pace, Your Journey</h3>
              <p className="text-gray-700 leading-relaxed">
                Growth happens at your own pace. There's no rush, no pressure. I'll support you wherever you are in your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Available Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 border-l-4 border-sage-600 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-sage-800 mb-6">{resource.category}</h3>
                <ul className="space-y-3">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-sage-600"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sage-600 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Reach out today. Let's create a plan that works for you and your unique needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-sage-700 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Connect With Me
          </a>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sage-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Voices from Our Community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', text: 'This safe space changed my perspective. I feel heard and supported in ways I never experienced before.' },
              { name: 'James K.', text: 'Finding authentic mentorship here was transformative. I\'ve grown more in the past year than I ever thought possible.' },
              { name: 'Maria L.', text: 'The non-judgmental environment allowed me to be truly myself. That freedom has been invaluable to my growth.' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 border-b-4 border-sage-500">
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-sage-800">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
