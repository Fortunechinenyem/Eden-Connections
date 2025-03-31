import { FaHeart, FaQuoteLeft, FaShare } from "react-icons/fa";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const successStories = [
  {
    id: 1,
    names: "Michael & Sarah",
    image: "/images/couples/couple1.jpg",
    story:
      "After my divorce, I never imagined finding someone who understood my commitment to raising kids in faith. We connected over our shared love for mission work and were married last summer!",
    tags: ["Blended Family", "Divorcees", "Missionaries"],
    date: "Married June 2023",
  },
  {
    id: 2,
    names: "David & Rebecca",
    image: "/images/couples/couple2.jpg",
    story:
      "At 52, I'd given up on finding a partner who shared my calling. The prayer matching feature connected us - we're now serving in ministry together!",
    tags: ["Late-in-Life Love", "Ministry Couple"],
    date: "Engaged December 2023",
  },
  {
    id: 3,
    names: "Joshua & Leah",
    image: "/images/couples/couple3.jpg",
    story:
      "As single parents, we appreciated the family-friendly filters. Our kids became friends before we even met in person!",
    tags: ["Single Parents", "Long-Distance"],
    date: "Married April 2023",
  },
];

export default function SuccessStories() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-indigo-50">
      <Navbar />

      <section className="py-20 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className=" bg-opacity-20 rounded-full p-3 inline-block mb-6">
            <FaHeart className="text-3xl" />
          </div>
          <h1 className="text-5xl font-bold mb-6">
            God Writes the Best{" "}
            <span className="text-yellow-300">Love Stories</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Real couples who found love while keeping Christ at the center.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.names}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h3 className="text-white text-2xl font-bold">
                      {story.names}
                    </h3>
                    <p className="text-purple-200">{story.date}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="relative mb-6">
                    <FaQuoteLeft className="text-purple-200 text-3xl absolute -top-2 -left-1" />
                    <p className="text-gray-600 italic pl-8">{story.story}</p>
                  </div>

                  <button className="flex items-center text-purple-600 hover:text-purple-800">
                    <FaShare className="mr-2" />
                    Share Their Story
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-purple-700 transition-colors">
              View More Stories
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Is Your Story Next?</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-10">
            Join thousands of Christian singles who are finding love while
            keeping faith at the center.
          </p>
          <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-bold hover:bg-purple-100 transition-colors">
            Start Your Journey
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
