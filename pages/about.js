import {
  FaCross,
  FaHeart,
  FaHandsHelping,
  FaShieldAlt,
  FaUsers,
  FaChurch,
} from "react-icons/fa";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-indigo-50">
      <Navbar />

      <section className="relative py-28 bg-gradient-to-r from-purple-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/cross-pattern.svg')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            More Than <span className="text-yellow-300">Dating</span> - A{" "}
            <span className="text-yellow-300">Faith Journey</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Eden-Connections is where Christian singles find love while keeping
            Christ at the center of their relationships.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-square bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center bg-purple-700 text-white">
                  <FaCross className="text-6xl opacity-50" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">
                Our <span className="text-yellow-500">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2023 by a team of Christian marriage counselors and
                tech enthusiasts, Eden-Connections was born from a simple truth:
                <span className="font-semibold text-purple-700">
                  {" "}
                  God-centered relationships last
                </span>
                .
              </p>
              <p className="text-lg text-gray-600 mb-8">
                After witnessing countless divorcees and single parents struggle
                to find partners who shared their faith values, we created a
                space where
                <span className="font-semibold">
                  {" "}
                  spiritual compatibility comes first
                </span>
                .
              </p>
              <div className="bg-purple-100 border-l-4 border-purple-600 p-4">
                <p className="italic text-purple-800">
                  "So they are no longer two, but one flesh. Therefore what God
                  has joined together, let no one separate."
                  <span className="block font-bold mt-1">— Matthew 19:6</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-16">
            Our <span className="text-yellow-500">Core Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaHeart className="text-purple-700 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-800">
                Christ-Centered
              </h3>
              <p className="text-gray-600">
                Every feature is designed to help you keep God first in your
                relationships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaHandsHelping className="text-purple-700 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-800">
                Authentic Community
              </h3>
              <p className="text-gray-600">
                We verify profiles and foster genuine connections, not casual
                encounters.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaShieldAlt className="text-purple-700 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-800">
                Safe Space
              </h3>
              <p className="text-gray-600">
                Advanced privacy controls protect single parents and divorcees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-16">
            Guided by <span className="text-yellow-500">Faith Leaders</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 shadow-lg">
                <div className="bg-purple-200 h-full w-full flex items-center justify-center">
                  <FaUsers className="text-purple-700 text-5xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-purple-800">
                Pastor Michael T.
              </h3>
              <p className="text-purple-600 mb-4">Marriage Counselor</p>
              <p className="text-gray-600">
                15+ years helping Christian couples build lasting relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 shadow-lg">
                <div className="bg-purple-200 h-full w-full flex items-center justify-center">
                  <FaUsers className="text-purple-700 text-5xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-purple-800">
                Dr. Sarah Johnson
              </h3>
              <p className="text-purple-600 mb-4">Christian Psychologist</p>
              <p className="text-gray-600">
                Specialist in post-divorce healing and blended families.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 shadow-lg">
                <div className="bg-purple-200 h-full w-full flex items-center justify-center">
                  <FaUsers className="text-purple-700 text-5xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-purple-800">
                David & Rebecca M.
              </h3>
              <p className="text-purple-600 mb-4">Success Story</p>
              <p className="text-gray-600">
                Met on Eden-Connections and now lead our mentorship program.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Partnering with{" "}
            <span className="text-yellow-300">Churches Nationwide</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-10">
            We work directly with church leadership to verify members and host
            Christian singles events.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white bg-opacity-20 rounded-lg p-6 w-40 h-40 flex items-center justify-center"
              >
                <FaChurch className="text-4xl text-white opacity-70" />
              </div>
            ))}
          </div>
          <Link
            href="/churches"
            className="inline-block bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:bg-purple-100 transition-all"
          >
            For Church Leaders
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-purple-800 mb-8">
            Ready to Start Your{" "}
            <span className="text-yellow-500">Faith-Filled Journey</span>?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all"
            >
              Join Free Today
            </Link>
            <Link
              href="/stories"
              className="bg-white border-2 border-purple-600 text-purple-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-50 transition-all"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
