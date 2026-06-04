import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import PageLayout from '../components/PageLayout'
import { posts } from '../data/blog'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <PageLayout>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-3xl font-black text-white mb-4">Article not found</h1>
          <p className="text-white/50 mb-8">The article you're looking for doesn't exist or may have been moved.</p>
          <Link to="/blog" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ color: post.color, backgroundColor: `${post.color}15` }}
            >
              {post.tag}
            </span>
            <div className="flex items-center gap-1 text-xs text-white/30">
              <Clock size={10} />
              {post.readTime}
            </div>
            <div className="flex items-center gap-1 text-xs text-white/30">
              <Calendar size={10} />
              {post.date}
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-base text-white/50 leading-relaxed mb-8 border-l-2 pl-4" style={{ borderColor: post.color }}>
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 pb-8 mb-10 border-b border-white/[0.06]">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
              style={{ backgroundColor: `${post.color}20`, color: post.color }}
            >
              {post.author.split(' ').map((n) => n[0]).join('')}
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{post.author}</div>
              <div className="text-xs text-white/40">{post.authorRole}</div>
            </div>
          </div>
        </motion.div>

        {/* Article body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {post.content.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="text-lg font-bold text-white mb-3">{section.heading}</h2>
              )}
              <p className="text-sm text-white/60 leading-[1.85]">{section.body}</p>
            </div>
          ))}
        </motion.div>

        {/* Footer nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/[0.06] flex items-center justify-between"
        >
          <Link to="/blog" className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
            <ArrowLeft size={14} /> All articles
          </Link>
          <span className="text-xs text-white/25">{post.date}</span>
        </motion.div>
      </div>
    </PageLayout>
  )
}
