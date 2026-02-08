"use client";
import { useState } from 'react';

export default function BlogPost({ params }: { params: { id: string } }) {
  // Placeholder: Fetch blog post by id
  // Add comment and like functionality here
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Blog Post Title</h1>
      <p className="mb-6">Blog post content goes here...</p>
      <div className="mb-6">
        <button className="mr-4 bg-secondary-600 text-white px-4 py-2 rounded">Like</button>
        <span>0 Likes</span>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Comments</h2>
        {/* Comments will be listed here */}
        <form>
          <textarea className="w-full border rounded p-2 mb-2" placeholder="Add a comment..."></textarea>
          <button className="bg-primary-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
}
