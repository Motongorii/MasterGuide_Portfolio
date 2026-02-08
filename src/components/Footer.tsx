'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent-300">About</h3>
            <div className="flex items-center gap-4 mb-3">
              <img src="/profile.jpeg" alt="Anthony Motongori" className="w-12 h-12 rounded-full border-2 border-accent-300 object-cover" />
              <span className="text-gray-300 font-semibold">Anthony Motongori</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
                Master Guide, Mentor, and Community Leader based in Nairobi, Kenya.<br />
                Email: antomotongori@gmail.com<br />
                Phone: +254119397068<br />
                Dedicated to excellence, growth, and community support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent-300">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-accent-300 transition-colors">Home</a></li>
              <li><a href="/profile" className="text-gray-300 hover:text-accent-300 transition-colors">Profile</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-accent-300 transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-accent-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent-300">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-accent-300 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.278-1.387-2.278-1.389 0-1.601 1.084-1.601 2.205v4.251h-2.666V9.309h2.561v1.116h.036c.357-.675 1.227-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.309zM5.337 8.855c-.794 0-1.432-.635-1.432-1.418s.638-1.418 1.432-1.418c.794 0 1.433.635 1.433 1.418s-.639 1.418-1.433 1.418zm1.201 7.483H4.136V9.309h2.402v6.029zM17.988 3H2.012C.92 3 0 3.906 0 5v10c0 1.094.92 2 2.012 2h15.976C18.08 17 19 16.094 19 15V5c0-1.094-.92-2-2.012-2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-300 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-300 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10a10 10 0 11-20 0 10 10 0 0120 0zm-4.5-6.5h1.5V3h-1.5a4.5 4.5 0 00-4.5 4.5v1.5H9v2h2v5h2v-5h2v-2h-2v-1.5a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} Master Guide Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
