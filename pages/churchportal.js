import { useState } from "react";
import { FaChurch, FaHandshake, FaUsers, FaChartLine } from "react-icons/fa";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ChurchPortal() {
  const [formData, setFormData] = useState({
    churchName: "",
    pastorName: "",
    email: "",
    congregationSize: "",
    denomination: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Our ministry team will contact you shortly.");
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-indigo-50">
      <Navbar />

      <section className="py-20 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className=" bg-opacity-20 rounded-full p-3 inline-block mb-6">
            <FaChurch className="text-3xl" />
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Church <span className="text-yellow-300">Partnership Portal</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Equipping churches to serve singles in their congregation through
            our faith-based platform.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-purple-800 mb-6">
                Why Partner With Us?
              </h2>

              <div className="space-y-8">
                <div className="flex">
                  <div className="bg-purple-100 p-3 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                    <FaUsers className="text-purple-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Serve Your Singles Ministry
                    </h3>
                    <p className="text-gray-600">
                      Provide a safe, theologically-aligned dating option for
                      your unmarried members.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-purple-100 p-3 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                    <FaHandshake className="text-purple-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Verified Member Access
                    </h3>
                    <p className="text-gray-600">
                      Special dashboard to verify your members' faith
                      commitments.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-purple-100 p-3 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                    <FaChartLine className="text-purple-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Free Resources
                    </h3>
                    <p className="text-gray-600">
                      Get our "Christian Dating in Today's World" curriculum for
                      small groups.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-purple-800 mb-6">
                Become a Partner Church
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Church Name*
                  </label>
                  <input
                    type="text"
                    value={formData.churchName}
                    onChange={(e) =>
                      setFormData({ ...formData, churchName: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Pastor/Ministry Leader*
                  </label>
                  <input
                    type="text"
                    value={formData.pastorName}
                    onChange={(e) =>
                      setFormData({ ...formData, pastorName: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email*</label>
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
                  <label className="block text-gray-700 mb-2">
                    Approximate Congregation Size*
                  </label>
                  <select
                    value={formData.congregationSize}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        congregationSize: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Select</option>
                    <option value="<100">Under 100</option>
                    <option value="100-500">100-500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Denomination (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.denomination}
                    onChange={(e) =>
                      setFormData({ ...formData, denomination: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="Non-denominational, Baptist, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold hover:bg-purple-700 transition-colors"
                >
                  Request Partnership
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Already a Partner Church?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-bold hover:bg-purple-100 transition-colors">
              Access Member Verification
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-700 transition-colors">
              Download Resources
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
