"use client"

import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  FileText,
  Building,
  UserPlus,
  ShieldAlert,
  Siren,
  ChevronDown,
  Users,
  TrendingUp,
  Layers,
  GraduationCap,
  Award,
  Wallet,
  IdCard,
  BookOpen,
  Briefcase,
  Wrench,
  Dumbbell,
  Palette,
  Rocket,
  ClipboardList,
  Building2,
  BarChart3,
  Handshake,
  Heart,
  MapPin,
  Clock,
  AlertCircle,
  DollarSign,
  Shield,
  CheckCircle2,
  Flame,
  AlertTriangle,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const guides = [
  {
    id: 1,
    icon: UserPlus,
    name: "How to Register",
    description: "Learn how to register as a citizen and access all services.",
    category: "Getting Started",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          To register as a citizen of Pamploma Tres City and access all online services, follow these simple steps:
        </p>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Step 1: Visit the Registration Page</h4>
            <p className="text-sm text-gray-600">Go to the Account section and click on Register or Sign Up.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Step 2: Provide Personal Information</h4>
            <p className="text-sm text-gray-600">
              Fill in your full name, email address, contact number, and complete address. Make sure all information
              is accurate.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Step 3: Set Your Password</h4>
            <p className="text-sm text-gray-600">
              Create a strong password (minimum 8 characters) and confirm it. Use a mix of uppercase, lowercase,
              numbers, and symbols for better security.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Step 4: Complete Your Profile</h4>
            <p className="text-sm text-gray-600">
              Upload a valid government-issued ID (Voters ID.) and a clear selfie photo. Files must be in PNG, JPG,
              or GIF format and not exceed 5MB.
            </p>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 mt-4">
          <p className="text-sm text-orange-800">
            <strong>Note:</strong> Once registered, you can access all online services including permit
            applications, document requests, and more.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    icon: Building,
    name: "Business Permit Application",
    description: "Step-by-step guide to apply for a business permit.",
    category: "Government Services",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Applying for a business permit in Pamploma Tres City is now easier with our online application system.
        </p>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>DTI Registration (for sole proprietorship) or SEC Registration (for corporation)</li>
              <li>Barangay Business Clearance</li>
              <li>Community Tax Certificate (Cedula)</li>
              <li>Fire Safety Inspection Certificate</li>
              <li>Sanitary Permit (for food establishments)</li>
              <li>Contract of Lease or Proof of Ownership</li>
              <li>Valid ID of the business owner</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Application Process</h4>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
              <li>Complete the online application form</li>
              <li>Upload required documents</li>
              <li>Pay the application fee</li>
              <li>Wait for assessment (3-5 business days)</li>
              <li>Receive notification for permit release</li>
            </ol>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Processing Time</h4>
            <p className="text-sm text-gray-600">
              New applications: 5-7 business days
              <br />
              Renewal applications: 3-5 business days
            </p>
          </div>
        </div>
        <Link href="/dashboard/citizen/services/business-permit">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white font-semibold hover:opacity-90 transition mt-4">
            Apply for Business Permit
          </button>
        </Link>
      </div>
    ),
  },
  {
    id: 3,
    icon: Building,
    name: "Building Permit Process",
    description: "Requirements and procedures for obtaining a building permit.",
    category: "Government Services",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          A building permit is required for any construction, renovation, or structural modification in Pamploma
          Tres City.
        </p>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Required Documents</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Building Plans (signed and sealed by a licensed architect/engineer)</li>
              <li>Land Title or Tax Declaration</li>
              <li>Barangay Clearance</li>
              <li>Locational Clearance</li>
              <li>Structural Analysis (for buildings over 2 stories)</li>
              <li>Fire Safety Evaluation Clearance</li>
              <li>Environmental Compliance Certificate (if applicable)</li>
              <li>Valid ID of property owner</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Types of Building Permits</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li><strong>New Construction:</strong> For building new structures</li>
              <li><strong>Renovation:</strong> For major repairs or modifications</li>
              <li><strong>Addition:</strong> For expanding existing structures</li>
              <li><strong>Repair:</strong> For minor structural repairs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Processing Timeline</h4>
            <p className="text-sm text-gray-600">
              Simple structures (1-2 floors): 7-10 business days
              <br />
              Complex structures (3+ floors): 15-20 business days
            </p>
          </div>
        </div>
        <Link href="/dashboard/citizen/services/building-permit">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white font-semibold hover:opacity-90 transition mt-4">
            Apply for Building Permit
          </button>
        </Link>
      </div>
    ),
  },
  {
    id: 4,
    icon: FileText,
    name: "Community Tax Certificate",
    description: "How to get your Cedula (Community Tax Certificate).",
    category: "Government Services",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          The Community Tax Certificate (Cedula) is a basic tax document required for various transactions in the
          Philippines.
        </p>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Who Needs a Cedula?</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>All Filipino citizens 18 years old and above</li>
              <li>Individuals engaging in business or profession</li>
              <li>Anyone requiring it for government transactions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Valid government-issued ID</li>
              <li>Proof of income (for employed individuals)</li>
              <li>Proof of business registration (for business owners)</li>
              <li>Proof of residency in Pamploma Tres City</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Tax Rates</h4>
            <p className="text-sm text-gray-600">
              Basic Community Tax: ₱5.00
              <br />
              Additional tax based on income/property value
              <br />
              Maximum amount: ₱5,000.00
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Validity</h4>
            <p className="text-sm text-gray-600">
              Valid for one calendar year (January 1 to December 31)
              <br />
              Must be renewed annually
            </p>
          </div>
        </div>
        <Link href="/dashboard/citizen/services/cedula">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white font-semibold hover:opacity-90 transition mt-4">
            Apply for Cedula
          </button>
        </Link>
      </div>
    ),
  },
  {
    id: 5,
    icon: Siren,
    name: "Emergency Hotlines",
    description: "Important contact numbers for police, fire, and medical emergencies.",
    category: "Emergency Procedures",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Keep these emergency numbers handy. In case of emergency, stay calm and provide clear information about
          your location and situation.
        </p>
        <div className="space-y-3">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <h4 className="font-semibold text-red-900 mb-2">National Emergency Hotline</h4>
            <p className="text-2xl font-bold text-red-600">911</p>
            <p className="text-sm text-red-700 mt-1">For all types of emergencies</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Pamploma Tres City Police Station</h4>
            <p className="text-lg font-semibold text-gray-700">(043) 288-2222</p>
            <p className="text-sm text-gray-600">Available 24/7</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Pamploma Tres Fire Station</h4>
            <p className="text-lg font-semibold text-gray-700">(043) 288-3333</p>
            <p className="text-sm text-gray-600">Fire emergencies and rescue operations</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Pamploma Tres City Hospital</h4>
            <p className="text-lg font-semibold text-gray-700">(043) 288-4444</p>
            <p className="text-sm text-gray-600">Medical emergencies and ambulance services</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Disaster Risk Reduction Office</h4>
            <p className="text-lg font-semibold text-gray-700">(043) 288-5555</p>
            <p className="text-sm text-gray-600">Natural disasters and evacuation assistance</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Red Cross Pamploma Tres</h4>
            <p className="text-lg font-semibold text-gray-700">(043) 288-6666</p>
            <p className="text-sm text-gray-600">Emergency medical services and blood bank</p>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 mt-4">
          <p className="text-sm text-orange-800">
            <strong>Tip:</strong> Save these numbers in your phone contacts for quick access during emergencies.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    icon: ShieldAlert,
    name: "Disaster Preparedness",
    description: "What to do before, during, and after natural disasters.",
    category: "Emergency Procedures",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Pamploma Tres City is prone to typhoons, floods, and earthquakes. Being prepared can save lives.
        </p>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Before a Disaster</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Prepare an emergency kit (food, water, first aid, flashlight, radio, batteries)</li>
              <li>Know your evacuation routes and nearest evacuation center</li>
              <li>Keep important documents in waterproof containers</li>
              <li>Charge all electronic devices and power banks</li>
              <li>Store enough food and water for at least 3 days</li>
              <li>Secure loose objects that could become projectiles</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">During a Typhoon/Flood</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Stay indoors and away from windows</li>
              <li>Monitor weather updates via radio or mobile phone</li>
              <li>Evacuate immediately if ordered by authorities</li>
              <li>Never walk or drive through flooded areas</li>
              <li>Turn off electricity and gas if flooding is imminent</li>
              <li>Move to higher ground if water starts rising</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">During an Earthquake</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>DROP, COVER, and HOLD ON</li>
              <li>Stay away from windows, mirrors, and heavy objects</li>
              <li>If outdoors, move to an open area away from buildings</li>
              <li>If in a vehicle, stop safely and stay inside</li>
              <li>Do not use elevators</li>
              <li>Be prepared for aftershocks</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">After a Disaster</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Check yourself and others for injuries</li>
              <li>Inspect your home for damage before entering</li>
              <li>Avoid damaged buildings and power lines</li>
              <li>Boil water before drinking if water supply is compromised</li>
              <li>Document damage for insurance claims</li>
              <li>Follow instructions from local authorities</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Evacuation Centers in Pamploma Tres</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Pamploma Tres City Sports Complex</li>
              <li>Pamploma Tres National High School</li>
              <li>Various Barangay Halls (check with your barangay)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    icon: GraduationCap,
    name: "City Scholarship Program",
    description: "Apply for city-funded scholarships.",
    category: "Scholarships",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          The City Scholarship Program supports Pamploma Tres students with funding assistance for their studies.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Valid Student ID",
              "Certificate of Enrollment",
              "Proof of Residency (Barangay Certificate)",
              "Income Tax Return or Certificate of Indigency",
              "Grade Report (for renewal)",
              "Birth Certificate (PSA)",
              "2x2 ID Photo (2 copies)",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    icon: Award,
    name: "Merit Scholarship",
    description: "For outstanding students.",
    category: "Scholarships",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          The Merit Scholarship recognizes and supports students with outstanding academic performance.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Academic Excellence Certificate",
              "Certificate of Enrollment",
              "Transcript of Records",
              "Proof of Residency",
              "Recommendation Letter from School",
              "Birth Certificate (PSA)",
              "2x2 ID Photo (2 copies)",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    icon: Wallet,
    name: "Financial Assistance",
    description: "Educational financial aid.",
    category: "Scholarships",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Financial Assistance helps students from low-income households cover the cost of their education.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Certificate of Indigency",
              "Certificate of Enrollment",
              "Proof of Residency",
              "Income Documents of Parents/Guardians",
              "Birth Certificate (PSA)",
              "Valid ID of Parent/Guardian",
              "2x2 ID Photo (2 copies)",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    icon: IdCard,
    name: "Student ID Application",
    description: "Get your student ID.",
    category: "Student Services",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Apply for an official city Student ID to access student discounts and services.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Certificate of Enrollment",
              "Proof of Residency",
              "Birth Certificate (PSA)",
              "2x2 ID Photo (2 copies)",
              "Valid School ID",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    icon: BookOpen,
    name: "Library Card",
    description: "Access city library resources.",
    category: "Student Services",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          A Library Card gives you access to books, study spaces, and digital resources at the city library.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Valid Student ID or School ID",
              "Proof of Residency",
              "1x1 ID Photo (1 copy)",
              "Parent/Guardian Consent (for minors)",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 12,
    icon: Briefcase,
    name: "Internship Programs",
    description: "City government internships.",
    category: "Student Services",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Gain hands-on experience through internship placements within Pamploma Tres city government offices.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Endorsement Letter from School",
              "Certificate of Enrollment",
              "Resume/CV",
              "Transcript of Records",
              "Medical Certificate",
              "Police Clearance",
              "2x2 ID Photo (2 copies)",
              "Valid ID",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 13,
    icon: Wrench,
    name: "Skills Training",
    description: "Free skills development programs.",
    category: "Youth Programs",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Free training programs to help youth build practical, job-ready skills.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Certificate of Enrollment or Student ID",
              "Proof of Residency",
              "Birth Certificate",
              "Parent/Guardian Consent (for minors)",
              "1x1 ID Photo (2 copies)",
              "Medical Certificate (if required)",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 14,
    icon: Dumbbell,
    name: "Sports Programs",
    description: "Youth sports and athletics.",
    category: "Youth Programs",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Join youth sports leagues and athletic programs offered across Pamploma Tres.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Medical Certificate",
              "Proof of Residency",
              "Birth Certificate",
              "Parent/Guardian Consent (for minors)",
              "1x1 ID Photo (2 copies)",
              "School ID or Student ID",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 15,
    icon: Palette,
    name: "Arts & Culture",
    description: "Cultural programs for youth.",
    category: "Youth Programs",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Explore creative and cultural programs designed to nurture youth talent in the arts.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Proof of Residency",
              "Birth Certificate",
              "Parent/Guardian Consent (for minors)",
              "1x1 ID Photo (2 copies)",
              "Portfolio (if applicable)",
              "School ID or Student ID",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 16,
    icon: Rocket,
    name: "Startup Registration",
    description: "Register your startup business.",
    category: "Business Registration",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Register your new business with the city to operate legally in Pamploma Tres.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Valid government-issued ID",
              "Birth certificate (PSA copy)",
              "Business plan or concept paper",
              "Proof of address",
              "TIN (Tax Identification Number)",
              "Community Tax Certificate (Cedula)",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 17,
    icon: Search,
    name: "Business Name Search",
    description: "Check business name availability.",
    category: "Business Registration",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Verify that your proposed business name is available before you register.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Valid government-issued ID",
              "3 proposed business names",
              "Business nature/description",
              "Online application form",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 18,
    icon: ClipboardList,
    name: "DTI Registration",
    description: "Department of Trade registration.",
    category: "Business Registration",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Register your business name with the Department of Trade and Industry (DTI).
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Accomplished DTI application form",
              "Valid government-issued ID",
              "Proof of payment (registration fee)",
              "Business name verification slip",
              "Barangay clearance",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 19,
    icon: Wallet,
    name: "Startup Grants",
    description: "Apply for startup funding.",
    category: "Support Programs",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Funding support for qualified startups looking to scale their business in Pamploma Tres.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Completed grant application form",
              "Detailed business plan (5-year projection)",
              "Financial statements/projections",
              "DTI/SEC registration certificate",
              "Mayor's permit (if applicable)",
              "Tax clearance",
              "Project proposal with budget",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 20,
    icon: Users,
    name: "Mentorship Program",
    description: "Connect with business mentors.",
    category: "Support Programs",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Get paired with experienced business mentors to help guide your startup's growth.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Mentorship application form",
              "Business profile/summary",
              "Valid ID",
              "Business registration documents",
              "Statement of business challenges",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 21,
    icon: Building2,
    name: "Co-working Spaces",
    description: "Access shared workspaces.",
    category: "Support Programs",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Book affordable shared workspace for your team, meetings, and events.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Co-working space application",
              "Valid government-issued ID",
              "Business registration proof",
              "Membership fee payment",
              "Signed facility usage agreement",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 22,
    icon: BookOpen,
    name: "Business Training",
    description: "Free entrepreneurship training.",
    category: "Resources",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Free training sessions covering the fundamentals of running and growing a business.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Training registration form",
              "Valid government-issued ID",
              "Resume or business profile",
              "Commitment letter (for full attendance)",
              "Pre-assessment form",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 23,
    icon: BarChart3,
    name: "Market Research",
    description: "Access market data and insights.",
    category: "Resources",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Request local market data and insights to help inform your business decisions.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Research request form",
              "Valid ID",
              "Business registration documents",
              "Research purpose statement",
              "Data confidentiality agreement",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 24,
    icon: Handshake,
    name: "Networking Events",
    description: "Connect with other entrepreneurs.",
    category: "Resources",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Attend local networking events to meet fellow entrepreneurs and potential partners.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Event registration form",
              "Valid government-issued ID",
              "Business card or profile",
              "Payment (if applicable)",
              "Professional attire",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 25,
    icon: Heart,
    name: "Marriage License",
    description: "How to get a marriage license in the Philippines.",
    category: "Government Services",
    fullContent: (
      <div className="space-y-6 text-left">
        {/* Requirements */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Required Documents (for both parties)</h4>
          <div className="space-y-3">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h5 className="font-medium text-sm mb-1">1. Certified True Copy of Birth Certificate (PSA)</h5>
              <p className="text-sm text-gray-600">Original copy issued by the Philippine Statistics Authority</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h5 className="font-medium text-sm mb-1">2. Valid Government-Issued ID</h5>
              <p className="text-sm text-gray-600">Examples: Passport, Driver's License, UMID, Postal ID, Voter's ID</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h5 className="font-medium text-sm mb-1">3. Certificate of No Marriage (CENOMAR)</h5>
              <p className="text-sm text-gray-600">Also from PSA, proves you are single or not currently married</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h5 className="font-medium text-sm mb-1">4. Barangay Certificate of Residency</h5>
              <p className="text-sm text-gray-600">Proof of residence for at least one month in the city/municipality</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h5 className="font-medium text-sm mb-1">5. Passport-sized Photos</h5>
              <p className="text-sm text-gray-600">2 copies each (4 total) - recent colored photos with white background</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Additional Requirements (if applicable)</h4>
          <div className="space-y-3">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h5 className="font-medium text-sm mb-1">For Widows/Widowers:</h5>
              <p className="text-sm text-gray-600">Death Certificate of deceased spouse</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h5 className="font-medium text-sm mb-1">For Divorced/Annulled:</h5>
              <p className="text-sm text-gray-600">Court decree of divorce or annulment</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h5 className="font-medium text-sm mb-1">For Minors (18-21 years old):</h5>
              <p className="text-sm text-gray-600">Parental consent and parental advice certificate</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h5 className="font-medium text-sm mb-1">For Foreign Nationals:</h5>
              <p className="text-sm text-gray-600">Passport, Certificate of Legal Capacity to Contract Marriage from embassy</p>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <div className="flex gap-2">
            <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-medium text-sm text-orange-900">Where to Apply</h5>
              <p className="text-sm text-orange-800 mt-1">
                Local Civil Registrar's Office of the city or municipality where either party has resided for at
                least one month
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Step-by-Step Process</h4>
          <div className="space-y-3">
            {[
              { title: "Prepare all required documents", text: "Gather all documents listed in the requirements section. Make sure all are original copies." },
              { title: "Visit the Local Civil Registrar's Office", text: "Both parties must appear together. Go to the office during business hours (usually 8am-5pm, Monday-Friday)." },
              { title: "Fill out the Marriage License Application Form", text: "Staff will provide the form. Fill it out completely and accurately." },
              { title: "Submit documents and pay the fee", text: "Submit all required documents along with the application fee." },
              { title: "Attend the marriage counseling seminar", text: "Required by law. Usually conducted by the Local Civil Registrar or authorized personnel." },
              { title: "Marriage license posting", text: "Your application will be posted publicly for 10 consecutive days to allow objections." },
              { title: "Claim your marriage license", text: "After the 10-day posting period, you can claim your marriage license." },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-500 via-orange-500 to-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-sm">{step.title}</h5>
                  <p className="text-sm text-gray-600 mt-1">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <div className="space-y-3">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex gap-2">
              <DollarSign className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-medium text-sm text-green-900">Application Fee</h5>
                <p className="text-sm text-green-800 mt-1">
                  Fees vary by city/municipality, typically ranging from ₱200 to ₱500. Check with your local Civil
                  Registrar's Office for exact amount.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex gap-2">
              <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-medium text-sm text-blue-900">Processing Time</h5>
                <p className="text-sm text-blue-800 mt-1">
                  Minimum of 10 days due to the posting requirement. Total processing may take 2-3 weeks.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <div className="flex gap-2">
              <AlertCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-medium text-sm text-purple-900">Validity Period</h5>
                <p className="text-sm text-purple-800 mt-1">
                  Marriage license is valid for 120 days from date of issuance. You must get married within this
                  period.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Important Reminders</h4>
          <div className="space-y-2">
            {[
              <>Both parties must be <strong>at least 18 years old</strong>. Those aged 18-21 need parental consent.</>,
              <>Both parties must <strong>appear in person together</strong> when applying.</>,
              <>The marriage ceremony can be held <strong>anywhere in the Philippines</strong> once you have the license.</>,
              <>You must have <strong>two witnesses</strong> (of legal age) present during the marriage ceremony.</>,
              <>After the ceremony, your solemnizing officer will register the marriage with the Local Civil Registrar.</>,
              <>You can request a <strong>Marriage Certificate</strong> from PSA after registration (usually available after a few months).</>,
            ].map((text, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-sm text-gray-700">✓ {text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <h5 className="font-medium text-sm text-red-900 mb-1">Grounds for Denial</h5>
          <p className="text-sm text-red-800">
            Your application may be denied if either party is already married, below legal age without consent, or
            if there are valid legal impediments to marriage.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 26,
    icon: Heart,
    name: "Health Certificate",
    description: "Apply for a health certificate for employment, school, travel, or food handling.",
    category: "Health Services",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          A Health Certificate is required for employment, school requirements, travel, and food handling permits.
          You'll fill out your personal and medical history details online, then visit the City Health Office for a
          physical examination.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">What You'll Need</h4>
          <ul className="space-y-1.5">
            {[
              "Full name, contact details, and complete address",
              "Date of birth (age is auto-calculated)",
              "Purpose of the certificate (employment, school, travel, food handling, or other)",
              "Disclosure of any allergies, medications, or existing medical conditions",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
          <p className="text-sm text-orange-800">
            <strong>Note:</strong> You will need to visit the City Health Office for a physical examination.
            Processing time is 1-2 business days after examination.
          </p>
        </div>
        <Link href="/dashboard/citizen/services/health-certificate">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white font-semibold hover:opacity-90 transition mt-2">
            Apply for Health Certificate
          </button>
        </Link>
      </div>
    ),
  },
  {
    id: 27,
    icon: DollarSign,
    name: "Medical Assistance",
    description: "Apply for financial assistance to help cover medical expenses.",
    category: "Health Services",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Medical Assistance provides financial support to residents facing medical expenses they can't fully cover
          on their own. The online application walks you through personal, medical, and financial details before
          submission.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">What You'll Need</h4>
          <ul className="space-y-1.5">
            {[
              "Personal details (name, contact info, complete address)",
              "Diagnosis or medical condition, hospital/clinic name, and doctor's name",
              "Estimated medical cost",
              "Monthly family income and the assistance amount you're requesting",
              "Supporting documents: medical certificates, prescriptions, or hospital bills (PDF, JPG, PNG — max 10MB)",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
          <p className="text-sm text-orange-800">
            <strong>Note:</strong> After submitting, you'll receive a reference number to track your application
            status under your account.
          </p>
        </div>
        <Link href="/dashboard/citizen/services/medical-assistance">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white font-semibold hover:opacity-90 transition mt-2">
            Apply for Medical Assistance
          </button>
        </Link>
      </div>
    ),
  },
  {
    id: 28,
    icon: Shield,
    name: "Police Clearance",
    description: "How to obtain your police clearance certificate.",
    category: "Public Safety",
    fullContent: (
      <div className="space-y-6 text-left">
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <div className="flex gap-2">
            <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-medium text-sm text-orange-900">Important Notice</h5>
              <p className="text-sm text-orange-800 mt-1">
                Police clearance is processed directly by the Philippine National Police (PNP). The City Government
                of Pamploma Tres does not issue police clearance certificates.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">What is Police Clearance?</h4>
          <p className="text-sm text-gray-600 mb-2">
            Police clearance is a document issued by the PNP that certifies an individual has no criminal record.
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Common uses:</strong>
          </p>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• Local employment</li>
            <li>• Business permit applications</li>
            <li>• Visa applications</li>
            <li>• Government transactions</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <h5 className="font-semibold text-sm mb-1">Processing Time</h5>
            <p className="text-sm text-gray-600">Same day to 3 working days</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <h5 className="font-semibold text-sm mb-1">Validity Period</h5>
            <p className="text-sm text-gray-600">6 months to 1 year (depending on purpose)</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-2">
            {[
              "Valid Government-issued ID (original and photocopy)",
              "Barangay Clearance",
              "Community Tax Certificate (Cedula)",
              "2 pieces 2x2 ID photos (white background)",
              "Clearance fee (usually ₱50-₱150)",
            ].map((req, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 bg-orange-50 border border-orange-200 rounded-xl p-3">
            <p className="text-sm text-orange-800">
              <strong>Note:</strong> Requirements may vary. It is best to contact the police station beforehand to
              confirm the complete list of requirements and fees.
            </p>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <div className="flex gap-2">
            <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-medium text-sm text-orange-900">Where to Apply</h5>
              <div className="space-y-1 text-sm text-orange-800 mt-1">
                <p><strong>Address:</strong> Pamploma Tres City Police Station, Oriental Mindoro</p>
                <p><strong>Alternative:</strong> Visit your nearest police station in your barangay</p>
                <p><strong>Office Hours:</strong> Monday to Friday, 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Step-by-Step Process</h4>
          <div className="space-y-3">
            {[
              { title: "Prepare Requirements", text: "Gather all necessary documents (valid ID, barangay clearance, cedula, photos)." },
              { title: "Visit Police Station", text: "Go to Pamploma Tres City Police Station or your barangay police station." },
              { title: "Fill Out Application Form", text: "Complete the police clearance application form provided at the station." },
              { title: "Submit Documents", text: "Submit your requirements to the officer in charge." },
              { title: "Pay the Fee", text: "Pay the clearance fee (usually ₱50-₱150)." },
              { title: "Photo and Fingerprints", text: "Have your photo taken and fingerprints recorded." },
              { title: "Wait for Processing", text: "Processing takes same day to 3 working days depending on the station." },
              { title: "Claim Your Clearance", text: "Return to the police station to claim your police clearance certificate." },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-500 via-orange-500 to-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-sm">{step.title}</h5>
                  <p className="text-sm text-gray-600 mt-1">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="font-semibold text-sm mb-1">Tips:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Visit the police station early in the morning to avoid long queues</li>
            <li>Bring extra photocopies of your documents</li>
            <li>Wear decent clothing for your photo</li>
            <li>Contact the police station beforehand to confirm requirements and fees</li>
            <li>Police clearance validity varies by purpose - check with the requesting party</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 29,
    icon: Flame,
    name: "Fire Safety Inspection",
    description: "How to get your Fire Safety Inspection Certificate (FSIC).",
    category: "Public Safety",
    fullContent: (
      <div className="space-y-6 text-left">
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <div className="flex gap-2">
            <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-medium text-sm text-orange-900">Important Notice</h5>
              <p className="text-sm text-orange-800 mt-1">
                Fire Safety Inspection Certificate (FSIC) is processed directly by the Bureau of Fire Protection
                (BFP). The City Government of Pamploma Tres does not issue FSIC. Please visit the BFP Pamploma Tres
                City Fire Station.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">What is FSIC?</h4>
          <p className="text-sm text-gray-600 mb-2">
            Fire Safety Inspection Certificate is a mandatory requirement for:
          </p>
          <ul className="space-y-2 text-sm">
            {[
              "Business permit renewal",
              "New business establishments",
              "Building occupancy permits",
              "Event permits for large gatherings",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <h5 className="font-semibold text-sm mb-1">Processing Time</h5>
            <p className="text-sm text-gray-600">3-5 working days after inspection</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <h5 className="font-semibold text-sm mb-1">Validity Period</h5>
            <p className="text-sm text-gray-600">1 year from date of issuance</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <h5 className="font-semibold text-sm mb-1">Inspection Duration</h5>
            <p className="text-sm text-gray-600">30 minutes to 2 hours (depends on establishment size)</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Documentary Requirements</h4>
          <ul className="space-y-2">
            {[
              "Application form (available at BFP office)",
              "Occupancy Permit or Certificate of Occupancy",
              "Building Plan approved by the City Engineer's Office",
              "Fire Safety Evaluation Clearance (for new buildings)",
              "Business Permit (for renewal applicants)",
              "Location Plan/Vicinity Map",
              "Proof of ownership (Title, Tax Declaration) or Lease Contract",
              "Electrical Plan (if applicable)",
              "Mechanical/Plumbing Plan (if applicable)",
            ].map((req, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 bg-orange-50 border border-orange-200 rounded-xl p-3">
            <p className="text-sm text-orange-800">
              <strong>Note:</strong> All documents should be photocopied. Bring original copies for verification.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Fire Safety Equipment Checklist</h4>
          <p className="text-sm text-gray-600 mb-3">
            Your establishment must have the following fire safety equipment (depending on building type and size):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ul className="space-y-2 text-sm">
              {[
                "Fire Extinguishers (proper type and quantity)",
                "Fire Alarm System",
                "Emergency Lights",
                "Exit Signs (illuminated)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-sm">
              {[
                "Fire Exit (properly marked and accessible)",
                "Sprinkler System (for large buildings)",
                "Fire Hose and Hose Reel",
                "Smoke Detectors",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <div className="flex gap-2">
            <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-medium text-sm text-orange-900">Where to Apply</h5>
              <div className="space-y-1 text-sm text-orange-800 mt-1">
                <p><strong>Office:</strong> BFP Pamploma Tres City Fire Station</p>
                <p><strong>Address:</strong> Pamploma Tres City, Oriental Mindoro</p>
                <p><strong>Office Hours:</strong> Monday to Friday, 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Step-by-Step Process</h4>
          <div className="space-y-3">
            {[
              { title: "Prepare Requirements", text: "Gather all necessary documents and ensure fire safety equipment is installed." },
              { title: "Visit BFP Pamploma Tres", text: "Go to BFP Pamploma Tres Fire Station and submit application form with requirements." },
              { title: "Pay Inspection Fee", text: "Pay the required fee (amount varies by establishment type and size)." },
              { title: "Schedule Inspection", text: "BFP will schedule a date and time for the actual fire safety inspection." },
              { title: "Actual Inspection", text: "BFP inspector will visit your establishment to check compliance with fire safety standards." },
              { title: "Compliance Check", text: "If deficiencies are found, you must address them and request re-inspection." },
              { title: "Issuance of FSIC", text: "Once compliant, FSIC will be issued within 3-5 working days." },
              { title: "Claim Certificate", text: "Return to BFP office to claim your Fire Safety Inspection Certificate." },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-500 via-orange-500 to-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-sm">{step.title}</h5>
                  <p className="text-sm text-gray-600 mt-1">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Fees</h4>
          <p className="text-sm text-gray-600 mb-3">
            Inspection fees vary depending on establishment type, floor area, and building occupancy classification:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-2 text-sm text-gray-700">
            <p><strong>Small Establishments:</strong> ₱500 - ₱1,500</p>
            <p><strong>Medium Establishments:</strong> ₱1,500 - ₱5,000</p>
            <p><strong>Large Establishments:</strong> ₱5,000 and above</p>
            <p className="text-xs text-gray-500 mt-2">
              Note: Exact fees should be confirmed with BFP Pamploma Tres office as rates may vary
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="font-semibold text-sm mb-1">Important Reminders:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Apply at least 2 weeks before your business permit renewal deadline</li>
            <li>Ensure all fire safety equipment is working and accessible during inspection</li>
            <li>Keep fire exits clear and properly marked</li>
            <li>Have a designated employee present during the inspection</li>
            <li>FSIC must be renewed annually</li>
            <li>Display your FSIC prominently in your establishment</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 30,
    icon: FileText,
    name: "Certificate of Indigency",
    description: "Financial assistance qualification certificate.",
    category: "Social Services",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          A Certificate of Indigency certifies that you are economically disadvantaged and need financial
          assistance. It's commonly required for accessing government programs, financial aid, and other support
          services. The online application walks you through personal, financial, and residency details before
          submission.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">What You'll Need</h4>
          <ul className="space-y-1.5">
            {[
              "Personal details (name, contact info, birth date, sex, civil status, address)",
              "Applicant must be at least 18 years old",
              "Barangay, years of residency, monthly income, and number of dependents",
              "Purpose of the certificate and, optionally, your reason for indigency",
              "A valid ID upload (required) and a supporting document (optional) — PDF, JPG, PNG, max 10MB",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
          <p className="text-sm text-orange-800">
            <strong>Note:</strong> Your application is reviewed by the barangay admin. You'll get a reference number
            to track status, and be notified once your certificate is ready for pickup.
          </p>
        </div>
        <Link href="/dashboard/citizen/services/indigency-certificate">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white font-semibold hover:opacity-90 transition mt-2">
            Apply for Certificate of Indigency
          </button>
        </Link>
      </div>
    ),
  },
  {
    id: 31,
    icon: Users,
    name: "Residency Certificate",
    description: "Proof of residency certification.",
    category: "Government Services",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          A Residency Certificate confirms that you live within Pamploma Tres City. It's often required for school
          enrollment, employment, business permits, bank requirements, and other transactions. The online
          application walks you through personal, residency, and document details before submission.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">What You'll Need</h4>
          <ul className="space-y-1.5">
            {[
              "Personal details (name, contact info, birth date, sex, civil status, complete address)",
              "Applicant must be at least 18 years old",
              "Barangay, years of residency, occupation (optional), and purpose of the certificate",
              "A valid ID upload (required) and proof of residency such as a utility bill or lease contract (optional) — PDF, JPG, PNG, max 10MB",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
          <p className="text-sm text-orange-800">
            <strong>Note:</strong> After submitting, you'll receive a reference number to track your application
            status, and be notified once it's approved.
          </p>
        </div>
        <Link href="/dashboard/citizen/services/residency-certificate">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white font-semibold hover:opacity-90 transition mt-2">
            Apply for Residency Certificate
          </button>
        </Link>
      </div>
    ),
  },
  {
    id: 32,
    icon: TrendingUp,
    name: "Good Moral Certificate",
    description: "Certificate of good moral character.",
    category: "Government Services",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          A Good Moral Certificate attests to a resident's good standing and conduct in the community. It's
          typically required for school admissions, job applications, and some government transactions.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1.5">
            {[
              "Valid government-issued ID",
              "Barangay Clearance",
              "Community Tax Certificate (Cedula)",
              "2x2 ID Photo (1 copy)",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/dashboard/citizen/services/good-moral">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white font-semibold hover:opacity-90 transition mt-4">
            Apply for Good Moral
          </button>
        </Link>
      </div>
    ),
  },
  {
    id: 33,
    icon: FileText,
    name: "Barangay Clearance",
    description: "Apply for your barangay clearance certificate.",
    category: "Public Safety",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          A Barangay Clearance certifies your good standing as a resident and is commonly required for employment,
          business permits, and other government transactions. The online application walks you through personal,
          residency, and document details before submission.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">What You'll Need</h4>
          <ul className="space-y-1.5">
            {[
              "Personal details (name, contact info, birth date, sex, civil status)",
              "Complete address and applicant must be at least 18 years old",
              "Barangay, years of residency, and purpose of the clearance",
              "A valid ID upload (PDF, JPG, PNG — max 10MB)",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
          <p className="text-sm text-orange-800">
            <strong>Note:</strong> After submitting, you'll receive a reference number to track your application
            status, and you'll be notified once it's approved.
          </p>
        </div>
        <Link href="/dashboard/citizen/services/barangay-clearance">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white font-semibold hover:opacity-90 transition mt-2">
            Apply for Barangay Clearance
          </button>
        </Link>
      </div>
    ),
  },
  {
    id: 34,
    icon: AlertCircle,
    name: "Barangay Blotter",
    description: "Report and record incidents in your barangay.",
    category: "Public Safety",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          The Barangay Blotter lets you file an official incident report with your barangay — for theft,
          harassment, disturbances, accidents, property damage, lost & found, and other incidents. The online form
          walks you through personal info, incident details, and witnesses before submission.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">What You'll Need</h4>
          <ul className="space-y-1.5">
            {[
              "Personal details (name, email, age, gender, address, contact number)",
              "Incident type, date, time, and location",
              "Name of the person the complaint is against (if known) and a detailed narrative",
              "Witness names and contact numbers (optional)",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
          <p className="text-sm text-orange-800">
            <strong>Note:</strong> By submitting a blotter report, you confirm that the information provided is
            true and accurate to the best of your knowledge.
          </p>
        </div>
        <Link href="/dashboard/citizen/services/barangay-blotter">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white font-semibold hover:opacity-90 transition mt-2">
            Report an Incident
          </button>
        </Link>
      </div>
    ),
  },
  {
    id: 35,
    icon: Siren,
    name: "Emergency Ambulance Request",
    description: "Request an ambulance for medical emergencies, 24/7.",
    category: "Emergency Procedures",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Request an ambulance directly from your phone. The request page automatically detects your location,
          pre-fills your profile info, and connects you to the fastest available response.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">What You'll Need</h4>
          <ul className="space-y-1.5">
            {[
              "Full name and contact number",
              "Exact address (auto-detected from your location, editable if needed)",
              "Type of emergency (cardiac arrest, breathing difficulty, accident, medical emergency, severe injury, or other)",
              "Additional notes (patient condition, floor number, special instructions)",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-3">
          <p className="text-sm text-red-800">
            <strong>Emergency Use Only:</strong> False reports may result in penalties and delay actual emergencies.
            You can also call the Emergency Hotline directly at{" "}
            <a href="tel:(043)288-8888" className="font-semibold underline">
              (043) 288-8888
            </a>
            .
          </p>
        </div>
        <Link href="/dashboard/citizen/emergency/ambulance">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white font-semibold hover:opacity-90 transition mt-2">
            Request Ambulance Now
          </button>
        </Link>
      </div>
    ),
  },
  {
    id: 36,
    icon: AlertTriangle,
    name: "Report an Issue",
    description: "Report road damage, garbage, flooding, and other city issues.",
    category: "Public Safety",
    fullContent: (
      <div className="space-y-4 text-left">
        <p className="text-sm text-gray-600">
          Spotted a pothole, an overflowing garbage bin, flooding, or another issue around the city? Report it
          directly so the appropriate city office can look into it.
        </p>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">What You Can Report</h4>
          <ul className="space-y-1.5">
            {[
              "Road damage (potholes, cracked pavement, broken signage)",
              "Garbage and waste collection issues",
              "Flooding and drainage problems",
              "Broken streetlights or damaged public property",
              "Other city infrastructure concerns",
            ].map((req, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
          <p className="text-sm text-orange-800">
            <strong>Tip:</strong> Include a clear description and location details — the more specific, the faster
            the issue can be addressed.
          </p>
        </div>
        <Link href="/dashboard/citizen/report-issue">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white font-semibold hover:opacity-90 transition mt-2">
            Report an Issue
          </button>
        </Link>
      </div>
    ),
  },
]

const categories = [
  "All",
  "Getting Started",
  "Government Services",
  "Health Services",
  "Public Safety",
  "Social Services",
  "Emergency Procedures",
  "Scholarships",
  "Student Services",
  "Youth Programs",
  "Business Registration",
  "Support Programs",
  "Resources",
]

const stats = [
  { label: "Guide Categories", value: `${categories.length - 1}`, icon: Layers },
  { label: "Residents Served", value: "18,500+", icon: Users },
  { label: "Guides Published", value: `${guides.length}+`, icon: TrendingUp },
]

export default function ServicesSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filteredGuides = guides.filter((guide) => {
    const matchesSearch =
      guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === "All" || guide.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const toggleExpanded = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <>
      {/* Guide Grid */}
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
                Citizen Guide
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded-full mx-auto mb-4" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              Everything you need to know to navigate city services, scholarships, youth programs, startup support, and emergency preparedness
            </p>
          </motion.div>

          {/* Search */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search guides..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl border-2 border-gray-100 focus:border-orange-300 focus:outline-none transition"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white border-transparent shadow-md"
                      : "bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-600"
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map((guide, i) => {
              const Icon = guide.icon
              const isExpanded = expandedId === guide.id
              return (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className={`p-8 rounded-3xl bg-white border-2 transition-all group ${
                    isExpanded ? "border-orange-300 shadow-2xl" : "border-gray-100 hover:border-orange-300 hover:shadow-2xl"
                  } ${isExpanded ? "md:col-span-2 lg:col-span-3" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-red-500 via-orange-500 to-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                          {guide.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{guide.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{guide.description}</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpanded(guide.id)}
                    className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 text-white font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
                  >
                    {isExpanded ? "Show Less" : "Read Guide"}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-gray-100">{guide.fullContent}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {filteredGuides.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 via-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Search className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-green-600 bg-clip-text text-transparent mb-3">
                No Guides Found
              </h3>
              <p className="text-gray-600 text-lg">Try searching with different keywords</p>
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
                  <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">Need Assistance?</h2>
            <p className="text-xl text-white/95 max-w-2xl mx-auto font-medium drop-shadow-md">
              Our team is ready to help you with any questions about our services
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