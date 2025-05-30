import Image from 'next/image'
import blogImg1 from '@/assets/blogTechnologies.jpg'
import avator from '@/assets/avator.png'
import Link from 'next/link'
import { Share2, BookmarkPlus, ThumbsUp } from 'lucide-react'

const BlogDetails = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-orange-500">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Tech Gadgets</span>
          </nav>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Top 10 Tech Gadgets That Will Define 2025
          </h1>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Image 
                src={avator} 
                alt="John Smith" 
                width={40} 
                height={40} 
                className="rounded-full ring-2 ring-gray-100"
              />
              <div>
                <p className="font-medium text-gray-900">John Smith</p>
                <p className="text-gray-500 text-sm">Senior Tech Editor</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-gray-500">
              <span>May 25, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] w-full mb-10 rounded-xl overflow-hidden">
          <Image 
            src={blogImg1} 
            alt="Blog Cover" 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* Social Share Bar */}
        <div className="flex items-center justify-between mb-8 py-4 border-y">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-500 hover:text-orange-500">
              <ThumbsUp className="w-5 h-5" />
              <span>247</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-orange-500">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
          <button className="flex items-center gap-2 text-gray-500 hover:text-orange-500">
            <BookmarkPlus className="w-5 h-5" />
            <span>Save</span>
          </button>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="lead">
            The world of technology never slows down. As we approach 2025, we are witnessing an unprecedented 
            wave of innovation thats reshaping our digital landscape. From groundbreaking AI implementations 
            to revolutionary hardware, heres our curated list of the most impressive tech gadgets that are 
            set to define the year ahead.
          </p>
          <br></br>

          <h2>1. Foldable Smart Glasses</h2>
          <p>
            Combining AR capabilities with a revolutionary foldable design, these smart glasses are changing 
            how we interact with digital information. Features include 8K resolution per eye, 5G connectivity, 
            and all-day battery life.
          </p>
   <br></br>
          <h2>2. Neural Interface Headsets</h2>
          <p>
            These non-invasive headsets can interpret brain signals with unprecedented accuracy, opening new 
            possibilities for human-computer interaction and accessibility solutions.
          </p>

          {/* Add more sections for each gadget... */}
   <br></br>
          <h2>Looking Ahead</h2>
          <p>
            These innovations represent just the tip of the iceberg. As technology continues to evolve at an 
            unprecedented pace, we can expect even more groundbreaking developments in the months to come.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Technology</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Gadgets</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Innovation</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">2025</span>
          </div>
        </article>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-4 mb-4">
            <Image 
              src={avator} 
              alt="John Smith" 
              width={64} 
              height={64} 
              className="rounded-full ring-2 ring-white"
            />
            <div>
              <h3 className="font-bold text-lg">John Smith</h3>
              <p className="text-gray-600">Senior Tech Editor at Nordcom</p>
            </div>
          </div>
          <p className="text-gray-600">
            John has been covering technology and consumer electronics for over a decade. 
            He specializes in emerging technologies and their impact on everyday life.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BlogDetails