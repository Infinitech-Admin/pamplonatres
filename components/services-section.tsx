"use client"

import { motion } from "framer-motion"
import {
  Search,
  FileText,
  Building,
  Heart,
  Users,
  TrendingUp,
  Award,
  MapPin,
  Baby,
  Briefcase,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { authClient } from "@/lib/auth"
import { useRouter } from "next/navigation"

const services = [
  {
    id: 1,
    icon: FileText,
    name: "Barangay Clearance",
    description: "Get barangay clearance",
    category: "Public Safety",
  },
  {
    id: 2,
    icon: FileText,
    name: "Cedula",
    description: "Community tax certificate",
    category: "Government Services",
  },
  {
    id: 3,
    icon: Building,
    name: "Business Permit",
    description: "Apply for business permits",
    category: "Government Services",
  },
  {
    id: 4,
    icon: Building,
    name: "Building Permit",
    description: "Construction permits",
    category: "Government Services",
  },
  {
    id: 5,
    icon: Heart,
    name: "Marriage License",
    description: "Apply for marriage license",
    category: "Government Services",
  },
  {
    id: 6,
    icon: Heart,
    name: "Health Certificate",
    description: "Medical clearance",
    category: "Health Services",
  },
  {
    id: 7,
    icon: Heart,
    name: "Medical Assistance",
    description: "Request medical aid",
    category: "Health Services",
  },
  {
    id: 8,
    icon: Users,
    name: "Police Clearance",
    description: "Request police clearance",
    category: "Public Safety",
  },
  {
    id: 9,
    icon: MapPin,
    name: "Fire Safety Inspection",
    description: "Schedule inspection",
    category: "Public Safety",
  },

  // ✅ Newly added services
  {
    id: 10,
    icon: FileText,
    name: "Certificate of Indigency",
    description: "Financial assistance qualification certificate",
    category: "Social Services",
  },
  {
    id: 11,
    icon: Users,
    name: "Residency Certificate",
    description: "Proof of residency certification",
    category: "Government Services",
  },
  {
    id: 12,
    icon: TrendingUp,
    name: "Good Moral Certificate",
    description: "Certificate of good moral character",
    category: "Government Services",
  },
  {
    id: 13,
    icon: MapPin,
    name: "Barangay Blotter",
    description: "Report and record incidents",
    category: "Public Safety",
  },
]

const stats = [
  { label: "Active Services", value: "7+", icon: FileText },
  { label: "Residents Served", value: "18,500+", icon: Users },
  { label: "Requests Processed", value: "5,000+", icon: TrendingUp },
]

export default function ServicesSection() {
  const [searchTerm, setSearchTerm] = useState("")
const router = useRouter()
  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleServiceAccess = async () => {
    const authenticated = await authClient.checkAuth()

    if (authenticated) {
      router.push("/dashboard/citizen/services")
    } else {
      router.push("/login?callbackUrl=/dashboard/citizen/services")
    }
  }

  return (
    <>
      {/* Services Grid */}
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
                Available Services
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded-full mx-auto mb-4" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              Quick access to essential barangay services and documentation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-orange-300 hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-orange-500 to-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:via-orange-600 group-hover:to-green-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <button
                    onClick={handleServiceAccess}
                    className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white font-semibold hover:opacity-90 transition"
                  >
                    Apply
                  </button>
                </motion.div>
              )
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 via-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Search className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-green-600 bg-clip-text text-transparent mb-3">
                No Services Found
              </h3>
              <p className="text-gray-600 text-lg">
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-green-50" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
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
                  <div className="text-gray-700 font-semibold text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

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
              Need Assistance?
            </h2>
            <p className="text-xl text-white/95 max-w-2xl mx-auto font-medium drop-shadow-md">
              Our team is ready to help you with any questions about our
              services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-orange-600 font-bold rounded-full shadow-2xl hover:shadow-white/20 transition-all text-lg"
                >
                  Contact Us
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
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
