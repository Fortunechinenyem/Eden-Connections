import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="py-20 min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Find Love Again, Rooted in Faith
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Join a community of mature Christian singles, single parents, and
            divorcees ready to give love a second chance.
          </p>
          <div className="space-x-4">
            <Link
              href="/signup"
              className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
              Why Choose Eden-Connections?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🙏</div>
                <h3 className="text-xl font-bold mb-2">Faith-Based Matching</h3>
                <p className="text-gray-600">
                  Connect with singles who share your Christian values and
                  beliefs.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-2">Real-Time Chat</h3>
                <p className="text-gray-600">
                  Build meaningful connections through secure messaging.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-2">Safe & Private</h3>
                <p className="text-gray-600">
                  Your privacy and safety are our top priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
