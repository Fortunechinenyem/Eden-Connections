import { useState, useEffect } from "react";
import { FaPlay, FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const stats = [
    { number: 1253, label: "Successful Matches" },
    { number: 86, label: "Marriages", plus: true },
    { number: 42, label: "Churches Partnered" },
  ];

  const faqs = [
    {
      question: "How is Eden-Connections different from other dating apps?",
      answer:
        "We focus exclusively on helping Christian singles build God-centered relationships. Every feature—from our faith-based matching algorithm to prayer sharing—is designed to honor Christ in your dating journey.",
    },
    {
      question: "Is this appropriate for divorced Christians?",
      answer:
        "Absolutely. We provide a judgment-free space for divorcees to find new relationships rooted in biblical principles. Many of our success stories involve second marriages built stronger through faith.",
    },
    {
      question: "How do you verify Christian faith?",
      answer:
        "We use a 3-step process: 1) Church attendance verification 2) Statement of faith 3) Community references. You'll see verification badges on profiles you can trust.",
    },
  ];

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
            Where single Christians find love while keeping Christ at the
            center.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white shadow-inner">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-5xl font-bold text-purple-700 mb-2">
                  <Counter target={stat.number} plus={stat.plus} />
                </div>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-16">
            Real <span className="text-yellow-500">Stories</span>, Real{" "}
            <span className="text-yellow-500">Faith</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="relative aspect-video bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white bg-opacity-90 rounded-full p-5 hover:scale-110 transition-transform">
                    <FaPlay className="text-purple-700 text-xl" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">
                    Mark & Jessica's Story
                  </h3>
                  <p className="text-purple-200">
                    Married 2023 • Blended Family
                  </p>
                </div>
              </div>
              <div className="p-6">
                <FaQuoteLeft className="text-purple-200 text-3xl mb-4" />
                <p className="text-gray-600 italic mb-4">
                  "After my divorce, I never thought I'd find someone who
                  understood my commitment to raising kids in faith.
                  Eden-Connections changed everything."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 overflow-hidden mr-4">
                    <img
                      src="/images/couple-1.jpg"
                      alt="Couple"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Jessica R.</h4>
                    <p className="text-purple-600 text-sm">Single Mom of Two</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="relative aspect-video bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white bg-opacity-90 rounded-full p-5 hover:scale-110 transition-transform">
                    <FaPlay className="text-purple-700 text-xl" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">
                    David's Second Chance
                  </h3>
                  <p className="text-purple-200">
                    Engaged 2024 • Ministry Couple
                  </p>
                </div>
              </div>
              <div className="p-6">
                <FaQuoteLeft className="text-purple-200 text-3xl mb-4" />
                <p className="text-gray-600 italic mb-4">
                  "At 52, I'd given up on finding a partner who shared my
                  calling. The prayer matching feature connected me with Sarah -
                  we're now serving in ministry together."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 overflow-hidden mr-4">
                    <img
                      src="/images/couple-2.jpg"
                      alt="Couple"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">David P.</h4>
                    <p className="text-purple-600 text-sm">Pastor & Divorcee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-16">
            Your <span className="text-yellow-500">Questions</span> Answered
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-purple-100 rounded-xl overflow-hidden"
              >
                <button
                  className={`w-full p-6 text-left flex justify-between items-center ${
                    activeFAQ === index ? "bg-purple-50" : "bg-white"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-bold text-purple-800">
                    {faq.question}
                  </h3>
                  <IoIosArrowDown
                    className={`text-purple-600 transition-transform ${
                      activeFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFAQ === index && (
                  <div className="p-6 pt-0 text-gray-600 bg-purple-50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Meet Your{" "}
            <span className="text-yellow-300">Godly Match</span>?
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-10">
            Join thousands of Christian singles who are finding love while
            keeping faith at the center.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-100 transition-all"
            >
              Start Free Today
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-purple-700 transition-all"
            >
              Ask Us Anything
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Counter({ target, plus = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(timer);
          return target;
        }
        return Math.ceil(prev + increment);
      });
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>
      {count.toLocaleString()}
      {plus && count >= target && "+"}
    </>
  );
}
