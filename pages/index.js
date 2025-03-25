import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import {
  FaHeart,
  FaPray,
  FaUserShield,
  FaVideo,
  FaChurch,
  FaChild,
  FaPlay,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-purple-700 to-indigo-800">
      <Navbar />

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/cross-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Find <span className="text-yellow-300">God's Plan</span> for Your
            Love Story
          </h1>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Where single Christians, parents, and divorcees meet to build
            <span className="font-semibold">
              {" "}
              Christ-centered relationships
            </span>
            .
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your Journey
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-700 transition-all"
            >
              Our Mission →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video bg-black">
                <FaVideo className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-white opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white bg-opacity-90 rounded-full p-6 hover:scale-110 transition-transform">
                    <FaPlay className="text-purple-700 text-2xl" />
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Real Stories of{" "}
                <span className="text-yellow-500">Faith-Filled Love</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                "Through Eden-Connections, I met Sarah - a single mom who shared
                my commitment to raising children in Christ. Today we're
                building a blended family grounded in faith."
              </p>
              <div className="flex items-center">
                <div className="rounded-full h-16 w-16 bg-purple-100 overflow-hidden mr-4">
                  <img
                    src="/images/testimonial-couple.jpg"
                    alt="Happy couple"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Michael & Sarah</h4>
                  <p className="text-purple-600">Married June 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-16">
            Designed for{" "}
            <span className="text-yellow-500">Your Unique Journey</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaPray className="text-purple-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Prayer Matching
              </h3>
              <p className="text-gray-600 text-center">
                Start conversations by sharing prayer requests with potential
                matches.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaChild className="text-purple-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Parent-Friendly
              </h3>
              <p className="text-gray-600 text-center">
                Special filters for single parents and blended family
                considerations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaUserShield className="text-purple-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Verified Profiles
              </h3>
              <p className="text-gray-600 text-center">
                Church-verified members for added security and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-900 text-gray-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
            <FaChurch className="text-4xl mx-auto mb-6 text-yellow-300" />
            <p className="text-xl italic mb-6">
              "Love is patient, love is kind. It does not envy, it does not
              boast, it is not proud."
            </p>
            <p className="font-bold">— 1 Corinthians 13:4</p>
            <button className="mt-6 text-sm hover:bg-opacity-30 px-4 py-2 rounded-full transition-all">
              Share This Verse
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-purple-800 mb-8">
            Ready to Meet Your{" "}
            <span className="text-yellow-500">Godly Match</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of Christian singles who are finding love while
            keeping faith at the center.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-xl transition-all hover:scale-105"
          >
            Create Your Free Profile
          </Link>
          <p className="mt-6 text-purple-700">
            No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
