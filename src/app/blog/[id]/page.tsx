"use client";
import Image from "next/image";

export default function BlogPost({ params }: { params: { id: string } }) {
  // Only one blog post, so static content for now
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-8 bg-white rounded-2xl shadow-lg mt-10 mb-10 animate-fadeIn">
      <div className="flex flex-col items-center mb-8">
        <Image src="/masterguide-thumbnail.jpg" alt="Master Guide Emblem" width={320} height={320} className="rounded-xl shadow-md object-cover mb-6" />
        <h1 className="text-4xl font-extrabold text-secondary-800 mb-2 text-center">The Role of a Master Guide in the SDA Church</h1>
        <p className="text-secondary-600 text-lg font-medium mb-2">February 7, 2026 • Leadership</p>
      </div>
      <div className="prose prose-lg max-w-none text-gray-800">
        <p className="mb-6">The <span className="font-semibold text-secondary-700">Master Guide</span> is one of the highest leadership roles within the youth ministries of the <span className="font-semibold text-secondary-700">Seventh-day Adventist (SDA) Church</span>. A Master Guide serves as a mentor, spiritual leader, and role model, helping young people grow in faith, character, and service to others.</p>
        <h2 className="text-2xl font-bold text-secondary-700 mt-8 mb-4">Spiritual Leadership</h2>
        <p className="mb-4">At the core of the Master Guide ministry is spiritual leadership. Master Guides are committed Christians who guide young people to develop a personal relationship with God. Through Bible study, prayer, and active church involvement, they encourage youth to live according to Christian values in their daily lives.</p>
        <h2 className="text-2xl font-bold text-secondary-700 mt-8 mb-4">Mentorship & Life Skills</h2>
        <p className="mb-4">Another important role of a Master Guide is mentorship. They support Pathfinders, Adventurers, and other youth members by helping them build life skills, discipline, teamwork, and leadership abilities. By organizing activities such as camping, community service, and training programs, Master Guides help young people grow physically, socially, and spiritually.</p>
        <h2 className="text-2xl font-bold text-secondary-700 mt-8 mb-4">Service to the Community</h2>
        <p className="mb-4">Service to the community is also a key responsibility. Master Guides lead by example in outreach programs, helping communities through charity work, environmental activities, and support for those in need. This service reflects Christ’s love in practical ways.</p>
        <div className="bg-secondary-50 border-l-4 border-secondary-600 p-6 my-8 rounded-xl shadow-sm">
          <p className="text-lg font-semibold text-secondary-800 mb-2">In summary:</p>
          <p className="text-gray-700">A Master Guide is not just a title but a lifelong commitment to leadership, service, and spiritual growth. Through dedication and example, Master Guides inspire young people to become responsible, faithful, and service-oriented individuals.</p>
        </div>
      </div>
      {/* Like and Comment section */}
      <div className="mt-12 border-t pt-8">
        <div className="flex items-center gap-6 mb-6">
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary-100 hover:bg-secondary-200 text-secondary-700 rounded-full font-semibold transition">
            <span role="img" aria-label="like">👍</span> Like
          </button>
          <span className="text-gray-500">0 Likes</span>
        </div>
        <div>
          <h2 className="text-xl font-bold text-secondary-800 mb-4">Comments</h2>
          <form className="mb-6">
            <textarea className="w-full border rounded p-3 mb-2" placeholder="Add a comment..." rows={3}></textarea>
            <button type="submit" className="bg-primary-600 text-white px-6 py-2 rounded font-semibold hover:bg-primary-700 transition">Submit</button>
          </form>
          {/* Comments list placeholder */}
          <div className="space-y-4">
            <div className="bg-gray-50 border rounded p-3 text-gray-700">No comments yet. Be the first to comment!</div>
          </div>
        </div>
      </div>
    </div>
  );
}
