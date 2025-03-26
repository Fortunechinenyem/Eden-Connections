import { useState } from "react";
import {
  FaPrayingHands,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    prayerRequest: "",
    contactPermission: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("Prayer request submitted! Our team will lift this up in prayer.");
    setFormData({
      name: "",
      email: "",
      prayerRequest: "",
      contactPermission: false,
    });
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-indigo-50">
      <Navbar />

      <section className="py-20 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            We're Here to <span className="text-yellow-300">Pray With You</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Whether you need support or want to share praise reports, our prayer
            team is standing by.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="flex items-center mb-8">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FaPrayingHands className="text-purple-700 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-purple-800">
                Prayer Request
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Prayer Need</label>
                <textarea
                  value={formData.prayerRequest}
                  onChange={(e) =>
                    setFormData({ ...formData, prayerRequest: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 h-40"
                  placeholder="How can we pray for you?"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="contactPermission"
                  checked={formData.contactPermission}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contactPermission: e.target.checked,
                    })
                  }
                  className="h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
                />
                <label
                  htmlFor="contactPermission"
                  className="ml-2 text-gray-700"
                >
                  Allow our prayer team to contact me
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold hover:bg-purple-700 transition-colors"
              >
                Submit Prayer Request
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-6">
                Other Ways to Connect
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <FaPhoneAlt className="text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      Prayer Hotline
                    </h3>
                    <p className="text-gray-600">1-800-PRAY-NOW</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Mon-Fri 9am-5pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      Email Us
                    </h3>
                    <p className="text-gray-600">prayer@edenconnections.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      Ministry Headquarters
                    </h3>
                    <p className="text-gray-600">123 Faith Avenue</p>
                    <p className="text-gray-600">Nashville, TN 37212</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-100 rounded-xl p-8 border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                Scripture Encouragement
              </h3>
              <p className="italic text-gray-700 mb-4">
                "Do not be anxious about anything, but in every situation, by
                prayer and petition, with thanksgiving, present your requests to
                God."
              </p>
              <p className="font-bold text-purple-700">Philippians 4:6</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
