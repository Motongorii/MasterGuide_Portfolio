"use client";

export default function AdminPanel() {
  // Placeholder: Admin panel UI for adding blog posts
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <form>
        <input className="w-full border rounded p-2 mb-2" placeholder="Blog Title" />
        <textarea className="w-full border rounded p-2 mb-2" placeholder="Blog Content" />
        <input className="w-full border rounded p-2 mb-2" placeholder="Category" />
        <button className="bg-secondary-600 text-white px-4 py-2 rounded">Add Blog Post</button>
      </form>
      {/* List of blog posts for editing/deleting can be shown here */}
    </div>
  );
}
