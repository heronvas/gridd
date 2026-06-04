import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { posts } from '../data/blog'

export default function Blog() {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-pink-400 bg-pink-500/10 border border-pink-500/20 mb-4">Blog</span>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">
            Ideas, insights,{' '}
            <span className="text-gradient">deep dives</span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Stories, research, and practical guides from the team building the future of multi-agent AI.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.08 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="glass rounded-2xl p-6 border border-white/[0.06] group hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full block"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ color: post.color, backgroundColor: `${post.color}15` }}>
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-1 text-white/30 text-xs">
                    <Clock size={10} />
                    {post.readTime}
                  </div>
                </div>
                <h2 className="text-sm font-bold text-white leading-snug mb-3 flex-1">{post.title}</h2>
                <p className="text-xs text-white/40 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/[0.05]">
                  <span className="text-[11px] text-white/30">{post.date}</span>
                  <span className="flex items-center gap-1 text-xs text-indigo-400 group-hover:gap-2 transition-all">
                    Read <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
