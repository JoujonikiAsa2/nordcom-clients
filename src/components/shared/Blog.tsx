import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import blogImg1 from '@/assets/blogTechnologies.jpg'
import blogImg2 from '@/assets/blogMobile.png'
import avator from '@/assets/avator.png'

// Demo blog data
const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Tech Gadgets for 2025',
    excerpt: 'Discover the latest innovative gadgets that are revolutionizing the tech world...',
    category: 'Technology',
    date: 'May 25, 2025',
    readTime: '5 min read',
    image: blogImg1,
    author: {
      name: 'John Smith',
      avatar: avator
    }
  },
  {
    id: 2,
    title: 'Smart Home Essentials Guide',
    excerpt: 'Transform your home into a connected haven with these must-have devices...',
    category: 'Smart Home',
    date: 'May 23, 2025',
    readTime: '4 min read',
    image: blogImg2,
    author: {
      name: 'Sarah Johnson',
      avatar: avator
    }
  },
  {
    id: 3,
    title: 'Future of Mobile Computing',
    excerpt: 'Exploring upcoming trends in mobile technology and what to expect...',
    category: 'Mobile',
    date: 'May 20, 2025',
    readTime: '6 min read',
    image: blogImg1,
    author: {
      name: 'Mike Chen',
      avatar: avator
    }
  }
]

const Blog = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest from Our Blog</h2>
          <p className="mt-4 text-lg text-gray-600">Stay updated with the latest tech trends and news</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <Link href={`/blog`} className="block">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-sm text-gray-600">{post.author.name}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-orange-500 font-medium text-sm hover:text-orange-600">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog