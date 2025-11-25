"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Users, Zap, Clock, X, Calendar, User, FileText, Building, Heart, TrendingUp } from "lucide-react"

interface NewsArticle {
  id: number
  title: string
  content: string
  category: string
  image?: string
  status: string
  published_at?: string
  created_at: string
  author?: {
    id: number
    name: string
    email: string
  }
}

export default function Home() {
  const [news, setNews] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/news/published?per_page=3")
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        
        if (result.success) {
          let newsData: NewsArticle[] = []
          
          if (result.data && typeof result.data === 'object') {
            if (Array.isArray(result.data.data)) {
              newsData = result.data.data
            } else if (Array.isArray(result.data)) {
              newsData = result.data
            }
          }
          
          setNews(newsData)
        } else {
          throw new Error(result.message || 'Failed to fetch news')
        }
      } catch (error) {
        console.error("[Home] Failed to fetch news:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [selectedArticle])

  const stats = [
    { label: "Community Members", value: "18,500+", icon: Users },
    { label: "Services Offered", value: "25+", icon: Zap },
    { label: "Requests Processed", value: "5,000+", icon: Clock },
  ]

  const services = [
    { name: "Barangay Clearance", description: "Apply for barangay clearance", icon: FileText },
    { name: "Cedula", description: "Community tax certificate", icon: FileText },
    { name: "Business Permit", description: "Business permit assistance", icon: Building },
    { name: "Indigency Certificate", description: "Certificate of indigency", icon: Heart },
    { name: "Residency Certificate", description: "Proof of residency", icon: Users },
    { name: "Good Moral", description: "Certificate of good moral", icon: TrendingUp },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const getCategoryLabel = (category: string) => {
    const categoryMap: Record<string, string> = {
      announcement: "Announcement",
      event: "Event",
      alert: "Alert",
      update: "Update",
      news: "News",
    }
    return categoryMap[category?.toLowerCase()] || "Update"
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-20 pb-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Pamploma_logo.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-800/90 via-orange-700/90 to-green-800/90" />

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-24 h-1 bg-white rounded-full mx-auto mb-8"
            />
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance drop-shadow-lg">
              Welcome to Barangay Pamplona Tres
            </h1>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-32 h-1 bg-white/80 rounded-full mx-auto mb-8"
            />
            
            <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto text-balance font-medium drop-shadow-md">
              Your trusted partner in community services and governance in Las Piñas City
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-orange-600 font-bold rounded-full shadow-2xl hover:shadow-white/20 transition-all text-lg"
                >
                  Explore Services
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-full hover:bg-white/20 transition-all text-lg"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-16 md:h-24"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0L60 8.33333C120 16.6667 240 33.3333 360 41.6667C480 50 600 50 720 41.6667C840 33.3333 960 16.6667 1080 16.6667C1200 16.6667 1320 33.3333 1380 41.6667L1440 50V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-orange-300 text-center hover:shadow-2xl transition-all group"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-5 bg-gradient-to-br from-red-500 via-orange-500 to-green-500 rounded-full shadow-xl group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-green-600 bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </div>
                  <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-green-50" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-green-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded-full mx-auto mb-4" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              Quick access to essential barangay services and documentation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-orange-300 hover:shadow-2xl transition-all group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-orange-500 to-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:via-orange-600 group-hover:to-green-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-red-600 via-orange-600 to-green-600 text-white font-bold inline-flex items-center gap-3 shadow-2xl hover:shadow-orange-500/50 transition-all text-lg"
              >
                View All Services <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-green-600 bg-clip-text text-transparent">
                Latest Updates
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded-full mx-auto mb-4" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              Stay informed with recent news and announcements from our barangay
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-gradient-to-br from-red-200 via-orange-200 to-green-200 animate-pulse h-96"
                />
              ))}
            </div>
          ) : news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {news.slice(0, 3).map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  onClick={() => setSelectedArticle(item)}
                  className="group rounded-3xl bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-gray-100 hover:border-orange-300"
                >
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-red-100 via-orange-100 to-green-100">
                    {item.image ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL || ""}/${item.image}`}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-500 via-orange-500 to-green-500 text-white text-6xl">
                        📰
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 rounded-full text-xs font-bold uppercase bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white shadow-lg">
                        {getCategoryLabel(item.category)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-3 flex items-center gap-2 font-medium">
                      <Clock className="w-4 h-4" />
                      {item.published_at ? formatDate(item.published_at) : formatDate(item.created_at)}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:via-orange-600 group-hover:to-green-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 leading-relaxed mb-4">
                      {item.content.substring(0, 120)}...
                    </p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-red-600 via-orange-600 to-green-600 bg-clip-text text-transparent"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 text-orange-500" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No news available at the moment.</p>
            </div>
          )}

          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/news">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-red-600 via-orange-600 to-green-600 text-white font-bold inline-flex items-center gap-3 shadow-2xl hover:shadow-orange-500/50 transition-all text-lg"
              >
                View All News <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
            >
              <div className="relative h-72 md:h-96 overflow-hidden">
                {selectedArticle.image ? (
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL || ""}/${selectedArticle.image}`}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-red-500 via-orange-500 to-green-500 flex items-center justify-center text-white text-8xl">
                    📰
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl hover:bg-white transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </motion.button>

                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold uppercase bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white shadow-xl">
                    {getCategoryLabel(selectedArticle.category)}
                  </span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-8 md:p-10">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-green-600 bg-clip-text text-transparent leading-tight">
                    {selectedArticle.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-6 pb-6 border-b-2 border-gray-200">
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-100 via-orange-100 to-green-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-orange-600" />
                      </div>
                      <span className="font-medium">
                        {selectedArticle.published_at ? formatDate(selectedArticle.published_at) : formatDate(selectedArticle.created_at)}
                      </span>
                    </div>
                    
                    {selectedArticle.author && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-100 via-orange-100 to-green-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-orange-600" />
                        </div>
                        <span className="font-medium">By {selectedArticle.author.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                      {selectedArticle.content}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 px-8 md:px-10 py-6 bg-gradient-to-r from-red-50 via-orange-50 to-green-50">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedArticle(null)}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 via-orange-600 to-green-600 text-white rounded-full hover:shadow-2xl transition-all font-bold text-lg"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 via-orange-600 to-green-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/95 max-w-2xl mx-auto font-medium drop-shadow-md">
              Join thousands of residents using our platform to access services and stay connected with our community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-orange-600 font-bold rounded-full shadow-2xl hover:shadow-white/20 transition-all text-lg"
                >
                  Sign Up Today
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-full hover:bg-white/20 transition-all text-lg"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}